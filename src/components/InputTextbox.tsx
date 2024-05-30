import React from "react";

interface InputTextboxProps {
  label: string,
  name: string,
  type: string,
  placeholder: string
}

export default function InputTextbox(props: InputTextboxProps) {
  return (
    <div className="w-full flex flex-col">
      <
        className="block font-medium leading-6 text-gray-900 " style={{textAlign:'left'}}
      >
        {props.label}
      </label>
      <div>
        <input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            name={props.name}
            type={props.type}     
            placeholder={props.placeholder}                
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
      </div>
    </div>
  );
}
