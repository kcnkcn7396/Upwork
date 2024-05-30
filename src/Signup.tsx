import React from "react";
import InputIconButton from "./components/InputIconButton";
import InputTextbox from "./components/InputTextbox";
import InputPasswordbox from "./components/InputPasswordbox";
import InputSelect from "./components/InputSelect3";
import InputCheckBox from "./components/InputCheckBox";
import InputIconButton2 from "./components/InputIconButton2";

export default function Signup() {
   
 
  return (
    <>
      <div className="flex h-[56px] bg-white sticky top-0 items-center">
        <div className="w-[82px] h-[22px] mx-auto lg:ml-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 102 28"
            role="img"
            aria-hidden="true"
          >
            <path
              fill="#14a800"
              d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"
            ></path>{" "}
            <path
              fill="#14a800"
              d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"
            ></path>{" "}
            <polygon
              fill="#14a800"
              points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"
            ></polygon>{" "}
            <path
              fill="#14a800"
              d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"
            ></path>{" "}
            <path
              fill="#14a800"
              d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"
            ></path>
          </svg>
        </div>
        {/* <h1 className="ml-[24px] text-[23px] font-['Neue Montreal'] text-[#108A00] font-bold">Upwork</h1> */}
      </div>
      <div className="w-full min-h-full sm:mt-[30px]">
        <div className="w-full max-sm:p-[16px] flex flex-col sm:w-3/4 sm:mx-auto lg:max-w-[560px]">
          <h1 className="text-center text-[32px] font-normal my-3 font-['Arial']">
            Sign up to find work you love
          </h1>
          <div className="w-full sm:flex">
            <div className="w-full max-sm:mt-3 sm:mr-[10px] sm:mt-4">
              <InputIconButton content="Continue with Apple" bgcolor="#FFFFFF" />
            </div>
            <div className="w-full max-sm:mt-3 sm:mt-4">
              <InputIconButton2 content="Continue with Google" />
            </div>
          </div>
          <div className="flex justify-around items-center w-full max-sm:my-3 sm:my-5">
            <hr className="w-2/5 border-inherit h-[2.4px] mt-3" />
            <h3>or</h3>
            <hr className="w-2/5 border-inherit h-[2.4px] mt-3" />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex max-sm:mt-3 sm:mt-4">
              <div className="w-full mr-[10px]">
                <InputTextbox name="firstname" type="text" label="First Name" placeholder=""/>
              </div>
              <div className="w-full">
                <InputTextbox name="lastname" type="text" label="Last Name" placeholder=""/>
              </div>
            </div>
            <div className="w-full max-sm:mt-3 sm:mt-4">
              <InputTextbox name="email" type="email" label="Email" placeholder=""/>
            </div>
            <div className="w-full flex flex-col max-sm:mt-3 sm:mt-4">
              <InputPasswordbox  placeholder= "Password(8 or more charactes)"/>
              
            </div>
            <div className="w-full max-sm:mt-3 sm:mt-4">
              <div>
                <InputSelect label="Country" name="country" />
              </div>
            </div>
            <div className="w-full flex items-center max-sm:mt-3 sm:mt-8">
              <InputCheckBox />
              <h1>
                Send me helpful emails to find rewarding work and job leads.
              </h1>
            </div>
            <div className="w-full flex max-sm:mt-3 sm:my-4">
              <InputCheckBox />
              <h1>
                Yes, I understand and agree to the <a href="#" className="underline decoration-green-700 text-green-700">Upwork Terms of Service</a> ,
                including the <a href="#" className="underline decoration-green-700 text-green-700">User Agreement</a> and <a href="#" className="underline decoration-green-700 text-green-700">Privacy Policy</a>.
              </h1>
            </div>
            <div className="w-full sm:w-44 mx-auto flex justify-center items-center bg-green-700 text-white rounded-xl py-2 px-5 max-sm:mt-3 sm:mt-8">
              <span className="font-semibold">Create my account</span>
            </div>
            <div className="flex justify-center my-8">
                <h1 className="mr-2">Here to hire talent?</h1>
                <a className="text-green-700">Join as a client</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
