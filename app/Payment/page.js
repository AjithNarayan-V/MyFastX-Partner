// import Link from "next/link";

import Link from "next/link";


const PaymentPage = () => {
    return (
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[22.5px] px-5 pb-[23px] box-border gap-[377.3px] leading-[normal] tracking-[normal] lg:gap-[189px] mq750:gap-[94px] mq450:gap-[47px]">
        <section className="w-[1144px] flex flex-row items-start justify-end py-0 pl-[9px] pr-1.5 box-border max-w-full text-left text-5xl text-basedark font-poppins">
          <div className="flex-1 flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
            <header className="self-stretch flex flex-row items-end justify-between gap-5 text-left text-sm text-basedark font-poppins">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <a className="[text-decoration:none] relative font-semibold inline-block min-w-[61px] whitespace-nowrap text-[inherit]">
                    <span>MyFast</span>
                    <span className="text-accentcolor">X</span>
                  </a>
                </div>
                <img
                  className="h-[25px] w-[25px] relative object-cover min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/download-2@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-3xs">
                  <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[38px]">
                    Partner
                  </a>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-1 text-xs text-gray-300">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[106px] whitespace-nowrap">
                    Help and support
                  </a>
                </div>
              </div>
            </header>
            <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
              <div className="flex flex-col items-start justify-start gap-0.5">
                <h1 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-lgi">
                  SELECT PAYMENT METHOD
                </h1>
                <div className="relative text-sm font-medium">
                  All payments are secured and encrypted
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-[64px] text-gray-200 mq1050:flex-wrap">
                <Link href={'/Payment/Payment-page1'}>
                <div className="w-[407px] rounded-lg bg-whitesmoke-100 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[41px] pb-[72px] pl-[21px] pr-5 box-border min-w-[407px] max-w-full mq750:min-w-full mq1050:flex-1">
                  <div className="w-[214px] h-20 flex flex-row items-start justify-center">
                    <h1 className="m-0 w-[42px] relative text-inherit font-light font-[inherit] inline-block mq450:text-[38px] mq1050:text-[51px]">
                      +
                    </h1>
                  </div>
                  <div className="relative text-base font-medium">
                    Add New Payment Method
                  </div>
                </div>
                </Link>
                <img
                  className="w-[485px] relative max-h-full max-w-full mq1050:flex-1"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="w-[1144px] flex flex-col items-start justify-start gap-6 max-w-full text-left text-xs text-dimgray-300 font-poppins">
          <div className="self-stretch h-px relative [background:linear-gradient(90deg,_#fff,_#d9d9d9_43.5%,_#fff)]" />
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="relative font-medium whitespace-pre-wrap">
              © 2024 MYFASTX TECHNOLOGIES PVT LTD. All Rights Reserved CIN:
              U52219UP2023PTC192260
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default PaymentPage;
  