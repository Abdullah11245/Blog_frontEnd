import { Sidebar } from "../Sidebar"
import {Navbar} from "../NavBarAdmin"
 export default ()=>{
    return (<>
     <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
  <Navbar/>

   
     
     <Sidebar/>
    
      <div className="h-full ml-14 mt-16   mb-10 md:ml-64">
     <div className="mb-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-2xl font-bold leading-tight text-gray-600 ">Sub Categories</h4>
                <ul aria-label="current Status" className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                    <li className="flex items-center mr-4">
                        <span>Admin Dashboard</span>
                    </li>
                    <li className="flex items-center mr-4 mt-4 md:mt-0">
                        <div className="mr-2">
                          <svg className="w-3 h-3" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.815 571.815"  transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M76.208,296.042l415.78,272.132c8.286,6.646,12.062,3.941,8.431-6.04L329.355,302.084 c-3.629-9.981-3.596-26.156,0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11L76.284,272.07 C67.958,278.661,67.921,289.395,76.208,296.042z"></path> </g> </g> </g></svg>
                        </div>
                        <span>SubCategories</span>
                    </li>
                </ul>
            </div>
          
        </div>
       
         <div className="flex items-center justify-start"> 
    <div className="mx-auto w-full  bg-white">
        <form>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                           SubCategory Name
                        </label>
                        <input type="text" name="fName" id="fName" placeholder="Category Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                        <label  className="mb-3 block text-base font-medium text-[#07074D]">
                           Catgeory Selection
                        </label>
                       

   

    <div className="relative">
      <div className="h-12 bg-white flex border border-gray-200 rounded items-center">
        <input value="Javascript" name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" checked />

        <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <label for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </label>
      </div>

      <input type="checkbox" name="show_more" id="show_more" className="hidden peer" checked />
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
  
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <label  className="mb-3 block text-base font-medium text-[#07074D]">
                   Rate your SubCategory in case if it need to be censored (Optional)
                </label>
                <input type="number" name="guest" id="guest" placeholder="0" min="0"
                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

           

            <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                   Please make sure to active the status inactive Categories and subcategoires are not shown to the writer 
                </label>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                        <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                        <label  className="pl-3 text-base font-medium text-[#07074D]">
                            Active
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                        <label  className="pl-3 text-base font-medium text-[#07074D]">
                            Inactive
                        </label>
                    </div>
                </div>
            </div>

            <div>
                <button
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Submit
                </button>
            </div>
        </form>
    </div>
        </div>

      
      
      
       
        </div>
      </div>
    
    
    </>)
 }
 
