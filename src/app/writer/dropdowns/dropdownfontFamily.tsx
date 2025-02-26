export const DropdownFontFamily = () =>{
    return (<>
  


  <div className="relative max-w-[190px]">
      <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
        {/* <input value='' name="select" id="select" className="px-2 appearance-none outline-none text-gray-800 w-3/4" checked /> */}
        <span className="w-full  px-2 flex  gap-x-2 items-center" ><img src="font_style.svg " className="w-5 " alt="" /> <p className="text-sm text-gray-500">Font family</p></span>
        <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <label  className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </label>
      </div>
      <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
        <div className="cursor-pointer group">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Python</a>
        </div>
        <div className="cursor-pointer group border-t">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Javascript</a>
        </div>
        <div className="cursor-pointer group border-t">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Node</a>
        </div>
        <div className="cursor-pointer group border-t">
          <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">PHP</a>
        </div>
      </div>
    </div>
    
    
    
    </>)
}