import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface ShowMoreProps {
  countExpired: number;
  showExpired: boolean;
  onToggle: (show: boolean) => void;
}

const ShowMore: React.FC<ShowMoreProps> = ({ countExpired, showExpired, onToggle }) => {
  if (countExpired < 1) {
    return null;
  }

  return (
    <div className="is-size-7 showmore">
      {!showExpired ? (
        <a
          className="showmore-toggle"
          onClick={() => onToggle(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle(true);
            }
          }}
        >
          More
          <FontAwesomeIcon
            icon={faAngleDown}
            style={{ width: 15 }}
          />
        </a>
      ) : (
        <a
          className="showmore-toggle"
          onClick={() => onToggle(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onToggle(false);
            }
          }}
        >
          Less
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{ width: 15 }}
          />
        </a>
      )}
    </div>
  );
};

export default ShowMore;