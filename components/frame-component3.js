import Button from "./button";
import FrameComponent from "./frame-component";
import Chip from "./chip";
import SectionHeading from "./section-heading";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";
import Link from "next/link";


const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[90px] items-center w-[1167px] flex flex-col  justify-start gap-[84px] max-w-full text-center text-base text-accentcolor font-poppins ${className}`}
    >
      <div className="w-[1146px] flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-[17px] max-w-full mq925:flex-wrap">
        <div className="w-[396px] rounded-smi bg-whitesmoke-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[45px] px-[35px] pb-[30px] box-border gap-[47px] min-w-[396px] max-w-full mq450:min-w-full mq925:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[18px]">
            <img
              className="h-[219px] flex-1 relative max-w-full overflow-hidden object-cover"
              alt=""
              src="/httpslottiefilescomanimationstruckdlhb36ze6b@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
            <div className="self-stretch relative font-semibold">
              <p className="m-0">
                <span className="text-basedark">Welcome to MyFast</span>
                <span>X Partner</span>
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">{`Quick & Reliable Delivery and Logistics Solution`}</p>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-smi text-dimgray-100">
              <div className="flex-1 relative font-medium inline-block max-w-full">
                At MyFastX, we are revolutionizing the delivery and logistics
                industry by providing swift, dependable services to our clients.
                Our mission is to ensure every package reaches its destination
                on time, every time.
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[463px] max-w-full text-left text-xs mq700:min-w-full">
          <div className="self-stretch rounded-smi bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start pt-0 pb-[30px] pl-[27px] pr-[25px] box-border gap-[21px] max-w-full">
            <img
              className="ml-[-173px] w-[1038px] relative max-h-full overflow-hidden max-w-[158%] shrink-0"
              loading="lazy"
              alt=""
              src="/frame-14324.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
              <div className="flex flex-col items-start justify-start gap-1.5">
                <div className="relative font-semibold">
                  Drive Your Success with MyFastX
                </div>
                <h2 className="m-0 relative text-xl font-semibold font-[inherit] text-black mq450:text-base">
                  Join Us as a Partner Driver
                </h2>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full text-dimgray-100">
                <div className="flex-1 relative font-medium inline-block max-w-full">
                  <p className="m-0">
                    Are you a vehicle owner looking for new opportunities? Join
                    MyFastX today and become part of a dynamic network of
                    drivers. With us, you’ll enjoy flexible work hours,
                    competitive earnings, and the satisfaction of delivering
                    smiles across the city.
                  </p>
                </div>
              </div>
              <Link href={'/Payment'}>
              <button  className=" border-r-2 bg-black hover:bg-gray-800 text-white py-2.5 px-4 rounded">
                Register now for just Rs. 999!
              </button>
              </Link>

            </div>
          </div>
          <div className="self-stretch rounded-smi bg-white overflow-hidden flex flex-row items-start justify-center gap-[17.7px] mq700:flex-wrap">
            <div className="flex-1 bg-lightgreen overflow-hidden flex flex-col items-start justify-start pt-[13px] px-3 pb-[22px] box-border gap-[4.5px] min-w-[151px] max-w-[165px]">
              <img
                className="w-11 h-11 relative object-cover"
                loading="lazy"
                alt=""
                src="/transaction@2x.png"
              />
              <div className="w-[129px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                <div className="flex-1 relative font-medium">
                  <span>Reliable Income</span>
                  <span className="text-black">{` `}</span>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-px text-3xs text-black">
                <div className="flex-1 relative font-medium">
                  Earn a steady income with consistent delivery requests.
                </div>
              </div>
            </div>
            <FrameComponent
              schedule="/schedule@2x.png"
              flexibleSchedule="Flexible Schedule"
              chooseYourWorkingHoursAndBalan="Choose your working hours and balance your personal life."
            />
            <FrameComponent
              schedule="/online-support@2x.png"
              flexibleSchedule="Support"
              propWidth="123px"
              propDisplay="inline-block"
              chooseYourWorkingHoursAndBalan="Access our dedicated support team whenever you need assistance."
            />
            <FrameComponent
              schedule="/increase@2x.png"
              flexibleSchedule="Growth opportuninies"
              propWidth="unset"
              propDisplay="unset"
              chooseYourWorkingHoursAndBalan="Advance your career with regular training and development programs."
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-left text-xs">
        <Chip
          text="How It Works"
          propWidth="98px"
          propDisplay="inline-block"
          propMinWidth="78px"
        />
        <div className="self-stretch flex flex-row items-end justify-start gap-[103px] max-w-full mq925:flex-wrap">
          <div className="w-[493px] flex flex-col items-start justify-start gap-[72px] min-w-[493px] max-w-full mq700:min-w-full mq925:flex-1">
            <SectionHeading
              text="Simple Steps to Get Started"
              propAlignSelf="unset"
              propHeight="unset"
              propWidth="160px"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[19px] pr-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[59px] max-w-full">
                <FrameComponent1
                  addUserMale="/add-user-male@2x.png"
                  registerOnline="Register Online"
                  fillOutOurEasyOnlineApplicatio="Fill out our easy online application form and pay the registration fee of Rs. 999"
                />
                <FrameComponent1
                  addUserMale="/verified-account@2x.png"
                  registerOnline="Get Verified"
                  propMinWidth="72px"
                  fillOutOurEasyOnlineApplicatio="Complete the verification process to ensure you meet our standards."
                />
                <FrameComponent1
                  addUserMale="/jeep@2x.png"
                  registerOnline="Start Driving"
                  propMinWidth="76px"
                  fillOutOurEasyOnlineApplicatio="Once approved, start accepting delivery requests and earn money"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[371px] max-w-full mq450:min-w-full">
            <img
              className="self-stretch h-[407px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/httpslottiefilescomanimationsvehiclesk7qobnjup7@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
