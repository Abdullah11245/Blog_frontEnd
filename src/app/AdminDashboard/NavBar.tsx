export const Navbar = () =>{
    return (<>

<div className="w-full mx-auto mb-10 ">
  <nav className="  px-6 py-6   flex-col justify-end mx-auto fixed top-0 left-0 bg-white z-0 w-full ">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
    <a href="#" className="flex items-center">
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
        </svg>
        <span className="self-center text-lg font-semibold whitespace-nowrap">FlowBite</span>
      </a>
      {/* <div className="flex items-center justify-center w-full md:w-auto">
        <ul className="flex flex-col md:flex-row  md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#" className="bg-blue-700 md:bg-transparent text-white  font-semibold block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b  font-semibold border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:bg-gray-50 border-b  font-semibold border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
          </li>
           <li>
              <a href="#" className="text-gray-700 hover:bg-gray-50 border-b  font-semibold border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Contact</a>
            </li>
           
        </ul>
      </div> */}
      <div className="flex gap-x-3 items-center">
      
     
      
      <div className="relative mr-3 md:mr-0 hidden md:block">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
          </svg>
        </div>
        <input type="text" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..." />
      </div>
     


<div className="rounded-full border-2 w-10 h-10">

</div>
<button className="px-6 py-2 min-w-[100px] text-center text-white bg-gray-600 rounded"
>
   Logout
  </button>

  

  
      </div>
      
    </div>
  </nav>
</div>



    
   </>)
}