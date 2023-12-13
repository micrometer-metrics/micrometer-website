import { DateTime } from "luxon"

const PRERELEASE_PATTERN = /[A-Za-z0-9\\.\\-]+?(M|RC)+[0-9]/
const SNAPSHOT_SUFFIX = "SNAPSHOT"
const qualifiers = ["M", "RC", "BUILD-SNAPSHOT", "RELEASE"]

export const parseQualifier = (version: string) => {
  const qual = (version || "")
    .replace(/\d+/g, "")
    .replace(/\./g, " ")
    .replace(/\s/g, "")
  return qualifiers.indexOf(qual) > -1 ? qual : "RELEASE"
}

export const parseVersion = (version: string) => {
  const r = version.toString().split(".")
  if (r.length < 2) {
    return {
      version,
    }
  }
  return {
    version,
    short: `${r[0]}.${r[1]}.${r[2]}`,
    major: `${r[0]}.${r[1]}.x`,
    qualify: qualifiers.indexOf(parseQualifier(version)),
    minor: +r[2],
  }
}

export const compare = (a: string, b: string): number => {
  let result
  const versionA = a.split(".")
  const versionB = b.split(".")
  if (versionA.length === 3) {
    versionA[3] = ""
  }
  if (versionB.length === 3) {
    versionB[3] = ""
  }
  for (let i = 0; i < 3; i += 1) {
    result = parseInt(versionA[i], 10) - parseInt(versionB[i], 10)
    if (result !== 0) {
      return result
    }
  }
  const qualify = (version: string) =>
    qualifiers.indexOf(parseQualifier(version))
  result = qualify(a) - qualify(b)
  if (result !== 0) {
    return result
  }
  return versionA[3].localeCompare(versionB[3])
}

export const parseReleases = (releases: Array<any>) => {
  return releases.map((release: any) => {
    const version = parseVersion(`${release.key}`)
    return version
  })
}

export const parseStatus = (version: string) => {
  if (version.endsWith(SNAPSHOT_SUFFIX)) {
    return "SNAPSHOT"
  }
  if (PRERELEASE_PATTERN.test(version.toString())) {
    return "PRERELEASE"
  }
  return "GENERAL_AVAILABILITY"
}

export const getCurrent = (releases: Array<any>) => {
  const general = releases.filter(
    (release: any) => release.status === "GENERAL_AVAILABILITY"
  )
  if (general.length > 0) {
    return general[0] as any
  }
  return null
}

export const getDocumentation = (doc?: Array<any>): Array<any> => {
  if (!doc) {
    return []
  }
  return doc.sort((a, b) => {
    if (a.current) {
      return -1
    }
    if (b.current) {
      return 1
    }
    return compare(b.version, a.version)
  })
}

export const getVersions = (
  versions?: Array<any>,
  noSort: boolean = false
): Array<any> => {
  if (!versions) {
    return []
  }
  return versions
    .sort((a: any, b: any) => {
      if (noSort) {
        return 0
      }
      return compare(b.branch, a.branch)
    })
    .map(version => {
      let status = "inactive"
      const item = {
        branch: version.branch,
        initialRelease: DateTime.fromISO(version.initialDate),
        initialReleaseDate: version.initialDate,
        endOfSupport: DateTime.fromISO(
          version.ossEnforcedEnd || version.ossPolicyEnd
        ),
        endOfSupportDate: version.ossEnforcedEnd || version.ossPolicyEnd,
        endCommercialSupport: DateTime.fromISO(
          version.commercialEnforcedEnd || version.commercialPolicyEnd
        ),
        endCommercialSupportDate:
          version.commercialEnforcedEnd || version.commercialPolicyEnd,
      }
      const now = DateTime.now()
      if (item.endCommercialSupport > now) {
        status = "migrate"
      }
      if (item.endOfSupport > now) {
        status = "active"
      }
      if (item.initialRelease > now) {
        status = "coming"
      }
      return {
        ...item,
        endDate: item.endCommercialSupport
          ? item.endCommercialSupport
          : item.endOfSupport,
        status: status,
      }
    })
}
