import { Link } from "gatsby";
import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export const Theme = () => (
  <ThemeToggler>
    {({ theme, toggleTheme }: any) => (
      <label className="theme-toggler" role="menu" aria-label="theme toggler">
        <input
          type="checkbox"
          onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
          checked={theme === "dark"}
        />
        <span className="icon">
          <FontAwesomeIcon
            className="moon"
            icon={faMoon}
            tabIndex={0}
            role="menuitem"
            aria-label="dark theme"
          />
          <FontAwesomeIcon
            className="sun"
            icon={faSun}
            tabIndex={0}
            role="menuitem"
            aria-label="light theme"
          />
        </span>
        <span className="text" aria-label={theme}>
          {theme}
        </span>
      </label>
    )}
  </ThemeToggler>
);
