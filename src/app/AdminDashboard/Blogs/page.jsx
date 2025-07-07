import { Sidebar } from "../Sidebar"
import {Navbar} from "../NavBarAdmin"
import WritersTable from "../WritersTable"
 export default ()=>{
    return (<>
     <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
  <Navbar/>

   
     
     <Sidebar/>
    
      <div className="h-full ml-14 mt-16   mb-10 md:ml-64">
     <div className="mb-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-2xl font-bold leading-tight text-gray-600">Blogs</h4>
                <ul aria-label="current Status" className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                    <li className="flex items-center mr-4">
                        <span>Admin Dashboard</span>
                    </li>
                    <li className="flex items-center mr-4 mt-4 md:mt-0">
                        <div className="mr-2">
                          <svg className="w-3 h-3" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.815 571.815"  transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M76.208,296.042l415.78,272.132c8.286,6.646,12.062,3.941,8.431-6.04L329.355,302.084 c-3.629-9.981-3.596-26.156,0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11L76.284,272.07 C67.958,278.661,67.921,289.395,76.208,296.042z"></path> </g> </g> </g></svg>
                        </div>
                        <span>Blogs</span>
                    </li>
                </ul>
            </div>
            {/* <div className="mt-6 md:mt-0">
                <button className="mr-3 bg-gray-200 border dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">Back</button>
                <button className="transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
            </div> */}
        </div>
       
        <div className="mt-4 ">
          <div className="w-full overflow-hidden shadow-xs">
            <WritersTable/>
           
          </div>
        </div>

      
      
      
       
        </div>
      </div>
    
    
    </>)
 }
 
