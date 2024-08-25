import { useMemo } from "react";
import PropTypes from "prop-types";

const Chip = ({
  className = "",
  text = "Frequently Asked Questions",
  propWidth,
  propDisplay,
  propMinWidth,
}) => {
  const chipStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`bg-whitesmoke-300 border-accentcolor border-l-[2px] border-solid flex flex-row items-start justify-start py-[3px] px-[9px] whitespace-nowrap text-left text-xs text-black font-poppins ${className}`}
      style={chipStyle}
    >
      <div className="relative font-medium" style={textStyle}>
        {text}
      </div>
    </div>
  );
};

Chip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Chip;
