import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  schedule,
  flexibleSchedule,
  propWidth,
  propDisplay,
  chooseYourWorkingHoursAndBalan,
}) => {
  const flexibleScheduleStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div
      className={`flex-1 bg-lightgreen overflow-hidden flex flex-col items-start justify-start pt-3 px-3 pb-[22px] box-border gap-[5px] min-w-[151px] max-w-[165px] text-left text-xs text-accentcolor font-poppins ${className}`}
    >
      <img
        className="w-11 h-11 relative object-cover"
        loading="lazy"
        alt=""
        src={schedule}
      />
      <div
        className="w-[123px] relative font-medium inline-block"
        style={flexibleScheduleStyle}
      >
        {flexibleSchedule}
      </div>
      <div className="w-[137px] relative text-3xs font-medium text-black inline-block">
        {chooseYourWorkingHoursAndBalan}
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  schedule: PropTypes.string,
  flexibleSchedule: PropTypes.string,
  chooseYourWorkingHoursAndBalan: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FrameComponent;
