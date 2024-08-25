import { useMemo } from "react";
import PropTypes from "prop-types";

const SectionHeading = ({
  className = "",
  text = "Got Questions? We’ve Got Answers!",
  propAlignSelf,
  propHeight,
  propWidth,
}) => {
  const sectionHeadingStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propAlignSelf, propHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-1.5 text-left text-13xl text-basedark font-rubik ${className}`}
      style={sectionHeadingStyle}
    >
      <h1 className="m-0 relative text-inherit font-medium font-[inherit] shrink-0 mq450:text-lgi mq925:text-7xl">
        {text}
      </h1>
      <div
        className="w-[180px] h-[3px] relative bg-accentcolor shrink-0"
        style={rectangleDivStyle}
      />
    </div>
  );
};

SectionHeading.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default SectionHeading;
