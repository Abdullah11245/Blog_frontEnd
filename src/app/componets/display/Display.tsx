export const Display = () =>{
   
    return (<>
<div  className="max-w-screen-xl mx-auto mb-32">
<section className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl"> 
    <div className="mb-10 md:mb-16 text-center flex flex-col items-center gap-y-1">
      <h2 className="text-center text-4xl font-bold text-gray-900 ">Most Recent Posts</h2>
      <p  className=" text-lg text-gray-600 dark:text-gray-400 max-w-md">See how <span className="font-semibold">game-changing companies</span>  are making the most of every engagement with Preline.</p>
    </div>
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 ">
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
       <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1  max-w-[230px] ">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">The Pines and the Mountains with beautiful waterfalls</a>
       </div>

       <div className="flex justify-between">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
     <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1 mb-1">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">Architectural Warfare</a>
       </div>

       <div className="flex justify-between">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
     <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1 mb-1">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">The Coding Mania</a>
       </div>

       <div className="flex justify-between">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
     <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1 mb-1">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600"> Blues in Architechture</a>
       </div>

       <div className="flex justify-between">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
       <img src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1  max-w-[230px] mb-1">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">The Pines and the Mountains with beautiful waterfalls</a>
       </div>

       <div className="flex justify-between">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
     <img src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1 mb-1">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">Architectural Warfare</a>
       </div>

       <div className="flex justify-between ">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
     <img src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1 mb-1">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600">The Coding Mania</a>
       </div>

       <div className="flex justify-between">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
  <article className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 flex-grow">
  <div className="group relative flex items-center h-56 w-full shrink-0  overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-32 lg:w-32">
     <img src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </div>

     <div className="flex flex-col gap-1.5">

       <div className="text-gray-500  flex justify-between">
         <div className="flex  items-center gap-x-2">
          <div className="bg-gray-400 rounded-full w-6 h-6"></div>
          <p className="text-sm font-semibold">Lorem ipsum .</p>
          <div className="flex gap-x-1 items-center">
          <svg className="w-3" fill="#C0C0C0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 330 330"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
          stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
          <g id="XMLID_518_"> <path id="XMLID_519_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80.001,
          38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85 c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,
          55v45H110.001V85z"></path> </g> </g></svg>
         
           <p className="text-xs"> Members only</p>
           </div>
         </div>
       </div>
       <div className="text-base font-semibold text-gray-800 leading-1 mb-1">
         <a href="#" className="transition duration-100 hover:text-rose-500 active:text-rose-600"> Blues in Architechture</a>
       </div>

       <div className="flex justify-between">
         <div className="flex gap-x-1 items-center">
         <div className="bg-gray-100 text-black rounded-full text-xs px-2 py-1">Javascript</div>
          <p className="text-xs">3 mins ago</p>
         </div>
        <div className="flex items-center gap-x-1 justify-center px-3">
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
        <path d="M10 10.5H14M12 8.5V12.5M8.25 5H15.75C16.4404 5 17 5.58763 17 6.3125V19L12 
        15.5L7 19V6.3125C7 5.58763 7.55964 5 8.25 5Z" stroke="#464455" stroke-linecap="round"
         stroke-linejoin="round"></path> </g></svg>

         <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
        stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543
         10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#1C274C"></path> <path d="M14 12C14 13.1046 
         13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10
         14 10.8954 14 12Z" fill="#1C274C"></path> <path d="M21 12C21 13.1046 20.1046 14 19 
         14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#1C274C"></path> </g></svg>
        </div>
      
       </div>
       
     </div>
  </article>
</div>

<div className="flex justify-between items-center mt-8 px-3">
                    <div className=" flex items-center gap-x-1">
            <span className="text-white font-semibold text-sm w-7 h-7   bg-gray-600 rounded-full items-center justify-center flex"> 2</span> <span className="text-gray-700 font-semibold">Pages</span>  left ...
			</div>
		   <div className=" flex items-center gap-x-2 ">
      <div
    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
  >
    <button  className="w-8 h-8 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
      </div>

      <div
    className="border border-gray-300 rounded-full text-gray-500 hover:bg-gray-200 hover:border-gray-200 bg-white"
  >
    <button className="w-8 h-8 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
          </div>
		   </div> 
  </div>
</section>






 
  </div>

   
    </>)
}
export default Display