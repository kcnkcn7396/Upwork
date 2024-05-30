import React, { useState } from "react";

interface InputSelectProps {
  label: string;
  name: string;
}

export default function InputSelect(props: InputSelectProps) {
  const [height, setHeight] = useState(false);

  const handleClick = () => {
    setHeight(!height);
  };

  return (
    <div className="w-full flex flex-col">
      <label className="block text-sm font-medium leading-6 text-gray-900" style={{textAlign:"left"}}>
        {props.label}
      </label>
      <div className="mt-2 w-full relative">
        <button
          name={props.name}
          onClick={handleClick}
          className="h-[40px] cursor-pointer pl-2 pr-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></button>
        <div
          className={`flex flex-col fixed left-0 ${
            height ? "h-full sm:h-[350px]" : "h-0"
          } w-full bg-gray-700/[.6] overflow-hidden z-10 sm:bg-white sm:shadow-2xl max-sm:bottom-[0px] sm:absolute sm:max-w-[400px] sm:max-h-[400px] sm:overflowy-auto`}
          style={{ transition: "all 0.2s ease-in-out" }}
        >
          <div className="flex flex-col absolute w-full h-5/6 bottom-0 bg-white rounded-tl-3xl rounded-tr-3xl z-30 px-4 sm:h-full">
            <div className="w-full flex justify-between items-center sm:hidden">
              <h1 className="font-semibold mt-4 text-2xl">Select a country</h1>
              <h1
                className="text-2xl font-semibold cursor-pointer"
                onClick={handleClick}
              >
                X
              </h1>
            </div>
            <div className="w-full flex rounded-full border-2 border-gray-300 h-[40px] items-center px-2 my-2">
              <div className="w-1/12">
                <div className="w-[24px] h-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    role="img"
                  >
                    <path
                      vector-effect="non-scaling-stroke"
                      stroke="var(--icon-color, #001e00)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                      d="M10.688 18.377a7.688 7.688 0 100-15.377 7.688 7.688 0 000 15.377zm5.428-2.261L21 21"
                    ></path>
                  </svg>
                </div>
              </div>
              <input className="w-full h-[30px] transparent px-3 outline-none" />
            </div>
            <div className="overflow-y-auto">
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">HongKong</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Saudi Arabia</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Crotia</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">France</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Russia</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">China</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">United States</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Australia</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">United Kingdom</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Mongolia</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Canada</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Mexico</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Brazil</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Denmark</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">Belgium</h1>
              </div>
              <div className="flex item-center bg-white hover:bg-gray-100 w-full h-[40px] cursor-pointer pl-4">
                <h1 className="font-semibold text-md">India</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
