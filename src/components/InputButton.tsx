import React from "react";

interface InputButtonProps {
  bgcolor: string,
  fontcolor: string,
  bordercolor:string,
  content: string
}

export default function InputButton(props: InputButtonProps) {
  return (
    <a className={`cursor-pointer inline-flex justify-center rounded-xl text-sm font-bold py-3 px-4 bg-${props.bgcolor}-600 text-${props.fontcolor} w-full border-2 border-${props.bordercolor}-600`}>
      <span>
        {props.content}
      </span>
    </a>
  );
}
