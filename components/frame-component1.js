import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  addUserMale,
  registerOnline,
  propMinWidth,
  fillOutOurEasyOnlineApplicatio,
}) => {
  const registerOnlineStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`z-1 self-stretch flex flex-row items-start justify-start gap-[1.5px] max-w-full text-left text-xs text-accentcolor font-poppins mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
        <div className="w-[50px] h-[50px] rounded-13xl bg-white border-accentcolor border-[1px] border-dashed box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-1.5 px-[5px] z-[1]">
          <div className="h-[38px] w-[38px] relative rounded-36xl bg-whitesmoke-200 overflow-hidden shrink-0">
            <img
              className="absolute top-[8px] left-[7px] w-[22px] h-[22px] object-cover"
              loading="lazy"
              alt=""
              src={addUserMale}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-9 px-0 pb-0">
        <div className="w-[41px] h-0.5 relative border-mintcream border-t-[2px] border-dashed box-border" />
      </div>
      <div className="flex-1 rounded-4xs bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start py-3 pl-[21px] pr-5 box-border gap-[3px] min-w-[248px] max-w-full z-[1]">
        <div
          className="relative font-semibold inline-block min-w-[93px]"
          style={registerOnlineStyle}
        >
          {registerOnline}
        </div>
        <div className="self-stretch relative font-medium text-black">
          {fillOutOurEasyOnlineApplicatio}
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  addUserMale: PropTypes.string,
  registerOnline: PropTypes.string,
  fillOutOurEasyOnlineApplicatio: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default FrameComponent1;
