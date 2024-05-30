import React, {useEffect} from 'react';

interface InputSelectProps {
  label: string,
  name: string
}

export default function InputSelect(props: InputSelectProps) {

  useEffect(() => {
    let dropdownButton = document.getElementById('dropdown-button') as HTMLElement;
    let dropdownMenu = document.getElementById('dropdown-menu') as HTMLElement;
    let searchInput = document.getElementById('search-input') as HTMLInputElement;
  
  let isOpen = false; // Set to true to open the dropdown by default
    
  // Function to toggle the dropdown state
  function toggleDropdown() {
    isOpen = !isOpen;
    dropdownMenu.classList.toggle('hidden', !isOpen);
  }
  
  
  dropdownButton.addEventListener('click', () => {
    toggleDropdown();
  });
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const items = dropdownMenu.querySelectorAll('a');
    
    items.forEach((item) => {
      const text = item.textContent as string;
      if (text.includes(searchTerm)) {
        item.style.display = 'block';
      } else { 
        item.style.display = 'none';
      }
    })});

  },[]);
  return (
    <div className="flex flex-col relative w-full justify-center">
        <label className="block text-sm font-medium leading-6 text-gray-900" style={{textAlign:'left'}}>
        {props.label}</label>
        <button id ="dropdown-button" className="flex w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm ">
          <span className="ml-2">China</span>
          <div className='w-full'>
              <svg  style={{float:'right'}} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
          </div>
        </button>
        <div id="dropdown-menu" style={{top:60}} className="w-full hidden absolute z-1 lg:w-1/3 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ">
          <div className='w-full flex flex-row h-8'>
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19.25 19.25-3.75-3.75m-10.75-4.5c0-3.45178 2.79822-6.25 6.25-6.25 3.4518 0 6.25 2.79822 6.25 6.25 0 3.4518-2.7982 6.25-6.25 6.25-3.45178 0-6.25-2.7982-6.25-6.25z" stroke="#141414" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>
            <input id="search-input" className="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" />
          </div>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">United States</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Russia</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">China </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Netherlands</a>
        </div>
    </div>
   )
   
}
