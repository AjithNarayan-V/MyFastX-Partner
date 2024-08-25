import Button from "./button";
import PropTypes from "prop-types";
import Link from "next/link";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[2535px]  w-full flex flex-row items-start justify-start  text-left text-xs text-accentcolor font-poppins ${className}`}
    >
      <div className="w-screen flex-1 flex flex-col items-center justify-start pt-[406px] px-0 pb-0 box-border min-w-full  " >
        <img
          className="w-screen self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/screenshot-20240622-181334-1@2x.png"
        />
      </div>
      <div className="flex-[0.9715] bg-lightgreen overflow-hidden flex flex-col items-center justify-start pt-[84px] pb-[107px] pl-[21px] pr-5 box-border gap-4 max-w-full z-[1] ml-[-1440px]">
        <div className="w-[661px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[427px] flex flex-col items-start justify-start gap-2.5 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="relative font-semibold z-[2]">
                Drive Your Success with MyFastX
              </div>
            </div>
            <h1 className="m-0 relative text-13xl font-semibold font-[inherit] text-black z-[2] mq450:text-lgi mq925:text-7xl">
              Join Us as a Partner Driver
            </h1>
          </div>
        </div>
        <div className="w-[661px] flex flex-row items-start justify-start pt-0 px-0 pb-[19px] box-border max-w-full text-center text-dimgray-100">
          <div className="flex-1 relative font-medium inline-block max-w-full z-[2]">
            <p className="m-0">
              Are you a vehicle owner looking for new opportunities? Join
              MyFastX today and become part of a dynamic network of drivers.
              With us, you’ll enjoy flexible work hours, competitive earnings,
              and the satisfaction of delivering smiles across the city.
            </p>
          </div>
        </div>
        <div className="w-[661px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
        <Link href={'/Payment'}>
              <button  className=" border-r-2 bg-black hover:bg-gray-800 text-white py-2.5 px-4 rounded">
                Register now for just Rs. 999!
              </button>
              </Link>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
