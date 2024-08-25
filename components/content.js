import { useState } from "react";
import PropTypes from "prop-types";

const Content = ({ className = "", onExportValues }) => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      cardholderName,
      cardNumber,
      expiryDate,
    };

    if (onExportValues) {
      onExportValues(values);
    }
  };

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-px max-w-full text-left text-5xl text-basedark font-poppins ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[5px]">
        <h3 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-lgi">
          ADD PAYMENT METHOD
        </h3>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-[5px] text-sm">
        <div className="relative font-medium">
          All payments are secured and encrypted
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start gap-[191px] max-w-full lg:gap-[95px] mq750:gap-12 mq450:gap-6 mq1050:flex-wrap">
        <div className="w-[436px] flex flex-col items-start justify-end pt-0 px-0 pb-[11.8px] box-border min-w-[436px] max-w-full mq750:min-w-full mq1050:flex-1">
          <form onSubmit={handleSubmit} className="m-0 self-stretch flex flex-col items-start justify-start gap-[47px] max-w-full mq450:gap-[23px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-8 mq450:gap-4">
                <div className="self-stretch rounded-2xs border-gainsboro-300 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-3.5 px-5 pb-[11px]">
                  <input
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    className="w-[184px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative tracking-[0.5px] text-gray-400 text-left inline-block p-0"
                    placeholder="Enter Cardholder Name"
                    type="text"
                  />
                </div>
                <div className="self-stretch rounded-2xs border-gainsboro-300 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-3.5 px-5 pb-[11px]">
                  <input
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-[151px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative tracking-[0.5px] text-gray-400 text-left inline-block p-0"
                    placeholder="Enter Card Number"
                    type="text"
                  />
                </div>
                <div className="self-stretch rounded-2xs border-gainsboro-300 border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start pt-3.5 px-5 pb-[11px]">
                  <input
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-[137px] [border:none] [outline:none] font-rubik text-base bg-[transparent] h-[19px] relative tracking-[0.5px] text-gray-400 text-left inline-block p-0"
                    placeholder="Enter Expiry date"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[9px]">
                  <div className="h-4 w-4 relative rounded-3xl border-silver border-[1px] border-solid box-border overflow-hidden shrink-0">
                    <div className="absolute top-[4px] left-[4px] rounded-4xs bg-accentcolor w-2 h-2" />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="relative text-xs font-rubik text-center">
                      <span className="text-black">{`I give my consent and accept all `}</span>
                      <span className="[text-decoration:underline] text-accentcolor">
                        terms and condition
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer [border:none] py-5 px-[124px] bg-accentcolor self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center whitespace-nowrap hover:bg-seagreen-100 mq450:pl-5 mq450:pr-5 mq450:box-border"
            >
              <div className="relative text-base font-semibold font-poppins text-white text-left">
                Add Payment method
              </div>
            </button>
          </form>
        </div>
        <img
          className="h-[420.8px] flex-1 relative max-w-full overflow-hidden min-w-[333px]"
          loading="lazy"
          alt=""
          src="/group2.svg"
        />
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  onExportValues: PropTypes.func, // Prop to handle exported values
};

export default Content;
