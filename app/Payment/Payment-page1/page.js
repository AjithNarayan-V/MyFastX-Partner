"use client";  // Ensure the component is a client component
import Content from "../../../components/content";
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Correct for app-based routing

const PaymentPage1 = () => {
  const router = useRouter();  // Using router from next/navigation

  const [formValues, setFormValues] = useState({});

  const handleExportValues = (values) => {
    setFormValues(values);

    // Store form values in local storage
    localStorage.setItem('formValues', JSON.stringify(values));

    // Navigate to the next page with query parameters
    router.push(`/Payment/Payment-page2?${new URLSearchParams(values).toString()}`);
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[22.5px] px-5 pb-[23px] box-border gap-[385.2px] leading-[normal] tracking-[normal] lg:gap-[193px] mq750:gap-24 mq450:gap-12">
      <section className="w-[1140.1px] flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5 box-border max-w-full">
          <header className="flex-1 flex flex-row items-end justify-between max-w-full gap-5 text-left text-sm text-basedark font-poppins">
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
        </div>
        <Content onExportValues={handleExportValues} />
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

export default PaymentPage1;
