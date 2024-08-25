import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log('FAQ clicked');
    setIsOpen(!isOpen);
  };

  return (
    <div className="self-stretch border-gainsboro-200 border-b-[1px] border-solid overflow-hidden flex flex-col items-start justify-start">
      <div
        className="flex flex-row items-start justify-between pt-3 pb-[9px] pl-[18px] pr-[17px] gap-5 cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative font-medium">
          {question}
        </div>
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <img
            className={`w-3 h-3 relative overflow-hidden shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            alt=""
            src="/answer-containers.svg"
          />
        </div>
      </div>
      {isOpen && (
        <div className="pt-3 pb-[9px] pl-[18px] pr-[17px] text-sm text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
