"use client";
import Chip from "./chip";
import SectionHeading from "./section-heading";
import Button from "./button";
import PropTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";
import FAQItem from "./FAQItem";


const FrameComponent4 = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const FAQs = [
    {
      question: 'What type of vehicles are eligible?',
      answer: 'All types of vehicles, including bikes, cars, and trucks, are eligible to join MyFastX as long as they meet the necessary legal and safety requirements.'
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed weekly and transferred directly to your bank account. You can also track your earnings in real-time through the MyFastX app.'
    },
    {
      question: 'What areas does MyFastX operate in?',
      answer: 'MyFastX operates in multiple regions across the country, offering delivery and logistics services in urban and rural areas. We are continually expanding our reach to serve more customers.'
    },
    {
      question: 'What type of vehicles are eligible?',
      answer: 'All types of vehicles, including bikes, cars, and trucks, are eligible to join MyFastX as long as they meet the necessary legal and safety requirements.'
    },
    {
      question: 'How do I get paid?',
      answer: 'Payments are processed weekly and transferred directly to your bank account. You can also track your earnings in real-time through the MyFastX app.'
    },
    {
      question: 'What areas does MyFastX operate in?',
      answer: 'MyFastX operates in multiple regions across the country, offering delivery and logistics services in urban and rural areas. We are continually expanding our reach to serve more customers.'
    }
  ];
  
  return (
    <section
      className={`absolute top-[1359px]  w-full[1137px] flex flex-row items-center justify-start flex-wrap content-start gap-[18px] max-w-full text-left text-base text-dimgray-200 font-rubik ${className}`}
    >
      <div className="w-[520px] flex flex-col items-start justify-start gap-[54px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[43px]">
          <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[15px]">
            <Chip
              text="What our partner says"
              propWidth="unset"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <SectionHeading
              text="Testimonials"
              propAlignSelf="unset"
              propHeight="38px"
              propWidth="160px"
            />
          </div>
          <div className="self-stretch relative leading-[24px]">
            At MyFastX, our commitment to excellence is reflected in the
            feedback from our valued customers. Here's what they have to say
            about their experiences with our quick and reliable delivery and
            logistics services
          </div>
        </div>
        <div className="w-[197px] flex flex-row items-start justify-start pt-0 px-0.5 pb-[58px] box-border">
          <img
            className="h-[92px] flex-1 relative max-w-full overflow-hidden object-contain z-[1]"
            alt=""
            src="/empty-testimonial-content@2x.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[15px] max-w-full">
            <Chip
              text="Join the MyFastX Community Today!"
              propWidth="unset"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <SectionHeading
              text="Ready to Get Started?"
              propAlignSelf="unset"
              propHeight="unset"
              propWidth="180px"
            />
          </div>
        </div>
        <div className="w-[484px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[30px] max-w-full">
          <div className="self-stretch relative leading-[24px]">
            <span>{`Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just `}</span>
            <span className="text-accentcolor">Rs.999</span>
            <span> and start driving your way to success with MyFastX!</span>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
            <Link href={'/Payment'}>
              <button className=" border-r-2 bg-black hover:bg-gray-800 text-white py-2.5 px-4 rounded">
                Register now.
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[484px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[27px] max-w-full">
          <div className="self-stretch relative leading-[24px]">
            <p className="m-0">For more information,</p>
            <p className="m-0">Contact us at:</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-5">
            <div className="flex flex-row items-start justify-start gap-3">
              <div className="h-10 w-10 relative rounded-13xl bg-accentcolor overflow-hidden shrink-0">
                <img
                  className="absolute top-[10px] left-[10px] w-5 h-5 object-cover"
                  loading="lazy"
                  alt=""
                  src="/phone@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[24px]">+91-XXXXX XXXXX</div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-3">
              <div className="h-10 w-10 relative rounded-13xl bg-accentcolor overflow-hidden shrink-0">
                <img
                  className="absolute top-[10px] left-[10px] w-5 h-5 object-cover"
                  loading="lazy"
                  alt=""
                  src="/mail@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative leading-[24px] whitespace-nowrap">
                  support@myfastx.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1087px] flex flex-col items-start justify-start pt-[553px] pb-0 pl-0 pr-[39px] box-border">
        <div className="w-px flex-1 relative border-darkgray border-r-[1px] border-solid box-border z-[3]" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[352px] max-w-full text-black mq450:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[319px] max-w-full">
          <div className="rounded-mini bg-lightgreen overflow-hidden flex flex-col items-start justify-start py-9 px-[41px] box-border gap-7 max-w-full">
            <div className="flex flex-row items-start justify-start gap-[18px]">
              <img
                className="h-16 w-16 relative object-cover"
                loading="lazy"
                alt=""
                src="/avataar-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start relative">
                  <div className="absolute !m-[0] top-[-23px] left-[0px] leading-[24px] font-medium inline-block min-w-[111px]">
                    James Darwin
                  </div>
                  <div className="relative text-smi leading-[24px] inline-block min-w-[125px] z-[1]">
                    Kolkata, West Bengal
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[439px] flex flex-col items-start justify-start gap-[19px] max-w-full text-dimgray-200">
              <blockquote className="m-0 self-stretch relative leading-[24px]">
                “ Joining MyFastX has been a game-changer for me. The flexible
                hours and reliable income have made my life so much easier. “
              </blockquote>
              <div className="self-stretch flex flex-row items-end justify-between gap-5 mq450:flex-wrap">
                <div className="w-[148px] flex flex-col items-start justify-start gap-[38px]">
                  <div className="flex flex-row items-start justify-start gap-2">
                    <img
                      className="h-[22px] w-[22px] relative object-cover min-h-[22px]"
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className="h-[22px] w-[22px] relative object-cover min-h-[22px]"
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className="h-[22px] w-[22px] relative object-cover min-h-[22px]"
                      loading="lazy"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className="h-[22px] w-[22px] relative object-cover min-h-[22px]"
                      alt=""
                      src="/star@2x.png"
                    />
                    <img
                      className="h-[22px] w-[22px] relative object-cover min-h-[22px]"
                      alt=""
                      src="/star@2x.png"
                    />
                  </div>
                  <div className="self-stretch rounded-2xs bg-white overflow-x-auto flex flex-row items-start justify-start py-[17px] px-5 gap-3">
                    <div className="h-2 w-2 relative rounded-4xl bg-accentcolor shrink-0" />
                    <div className="h-2 w-2 relative rounded-4xl bg-gainsboro-100 shrink-0" />
                    <div className="h-2 w-2 relative rounded-4xl bg-gainsboro-100 shrink-0" />
                    <div className="h-2 w-2 relative rounded-4xl bg-gainsboro-100 shrink-0" />
                    <div className="h-2 w-2 relative rounded-4xl bg-gainsboro-100 shrink-0" />
                    <div className="h-2 w-2 relative rounded-4xl bg-gainsboro-100 shrink-0" />
                  </div>
                </div>
                <div className="w-[67px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border">
                  <div className="self-stretch h-[27px] flex flex-row items-start justify-start gap-[13px]">
                    <img
                      className="h-[27px] w-[27px] relative rounded-40xl overflow-hidden shrink-0"
                      alt=""
                      src="/empty-rating-elements.svg"
                    />
                    <img
                      className="h-[27px] w-[27px] relative rounded-40xl overflow-hidden shrink-0"
                      alt=""
                      src="/empty-rating-elements1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[55px] text-xs font-poppins">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <Chip text="Frequently Asked Questions" />
              <SectionHeading text="Got Questions? We’ve Got Answers!" />
            </div>
            <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.11)] rounded-2xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.11)] rounded-2xl bg-gray-100 overflow-hidden flex flex-col items-start justify-start">
                {FAQs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
