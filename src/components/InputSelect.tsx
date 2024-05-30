import React from 'react';

interface InputSelectProps {
  label: string,
  name: string
}

export default function InputSelect(props: InputSelectProps) {
  return (
    <div className="w-full flex flex-row">
      <label
        className="block text-sm font-medium leading-6 text-gray-900" style={{textAlign:'left'}}
      >
        {props.label}
      </label>
      <div className="flex justify-center mt-2">
        <select
          name={props.name}
          className="active:w-11/12 pl-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
            <option>Hong Kong</option>
            <option>Hong Kong</option>
            <option>Hong Kong</option>
            <option>Hong Kong</option>
            <option>Hong Kong</option>
            <option>Hong Kong</option>
            <option>Hong Kong</option>
            <option>Hong Kong</option>
        </select>
      </div>
    </div>
  )
}
