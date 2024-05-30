import React,{useState} from "react";

interface InputTextboxProps {
  label: string,
  name: string,
  type: string,
  placeholder: string
}

export default function InputTextbox(props: InputTextboxProps) {
  const [type, setType] = useState(0);
  const handView = () =>{
     type == 0 ? setType(1) : setType(0);    
  }
  const typearray = ['password','text'];
  return (
    <div className="w-full flex flex-col relative">
      <label
        className="block font-medium leading-6 text-gray-900 " style={{textAlign:'left'}}
      >
        {props.label}
      </label>
      <div>
        <input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            name={props.name}
            type={typearray[type]}     
            placeholder={props.placeholder}                
            required
            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
      </div>
      <button className='ml-[535px] mt-[33px] w-[20px]' onClick={handView} style={{position:"absolute",right:3}}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img"><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.68 17.32A9.28 9.28 0 0021 12a9.42 9.42 0 00-3.68-5.32M15 5.5A9.28 9.28 0 003 12a9.43 9.43 0 001.91 3.69m9.28-5.88a2.73 2.73 0 01.49.63"></path><line x1="3" x2="21" y1="21" y2="3" fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line><path fill="none" vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.91 11.68a3.11 3.11 0 012.77-2.77m-1.87 5.28a3 3 0 002.19.91 3.1 3.1 0 003.1-3.1 3 3 0 00-.91-2.19"></path></svg></button>
    </div>
  );
}
