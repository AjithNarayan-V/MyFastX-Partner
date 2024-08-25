'use client';

import Button from "./button";
import PropTypes from "prop-types";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";




const FrameComponent2 = ({ className = "" }) => {
  const { data: session } = useSession();
  const router = useRouter()
  return (
    <header
      className={`absolute top-[0px] left-[0px] w-full overflow-hidden flex flex-row items-center justify-between py-[18px] px-[157px] box-border gap-5 max-w-full text-left text-sm text-basedark font-poppins mq450:pl-5 mq450:pr-5 mq450:box-border mq925:pl-[78px] mq925:pr-[78px] mq925:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-start">
        <a className="[text-decoration:none] relative font-semibold inline-block min-w-[61px] whitespace-nowrap text-[inherit]">
          <span>MyFast</span>
          <span className="text-accentcolor">X</span>
        </a>
        <img
          className="h-[25px] w-[25px] relative object-cover"
          loading="lazy"
          alt=""
          src="/download-2@2x.png"
        />
        <a className="[text-decoration:none] relative text-3xs font-semibold text-[inherit] inline-block min-w-[38px]">
          Partner
        </a>
      </div>
      {!session &&
        <div className="flex flex-row items-start justify-start gap-2">

          <button onClick={() => signIn("github")} className=" border-r-2 bg-black hover:bg-gray-800 text-white py-2.5 px-4 rounded">
            SignIn
          </button>
          <button onClick={() => signIn("github")} className=" border-r-2 bg-black hover:bg-gray-800 text-white py-2.5 px-4 rounded">
            Login
          </button>
        </div>
      }
       {session && 
       <button onClick={() => signOut("github")} className=" border-r-2 bg-black hover:bg-gray-800 text-white py-2.5 px-4 rounded">
       signOut
     </button>
        
       }
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
