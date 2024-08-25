import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  title = "Register now for just Rs. 999!",
  propTextDecoration,
  propDisplay,
  propMinWidth,
}) => {
  const signInStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propTextDecoration, propDisplay, propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-2.5 px-4 bg-basedark rounded-6xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-darkslategray ${className}`}
    >
      <div
        className="relative text-xs font-rubik text-white text-left"
        style={signInStyle}
      >
        {title}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Button;
