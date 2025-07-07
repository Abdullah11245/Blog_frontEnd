'use client'
import { Sidebar } from "../Sidebar"
import Banner from "./banner"

export default   () =>{

return (<>
 <div className="grid grid-cols-4 max-w-screen-xl">    
        <div className="container flex flex-col mx-auto  col-span-1">
            <aside className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start" id="sidenav-main">
              <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
           <Sidebar/>
           </div>



</aside>

        

        
        </div>
       
        <div className="flex flex-wrap  my-5 col-span-3">
            <div className="  mx-auto ">
                 <div className="mb-2 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-2xl font-bold leading-tight text-gray-600 ">Editor</h4>
                <ul aria-label="current Status" className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                    <li className="flex items-center mr-4">
                        <span>Admin Dashboard</span>
                    </li>
                    <li className="flex items-center mr-4 mt-4 md:mt-0">
                        <div className="mr-2">
                          <svg className="w-3 h-3" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.815 571.815"  transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M76.208,296.042l415.78,272.132c8.286,6.646,12.062,3.941,8.431-6.04L329.355,302.084 c-3.629-9.981-3.596-26.156,0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11L76.284,272.07 C67.958,278.661,67.921,289.395,76.208,296.042z"></path> </g> </g> </g></svg>
                        </div>
                        <span>Editor </span>
                    </li>
                </ul>
            </div>
            <div className="mt-6 md:mt-0 flex items-center ">
                <button className=" bg-gray-200 border dark:bg-gray-700 focus:outline-none  rounded-full transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 p-2 text-sm">
                    <svg className="w-6 h-6" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" enableBackground="new 0 0 100 100"><g id="SVGRepo_bgCarrier" strokeWidth="0">
                    </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g> <path d="M74.656,56.818c3.895,3.729,5.788,8.795,5.788,15.491c0,1.104,0.896,2,2,2s2-0.885,
                    2-1.989 c0-7.736-2.362-13.91-7.022-18.369C66.646,43.639,46.325,44.551,30,45.269c-2.28,0.101-4.461,0.211-6.499,0.28L38.428,
                    30.62 c0.781-0.781,0.781-2.047,0-2.828s-2.048-0.781-2.828,0L17.479,45.915c-0.375,0.375-0.586,0.884-0.586,1.414 s0.211,1.039,
                    0.586,1.414l18.123,18.12c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.415-0.586 c0.781-0.781,0.781-2.048,0-2.828L24.142,
                    49.75c1.915-0.11,3.932-0.261,6.033-0.354C44.919,48.748,65.114,47.688,74.656,56.818z"></path> </g> </g></svg>
                </button>
            <a href="javascript:void(0)" className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See other projects </a>
            </div>
        </div>
                
              
                <Banner/>
            </div>
          
        </div>
    </div>



</>)
}
