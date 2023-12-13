import { DateTime } from "luxon";
import React from "react";

const calculateStartPosition = (
  start: DateTime,
  end: DateTime,
  current: DateTime
) => {
  if (start > current) {
    return 0;
  }
  return Math.round(
    ((current.valueOf() - start.valueOf()) /
      (end.valueOf() - start.valueOf())) *
      95
  ); // 100-5% padding
};

const calculateWidth = (
  start: DateTime,
  end: DateTime,
  current: DateTime,
  currentEnd: DateTime
) => {
  const minEnd = currentEnd > end ? end : currentEnd;
  const maxStart = current < start ? start : current;
  return Math.round(
    ((minEnd.valueOf() - maxStart.valueOf()) /
      (end.valueOf() - start.valueOf())) *
      95
  ); // 100-5% padding
};

const Plop = ({ version, years }: any) => {
  const { now, start, end } = getDates(years);
  return (
    <div className="release">
      <div
        className={`label label-release ${version.status}`}
        style={{ left: -68 }}
      >
        <span>{version.branch}</span>
      </div>
      <div
        className={`plop plop-active ${
          now < version.initialRelease ? "coming" : ""
        } ${start > version.initialRelease ? "cropped" : ""}`}
        style={{
          left: `${calculateStartPosition(
            start,
            end,
            version.initialRelease
          )}%`,
          width: `${calculateWidth(
            start,
            end,
            version.initialRelease,
            version.endOfSupport
          )}%`,
        }}
      ></div>
      <div
        className={`plop plop-migrate ${
          start > version.initialRelease ? "cropped" : ""
        }`}
        style={{
          left: `${calculateStartPosition(
            start,
            end,
            version.initialRelease
          )}%`,
          width: `${calculateWidth(
            start,
            end,
            version.initialRelease,
            version.endCommercialSupport
          )}%`,
        }}
      ></div>
    </div>
  );
};

const getYears = (releases: any) => {
  const today = DateTime.now();
  let minDate = today;
  let maxDate = today;
  releases.forEach((release: any) => {
    minDate =
      minDate < release.initialRelease ? minDate : release.initialRelease;
    maxDate = maxDate > release.endDate ? maxDate : release.endDate;
  });
  const yearEnd = +maxDate.toFormat("kkkk") + 1;
  let displayYearsCount = +maxDate.toFormat("kkkk") - +minDate.toFormat("kkkk");
  displayYearsCount = Math.max(3, displayYearsCount);
  displayYearsCount = Math.min(8, displayYearsCount);
  const yearStart = +maxDate.toFormat("kkkk") - displayYearsCount;
  const years = [];
  for (let year = yearStart; year <= yearEnd; year++) {
    years.push(year);
  }
  return years;
};

const getDates = (
  years: Array<number>
): { now: DateTime; start: DateTime; end: DateTime } => {
  const now = DateTime.now();
  const start = DateTime.fromISO(`${years[0]}-01-01`);
  const end = DateTime.fromISO(`${years[years.length - 1] - 1}-12-31`);
  return { now, start, end };
};

export const Releases = ({ releases }: any) => {
  const years = getYears(releases);
  const { now, start, end } = getDates(years);
  return (
    <div className={`timeline t${years.length - 1}`} style={{ marginLeft: 68 }}>
      <div className="releases" aria-label="Releases barchart" role="figure">
        {releases.map((version: any, index: number) => (
          <Plop
            key={`plop-${version}-${index}`}
            version={version}
            years={years}
          />
        ))}
      </div>
      <div className="axis">
        {years.map((year: number, index: number) => (
          <div key={`year-${index}`} className="year">
            <div key={`year-label-${index}`} className="label">
              {year}
            </div>
          </div>
        ))}
      </div>
      <div
        className="current-date"
        style={{
          left: `${calculateStartPosition(start, end, now)}%`,
        }}
      >
        <div className="label">{now.toFormat("kkkk-LL-dd")}</div>
      </div>
    </div>
  );
};
