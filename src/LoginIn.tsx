import React from 'react'
function LoginIn() {
 return(
    <div>
        <div className='w-[82px] h-[22.5px] mx-auto lg:ml-[20px] mt-[20px]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 28" role="img" aria-hidden="true"><path fill="#14a800" d="M28.18,19.06A6.54,6.54,0,0,1,23,16c.67-5.34,2.62-7,5.2-7s4.54,2,4.54,5-2,5-4.54,5m0-13.34a7.77,7.77,0,0,0-7.9,6.08,26,26,0,0,1-1.93-5.62H12v7.9c0,2.87-1.3,5-3.85,5s-4-2.12-4-5l0-7.9H.49v7.9A8.61,8.61,0,0,0,2.6,20a7.27,7.27,0,0,0,5.54,2.35c4.41,0,7.5-3.39,7.5-8.24V8.77a25.87,25.87,0,0,0,3.66,8.05L17.34,28h3.72l1.29-7.92a11,11,0,0,0,1.36,1,8.32,8.32,0,0,0,4.14,1.28h.34A8.1,8.1,0,0,0,36.37,14a8.12,8.12,0,0,0-8.19-8.31"></path> <path fill="#14a800" d="M80.8,7.86V6.18H77.2V21.81h3.65V15.69c0-3.77.34-6.48,5.4-6.13V6c-2.36-.18-4.2.31-5.45,1.87"></path> <polygon fill="#14a800" points="55.51 6.17 52.87 17.11 50.05 6.17 45.41 6.17 42.59 17.11 39.95 6.17 36.26 6.17 40.31 21.82 44.69 21.82 47.73 10.71 50.74 21.82 55.12 21.82 59.4 6.17 55.51 6.17"></polygon> <path fill="#14a800" d="M67.42,19.07c-2.59,0-4.53-2.05-4.53-5s2-5,4.53-5S72,11,72,14s-2,5-4.54,5m0-13.35A8.1,8.1,0,0,0,59.25,14,8.18,8.18,0,1,0,75.6,14a8.11,8.11,0,0,0-8.18-8.31"></path> <path fill="#14a800" d="M91.47,14.13h.84l5.09,7.69h4.11l-5.85-8.53a7.66,7.66,0,0,0,4.74-7.11H96.77c0,3.37-2.66,4.65-5.3,4.65V0H87.82V21.82h3.64Z"></path></svg></div>
        <div className="w-full justify-center flex overscroll-behavior: auto scroll-mt-50">
          <div className="sm:w-full md:w-3/5 md:border-2 lg:w-[510px] lg:border-2 rounded-lg flex justify-center mt-32 flex-col px-2 w-full">
              <div className=' flex justify-center mt-12 mb-2 text-3xl font-semibold'>Log in to Upwork</div>
              <div className="justify-center flex flex-row  h-10 my-3 w-full border-2 rounded-lg">
                <div className="w-4 mx-2 mt-3"> 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"><path vector-effect="non-scaling-stroke" stroke="var(--icon-color, #001e00)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11a4 4 0 100-8 4 4 0 000 8zM5 21v-.31a7 7 0 017-7v0a7 7 0 017 7V21"></path></svg>
                </div>
                <input type='input' placeholder='Username or email' className='w-full outline-none'></input>
              </div>
              <div className="flex justify-center h-10 my-3">
                <button className='w-full flex flex-row rounded-lg bg-green-600 hover:bg-green-500 active:h-11/12 active:w-11/12 '>
                  <span className='w-full text-white font-semibold pt-2'>Continue</span>  
                </button>
              </div>
              <div className="flex justify-center items-center h-10 my-3">
                <hr className='border-1 border-slate-300 w-1/2 0mr-3  overflow-hidden'></hr>
                <span className='text-lg'>or</span>
                <hr className='border-1 border-slate-300 w-1/2 ml-3  overflow-hidden'></hr>
              </div>
              <div className="flex justify-center h-10 my-3">
                <button className='w-full flex flex-row rounded-lg  bg-blue-600 text-white font-semibold hover:bg-blue-500 active:h-11/12 active:w-11/12'>
                  <div className="w-9 h-9 m-[2px] bg-white  rounded-lg border-black ">
                            <div data-v-0131c582="" className="mt-2 ml-2 google-sso-icon-container"><svg data-v-0131c582="" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48"><g data-v-0131c582=""><path data-v-0131c582="" fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path> <path data-v-0131c582="" fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path> <path data-v-0131c582="" fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path> <path data-v-0131c582="" fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path> <path data-v-0131c582="" fill="none" d="M0 0h48v48H0z"></path></g></svg></div>
                  </div>
                  <span className='w-full text-white font-semibold pt-2 '>Continue with google</span></button>
              </div>  
              <div className="flex justify-center h-10 my-3">
                <button className='flex justify-center items-center w-full h-10 rounded-lg border-black border-2 text-black font-semibold active:h-11/12 active:w-11/12'>
                   <svg width="10px" height="11.4px" version="1.1" viewBox="0 0 3.8469 4.7625" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-64.345 -143.35)"><path d="m65.3 148.04c-0.28391-0.17313-0.67141-0.76332-0.84045-1.2801-0.08795-0.26886-0.11025-0.42084-0.11353-0.77372-5e-3 -0.53416 0.07013-0.78453 0.32071-1.0692 0.32908-0.37386 0.80475-0.48983 1.2754-0.31094 0.28741 0.10923 0.40289 0.10558 0.79215-0.0251 0.25755-0.0864 0.3669-0.10301 0.53413-0.0809 0.27892 0.0369 0.51512 0.14539 0.6838 0.31406l0.138 0.138-0.15036 0.12394c-0.35848 0.29549-0.46412 0.84523-0.24639 1.2822 0.09783 0.19631 0.33073 0.42321 0.48834 0.47574 0.07682 0.0256-0.27148 0.68647-0.49609 0.94128-0.31615 0.35864-0.47304 0.40634-0.86417 0.26274-0.38534-0.14149-0.49243-0.14492-0.83466-0.0268-0.37222 0.12848-0.51369 0.13441-0.68687 0.0288zm0.95956-3.6652c-0.04406-0.11481 0.09887-0.49259 0.25567-0.67578 0.14967-0.17485 0.45436-0.3477 0.61294-0.3477 0.08074 0 0.08756 0.0177 0.06932 0.17944-0.0488 0.43295-0.36807 0.79774-0.77487 0.88535-0.10672 0.0229-0.14178 0.0141-0.16305-0.0413z"></path></g></svg>
                  Continue with apple
                  </button>
              </div>
              <div className="flex justify-center items-center h-10 mt-24 mb-3">
                <hr className='border-1 border-slate-300 w-1/12 mr-2'></hr>
                <span className='text-lg'>Don't have an Upwork account?</span>
                <hr className='border-1 border-slate-300 w-1/12 ml-2'></hr>
              </div>
              <div className="flex justify-center h-10 my-3">
                <button className='sm:w-[150px] w-[218px] rounded-lg border-green-700 border-2 font-semibold text-green-700 active:h-11/12 active:w-[180px]'>Sign Up</button>
              </div>
          </div>
        </div>
          <div className="w-9/10 mx-5 my-10 rounded-lg bg-black  h-[120px] flex justify-center items-center">
          <p className='text-white flex flex-col sm:flex-row'><small>© 2015 - 2024 Upwork® Global Inc.</small><small> <a href="/legal#privacy" target="_self">
            Privacy Policy
           </a></small></p>
          </div>
      </div>
 );   
}
export default LoginIn;