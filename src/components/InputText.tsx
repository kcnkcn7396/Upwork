import React from 'react';

interface InputTextProps {
  placeholder: string
}

export default function InputText(props: InputTextProps) {
  return (
    <div className='w-full h-[40px]'>
      <div className='flex items-center h-full bg-[#E8F0FE] border-1 border-[#181818] rounded-lg w-full pr-2'>
        <div className='flex justify-center items-center w-1/6 h-full'>
          <div className='w-[16px] h-[16px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11a4 4 0 100-8 4 4 0 000 8zM5 21v-.31a7 7 0 017-7v0a7 7 0 017 7V21"></path></svg>
          </div>
        </div>
        <div className='w-full'>
          <input className='w-full bg-transparent focus:outline-none' placeholder={props.placeholder} style={{outline:'none'}}  />
        </div>
      </div>
    </div>
  )
}
