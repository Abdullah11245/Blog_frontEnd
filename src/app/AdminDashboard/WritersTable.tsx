import { Pagination } from "./Pagination/Pagination";
export const WritersTable = () =>{
    return (<>
<div className=" w-full border px-10  rounded-lg">
            <div className=" py-2 md:py-3 ">
                <div className="flex items-center justify-between ">
                    <p  className="focus:outline-none text-base sm:text-lg md:text-xl max-w-md font-bold leading-normal text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                        <p>Sort By:</p>
                        <select aria-label="select" className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                            <option className="text-sm text-indigo-800">Latest</option>
                            <option className="text-sm text-indigo-800">Oldest</option>
                            <option className="text-sm text-indigo-800">Latest</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className=" py-4 ">
                <div className="sm:flex items-center justify-between  py-1 ">
                    <div className="flex items-center ">
                        <a className="rounded-full focus:outline-none " href=" javascript:void(0)">
                            <div className="py-2 px-8 bg-gray-300  text-black rounded-md">
                                <p>All</p>
                            </div>
                        </a>
                        <a className="rounded-full focus:outline-none ml-4 sm:ml-8" href="javascript:void(0)">
                            <div className="py-2 px-8 bg-gray-200   text-black rounded-md">
                                <p>Done</p>
                            </div>
                        </a>
                        <a className="rounded-full  ml-4 sm:ml-8" href="javascript:void(0)">
                            <div className="py-2 px-8 bg-gray-200  text-black rounded-md">
                                <p>Pending</p>
                            </div>
                        </a>
                    </div>
                    <button  className="  mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-gray-600 hover:bg-gray-700 focus:outline-none rounded">
                        <p className="text-sm font-medium leading-none py-1 text-white">Select All Tasks</p>
                    </button>
                </div>
                <div className="mt-7 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                            <tr  className="focus:outline-none h-14 border border-gray-300 rounded ">
                                <td>
                                    <div className="ml-5">
                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M5 12l5 5l10 -10"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </td>
                                <td className="pl-24">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                    </div>
                                </td>
                                <td className="pl-5">
                                    <div className="flex items-center">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                    </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <rect width="24" height="24" fill=""></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 
                   6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 
                   17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM14 8C14.5523 8 15 8.44772 15 9L15 15C15 15.5523 14.5523 
                    16 14 16C13.4477 16 13 15.5523 13 15L13 9C13 8.44772 13.4477 8 14 8ZM10 8C10.5523 8 11 8.44772 11 9L11 
                 15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15L9 9C9 8.44772 9.44772 8 10 8Z" fill="#949494"></path> </g></svg>
                                        <p className="text-sm leading-none text-gray-600 ml-2">Pause</p>
                                    </div>
                                </td>
                               
                                <td className="pl-5">
                                    <div className="flex items-center">
                                    <svg viewBox="0 0 24 24" width='20' height='20' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 
                1.5 17.799 1.5 12ZM9.87896 8.81803C9.58607 8.52513 9.1112 8.52513 8.8183
                 8.81803C8.52541 9.11092 8.52541 9.5858 8.8183 9.87869L10.9396 12L8.81831 14.1213C8.52542 
                 14.4142 8.52542 14.8891 8.81831 15.182C9.1112 15.4749 9.58608 15.4749 9.87897 15.182L12.0003 
                 13.0607L14.1216 15.182C14.4145 15.4749 14.8894 15.4749 15.1823 15.182C15.4752 14.8891 15.4752 14.4142 15.1823 
                 14.1213L13.0609 12L15.1823 9.87869C15.4752 9.5858 15.4752 9.11092 15.1823 8.81803C14.8894 8.52513 14.4145 8.52513
                  14.1216 8.81803L12.0003 10.9394L9.87896 8.81803Z" fill="#df2a3c"></path> </g></svg>
                                        <p className="text-sm leading-none text-gray-600 ml-2">Reject</p>
                                    </div>
                                </td>
                                <td className="pl-5">
                                    <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at 18:00</button>
                                </td>
                                <td className="pl-4">
                                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                </td>
                                <td>
                                    <div className="relative px-5 pt-2">
                                        <button className="focus:ring-2 rounded-md focus:outline-none"  role="button" aria-label="option">
                                            <svg className="dropbtn"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                            <div  className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                <p>Edit</p>
                                            </div>
                                            <div  className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                <p>Delete</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-3"></tr>
                            <tr  className="focus:outline-none h-14 border border-gray-300 rounded ">
                                <td>
                                    <div className="ml-5">
                                        <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input placeholder="checkbox" type="checkbox" className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M5 12l5 5l10 -10"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="">
                                    <div className="flex items-center pl-5">
                                        <p className="text-base font-medium leading-none text-gray-700 mr-2">Marketing Keynote Presentation</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333" stroke="#3B82F6" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </td>
                                <td className="pl-24">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></circle>
                                        </svg>
                                        <p className="text-sm leading-none text-gray-600 ml-2">Urgent</p>
                                    </div>
                                </td>
                                <td className="pl-5">
                                    <div className="flex items-center">
                                    <svg className='w-6 h-6' fill="#949494" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 52 52"  transform="rotate(180)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> 
                    <path d="M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z">
                  </path> <polygon points="32,36.783 32,15.438 14.043,25.806 "></polygon> </g> </g></svg>
                                        <p className="text-sm leading-none text-gray-600 ml-2">Resume</p>
                                    </div>
                                </td>
                               
                                <td className="pl-5">
                                    <div className="flex items-center">
                                    <svg viewBox="0 0 24 24" width='20' height='20' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 
                1.5 17.799 1.5 12ZM9.87896 8.81803C9.58607 8.52513 9.1112 8.52513 8.8183
                 8.81803C8.52541 9.11092 8.52541 9.5858 8.8183 9.87869L10.9396 12L8.81831 14.1213C8.52542 
                 14.4142 8.52542 14.8891 8.81831 15.182C9.1112 15.4749 9.58608 15.4749 9.87897 15.182L12.0003 
                 13.0607L14.1216 15.182C14.4145 15.4749 14.8894 15.4749 15.1823 15.182C15.4752 14.8891 15.4752 14.4142 15.1823 
                 14.1213L13.0609 12L15.1823 9.87869C15.4752 9.5858 15.4752 9.11092 15.1823 8.81803C14.8894 8.52513 14.4145 8.52513
                  14.1216 8.81803L12.0003 10.9394L9.87896 8.81803Z" fill="#df2a3c"></path> </g></svg>
                                        <p className="text-sm leading-none text-gray-600 ml-2">Reject</p>
                                    </div>
                                </td>
                                <td className="pl-5">
                                    <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-700 bg-green-100 rounded">Two days and 14hrs</button>
                                </td>
                                <td className="pl-4">
                                    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                </td>
                                <td>
                                    <div className="relative px-5 pt-2">
                                        <button className="focus:ring-2 rounded-md focus:outline-none"  role="button" aria-label="option">
                                            <svg className="dropbtn"  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                            <div  className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                <p>Edit</p>
                                            </div>
                                            <div  className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                <p>Delete</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="h-3"></tr>
                           
                            
                           
                            
                          
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination/>
        </div>
      
   
    
    
    
    
    </>)
}
export default WritersTable;