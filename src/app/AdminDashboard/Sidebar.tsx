export const Sidebar = () =>{
    return (<>
    <div className="fixed flex flex-col top-12 left-0 w-14 hover:w-64 md:w-64  bg-white dark:bg-gray-900 h-full  transition-all duration-300  z-80 sidebar ">
 
 <div className="container flex flex-col mx-auto bg-white">
     <aside className="group/sidebar flex flex-col shrink-0 lg:w-[275px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start" id="sidenav-main"><div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
     <a className="transition-colors duration-200 ease-in-out" href="https://www.loopple.com">
     <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g clipPath="url(#clip0)">
     <path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path>
     <path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path>
     <path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path>
   </g>
   <defs>
     <clipPath id="clip0">
       <rect width="51" height="70" fill="white"></rect>
     </clipPath>
   </defs>
 </svg>            </a>
 </div>

 <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

 <div className="flex items-center justify-between px-8 py-5">
     <div className="flex items-center mr-5">
     <div className="mr-5">
         <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
         <img className="w-12 h-12 shrink-0 inline-block rounded-full" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg" alt="avatar image" />
         </div>
     </div>
     <div className="mr-2 ">
         <a href="/writer/profile" className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.00rem]  dark:text-neutral-400/90 text-secondary-inverse">Robert Jason</a>
         <span className="text-gray-600 dark:text-stone-500 font-medium block text-[0.75rem]">SEO Manager</span>
     </div>
     </div>
    
 </div>

 <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

 <div className="relative  my-5 ">
   
     <ul className="flex flex-col py-4 space-y-1">
     <li className='px-2'>
   <a href="#" className="relative bg-gray-200  flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
     <span className="inline-flex justify-center items-center ml-4">
     <svg  className='w-6 h-6' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 10.32C8.433 10.32 10 8.753 10 6.82001C10 4.88701 8.433 3.32001 6.5 3.32001C4.567 3.32001 3 4.88701 3 6.82001C3 8.753 4.567 10.32 6.5 10.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5 10.32C19.433 10.32 21 8.753 21 6.82001C21 4.88701 19.433 3.32001 17.5 3.32001C15.567 3.32001 14 4.88701 14 6.82001C14 8.753 15.567 10.32 17.5 10.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.5 21.32C8.433 21.32 10 19.753 10 17.82C10 15.887 8.433 14.32 6.5 14.32C4.567 14.32 3 15.887 3 17.82C3 19.753 4.567 21.32 6.5 21.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5 21.32C19.433 21.32 21 19.753 21 17.82C21 15.887 19.433 14.32 17.5 14.32C15.567 14.32 14 15.887 14 17.82C14 19.753 15.567 21.32 17.5 21.32Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>            </span>
     <span className="ml-2 text-sm text-black tracking-wide truncate">Cerrar Sesión</span>
   </a>
 </li>
 <li>
   <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
     <span className="inline-flex justify-center items-center ml-4">
     <svg  className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M6.28571 19C3.91878 19 2 17.1038 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 16.0599 20.0726 18.3221 17.5 18.8722" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 16V22M12 16L14 18M12 16L10 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>            </span>
     <span className="ml-2 text-sm tracking-wide truncate">Inicio</span>
   </a>
 </li>
 <li>
   <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
     <span className="inline-flex justify-center items-center ml-4">
     <svg className='w-6 h-6' fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 477.666 477.666" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M470.25,7.41c-4.913-4.913-11.965-7.406-20.976-7.406c-59.281,0-245.431,114.868-317.575,187.019 c-17.694,17.687-32.213,35.381-43.175,52.586c-2.182,3.433-2.723,7.664-1.464,11.531c1.261,3.867,4.187,6.971,7.974,8.461 l11.823,4.657l-31.185,12.275c-4.08,1.595-7.131,5.064-8.214,9.304c-6.083,23.813-3.849,46.439,6.067,66.918l20.764-20.762 c-3.246-10.279-3.913-21.154-1.864-32.772l56.631-22.289c0.258-0.096,0.452-0.292,0.692-0.398l6.492-6.494 c0.861-1.791,1.455-3.716,1.455-5.782c0-5.596-3.424-10.626-8.639-12.675l-28.062-11.042c8.39-11.236,18.42-22.705,29.969-34.253 c70.271-70.272,251.48-179.037,298.31-179.037c0.381,0,0.728,0.009,1.03,0.027c0.194,4.843-1.233,20.044-18.377,57.757 l-50.884,38.892c-3.371,2.572-5.348,6.572-5.348,10.821c0,4.24,1.976,8.248,5.348,10.821l13.676,10.457 c-39.397,67.895-88.152,135.479-123.345,170.672c-48.266,48.266-90.431,67.575-125.599,56.551l-20.842,20.842 c12.701,6.156,26.155,9.553,40.436,9.553c38.209,0,80.365-22.776,125.269-67.682c39.141-39.141,91.621-112.463,133.697-186.797 c3.344-5.923,1.818-13.411-3.584-17.534l-9.002-6.882l39.424-30.129c1.757-1.339,3.166-3.095,4.089-5.11 C485.098,34.958,479.581,16.723,470.25,7.41z"></path> <path d="M237.023,240.629C177.528,278.164,45.347,396.747,0,477.662C76.248,434.921,196.704,304.533,237.023,240.629z"></path> </g> </g></svg>
     </span>
     <span className="ml-2 text-sm tracking-wide truncate">Autorizaciones</span>
   </a>
 </li>
 <li>
   <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
     <span className="inline-flex justify-center items-center ml-4">
     <svg  className='w-6 h-6 bi bi-bookmarks' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"></path> <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"></path> </g></svg>            </span>
     <span className="ml-2 text-sm tracking-wide truncate">Usuarios</span>
   </a>
 </li>
 <li>
   <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none  text-gray-600 hover:text-gray-800 border-l-4 border-transparent">
     <span className="inline-flex justify-center items-center ml-4">
     <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#1C274C"></path> </g></svg>            </span>
     <span className="ml-2 text-sm tracking-wide truncate">Comercios</span>
   </a>
 </li>

</ul>
    

   


    
     </div>
 </aside>
 </div>
 <div className="flex flex-wrap ml-9 my-5">
     <div className="w-full max-w-full sm:w-1/4 mx-auto text-center">
         <p className="text-lg text-slate-500 py-1">
             Tailwind CSS Component from <a href="https://www.loopple.com/theme/riva-dashboard-tailwind?ref=tailwindcomponents" className="text-slate-700 hover:text-slate-900" target="_blank">Riva Dashboard Library</a> by <a href="https://www.loopple.com" className="text-slate-700 hover:text-slate-900" target="_blank">Loopple Builder</a>.
         </p>
     </div>
 </div>
</div>
    
    </>)
}