"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PaymentPage2 = () => {
    const router = useRouter();
    const { query } = router;

    // Sample card details
    const [cardDetails, setCardDetails] = useState([
        {
            number: "5282 3456 7890 1289",
            name: "John Carter",
            validThru: "09/25",
            cardType: "Visa",
        },
        {
            number: "1234 5678 9876 5432",
            name: "Jane Doe",
            validThru: "10/24",
            cardType: "MasterCard",
        }
    ]);

    return (
        <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[22.5px] px-5 pb-[23px] box-border gap-[45px] leading-[normal] tracking-[normal] mq700:gap-[22px]">
            <div className="w-[1144px] flex flex-row items-start justify-end py-0 pl-[9px] pr-1.5 box-border max-w-full">
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
            <main className="w-[1144px] flex flex-row items-start justify-end pt-0 pb-[26px] pl-[9px] pr-1.5 box-border max-w-full">
                <section className="flex-1 flex flex-col items-start justify-start gap-[6.3px] max-w-full text-left text-5xl text-basedark font-poppins">
                    <div className="flex flex-col items-start justify-start gap-0.5">
                        <h2 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-lgi">
                            SELECT PAYMENT METHOD
                        </h2>
                        <div className="relative text-sm font-medium">
                            All payments are secured and encrypted
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-xl text-gray-800 font-rubik mq975:flex-wrap">
                        <div className="w-[407px] flex flex-col items-start justify-start pt-[24.7px] px-0 pb-0 box-border min-w-[407px] max-w-full mq975:flex-1 mq700:min-w-full">
                            <div className="self-stretch flex flex-col items-start justify-start gap-24 max-w-full mq450:gap-12">
                                {cardDetails.map((card, index) => (
                                    <div key={index} className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
                                        <div className="self-stretch h-[217px] rounded-lg border-seagreen-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[156px] px-[15px] pb-[15px] gap-[11.1px] max-w-full mq450:h-auto mq450:pt-[101px] mq450:pb-5 mq450:box-border">
                                            <div className="mt-[-246px] w-[496.6px] flex flex-row items-end justify-between shrink-0 max-w-[133%] gap-5 mq450:flex-wrap">
                                                <div className="h-[129.9px] flex flex-col items-start justify-start">
                                                    <div className="flex flex-col items-start justify-start gap-px">
                                                        <div className="w-4 h-4 relative rounded-3xl border-silver border-[1px] border-solid box-border overflow-hidden shrink-0">
                                                            <div className="absolute top-[4px] left-[4px] rounded-4xs bg-accentcolor w-2 h-2" />
                                                        </div>
                                                        <div className="flex flex-row items-start justify-start py-0 pl-3 pr-0">
                                                            <img
                                                                className="h-[27.3px] w-[35.8px] relative shrink-0"
                                                                loading="lazy"
                                                                alt=""
                                                                src="/chip.svg"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h-[234.9px] w-[294.6px] relative">
                                                    <img
                                                        className="absolute top-[0px] left-[0px] w-full h-full object-contain"
                                                        alt=""
                                                        src="/circle@2x.png"
                                                    />
                                                    <img
                                                        className="absolute top-[122.1px] left-[139.5px] w-[22.4px] h-[28.3px] object-cover z-[1]"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/logo@2x.png"
                                                    />
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-[13px] box-border max-w-full">
                                                <div className="flex-1 flex flex-row items-end justify-between shrink-0 max-w-full gap-5 mq450:flex-wrap">
                                                    <div className="w-[221px] flex flex-col items-start justify-start gap-[3px]">
                                                        <div className="relative tracking-[0.5px] mq450:text-base">
                                                            {card.number}
                                                        </div>
                                                        <a className="[text-decoration:none] self-stretch relative text-base tracking-[0.5px] text-[inherit]">
                                                            {card.name}
                                                        </a>
                                                    </div>
                                                    <div className="w-[57px] flex flex-col items-end justify-start gap-[3px] text-right text-sm text-gray-600">
                                                        <div className="self-stretch relative tracking-[0.5px] inline-block min-w-[57px]">
                                                            Valid till
                                                        </div>
                                                        <div className="flex flex-row items-start justify-end py-0 px-px">
                                                            <div className="relative tracking-[0.5px] inline-block min-w-[43px]">
                                                                {card.validThru}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <Link href="/Payment/Payment-page1">
                                    <div className="self-stretch rounded-lg bg-whitesmoke-100 overflow-hidden flex flex-row items-start justify-start py-0.5 px-[69px] gap-3 text-[40px] text-gray-200 font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border cursor-pointer">
                                        <h1 className="m-0 w-[27px] relative text-inherit font-light font-[inherit] inline-block mq450:text-5xl mq950:text-13xl">
                                            +
                                        </h1>
                                        <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0 text-base">
                                            <div className="relative font-medium">
                                                Add New Payment Method
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Link href={'Payment/Payment-page1'}>
                                <button className="cursor-pointer [border:none] pt-5 pb-[14.3px] pl-[143px] pr-8 bg-accentcolor self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center gap-5 mq450:pl-5 mq450:box-border">
                                    <div className="relative text-base font-semibold font-poppins text-white text-left inline-block min-w-[121px]">
                                        Proceed to Pay
                                    </div>
                                    <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                                        <img
                                            className="w-[27px] h-[14.7px] relative z-[1]"
                                            alt=""
                                            src="/arrow-1.svg"
                                        />
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <img
                            className="w-[485px] relative max-h-full max-w-full mq975:flex-1"
                            loading="lazy"
                            alt=""
                            src="/group1.svg"
                        />
                    </div>
                </section>
            </main>
            <footer className="w-[1144px] flex flex-col items-start justify-start gap-6 max-w-full text-left text-xs text-dimgray-300 font-poppins">
                <div className="self-stretch h-px relative [background:linear-gradient(90deg,_#fff,_#d9d9d9_43.5%,_#fff)]" />
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="relative font-medium whitespace-pre-wrap">
                        © 2024 TECHNOLOGIES PVT LTD. All Rights Reserved CIN:
                        U52219UP2023PTC192260
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default PaymentPage2;
