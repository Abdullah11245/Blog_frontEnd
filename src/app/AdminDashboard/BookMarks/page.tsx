import { Sidebar } from "../Sidebar"
import {Navbar} from "../NavBarAdmin"
import { Pagination } from "../Pagination/Pagination"
 export default ()=>{
    return (<>
     <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
  <Navbar/>

   
     
     <Sidebar/>
    
      <div className="h-full ml-14 mt-16  mb-10 md:ml-64">
     <div className="mb-2 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-2xl font-bold leading-tight text-gray-600 ">Book Marks</h4>
                <ul aria-label="current Status" className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                    <li className="flex items-center mr-4">
                        <span>Admin Dashboard</span>
                    </li>
                    <li className="flex items-center mr-4 mt-4 md:mt-0">
                        <div className="mr-2">
                          <svg className="w-3 h-3" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.815 571.815"  transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M76.208,296.042l415.78,272.132c8.286,6.646,12.062,3.941,8.431-6.04L329.355,302.084 c-3.629-9.981-3.596-26.156,0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11L76.284,272.07 C67.958,278.661,67.921,289.395,76.208,296.042z"></path> </g> </g> </g></svg>
                        </div>
                        <span>Book Marks</span>
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
       
       <div className="flex flex-wrap -mx-3 mb-5">
  <div className="w-full max-w-full px-3 mb-6  mx-auto">
    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0  rounded-[.95rem] bg-white m-5">
      <div className="relative flex flex-col min-w-0 break-words rounded-2xl b bg-light/30">
     
        <div className=" pt-5 flex justify-between items-stretch flex-wrap  pb-0 bg-transparent">
          <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
            <span className="mr-3 font-semibold text-dark">Projects Deliveries</span>
            <span className="mt-1 font-medium text-secondary-dark text-lg/normal">All projects from the Loopple team</span>
          </h3>
          <div className="relative flex flex-wrap items-center my-2">
          </div>
        </div>
     
        <div className="flex-auto block py-8 pt-6 ">
          <div className="overflow-x-auto">
            <table className="w-full my-0 align-middle text-dark ">
              <thead className="align-bottom">
                <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                  <th className="pb-3 text-start min-w-[175px]">TASK</th>
                  <th className="pb-3 text-end min-w-[100px]">OWNER</th>
                  <th className="pb-3 text-end min-w-[100px]">PROGRESS</th>
                  <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
                  <th className="pb-3 pr-12 text-end min-w-[100px]">DEADLINE</th>
                  <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" bg-gray-100 px-2 rounded">
                  <td className="p-2 pl-2">
                    <div className="flex items-center">
                      <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                      </div>
                      <div className="flex flex-col justify-start">
                        <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Social Media API </a>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <span className="font-semibold text-light-inverse text-md/normal">Olivia Cambell</span>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-green-500 bg-green-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg> 6.5% </span>
                  </td>
                  <td className="p-2 pr-2 text-end">
                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-blue-500 bg-blue-100 rounded-lg"> In Progress </span>
                  </td>
                  <td className="pr-0  text-center">
                    <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              <tr className=" bg-white px-2">
                  <td className="p-2 pl-2">
                    <div className="flex items-center">
                      <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                      </div>
                      <div className="flex flex-col justify-start">
                        <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Social Media API </a>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <span className="font-semibold text-light-inverse text-md/normal">Olivia Cambell</span>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-green-500 bg-green-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg> 6.5% </span>
                  </td>
                  <td className="p-2 pr-2 text-end">
                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-blue-500 bg-blue-100 rounded-lg"> In Progress </span>
                  </td>
                  <td className="pr-0  text-center">
                    <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              <tr className=" bg-gray-100 px-2 rounded">
                  <td className="p-2 pl-2">
                    <div className="flex items-center">
                      <div className="relative inline-block shrink-0 rounded-2xl me-3">
                        <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                      </div>
                      <div className="flex flex-col justify-start">
                        <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Social Media API </a>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <span className="font-semibold text-light-inverse text-md/normal">Olivia Cambell</span>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-green-500 bg-green-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg> 6.5% </span>
                  </td>
                  <td className="p-2 pr-2 text-end">
                    <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-blue-500 bg-blue-100 rounded-lg"> In Progress </span>
                  </td>
                  <td className="pr-0  text-center">
                    <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
                  </td>
                  <td className="p-2 pr-0 text-end">
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                      <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
             
              </tbody>
            </table>
            <div  className="mt-4">
         <Pagination/>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
      
      
       
        </div>
      </div>
    
    
    </>)
 }
 
