import { Sidebar } from "../Sidebar"
import { Blog } from "./Blogs"
export default () =>{
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
            <div className="w-full  mx-auto ">


<div className=" grid">


  <div className="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">
    <div className="relative">
         <img className="w-40  shrink-0 inline-block " src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg" alt="avatar image" />


    <div
        className="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
        title="User is online"></div>
    </div>

    <div className="flex flex-col px-6">
      <div className="flex h-8 flex-row">
        <a href="https://github.com/EgoistDeveloper/" target="_blank">
          <h2 className="text-lg font-semibold">EgoistDeveloper</h2>
        </a>

        <svg className="my-auto ml-2 h-5 fill-blue-400" xmlns="http://www.w3.org/2000/svg"
           version="1.1" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
          </svg>
      </div>

      <div className="my-2 flex flex-row space-x-2">
        <div className="flex flex-row items-center">
<svg className="mr-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#808080"></path> </g></svg>
          <div className="text-xs text-gray-400/80 hover:text-gray-400">Fullstack Developer</div>
        </div>

        <div className="flex flex-row items-center">
          <svg className="mr-2 h-4 w-4 fill-gray-500/80" xmlns="http://www.w3.org/2000/svg"
           version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
            </svg>

          <div className="text-xs text-gray-400/80 hover:text-gray-400">Istanbul</div>
        </div>

        <div className="flex flex-row items-center">
          <svg className="mr-2 h-4 w-4 fill-gray-500/80" xmlns="http://www.w3.org/2000/svg"
         version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
            </svg>

          <div className="text-xs text-gray-400/80 hover:text-gray-400">who@am.i</div>
        </div>
      </div>

      <div className="mt-2 flex flex-row items-center space-x-5">
        <a href="#"
          className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div className="flex flex-row items-center justify-center">
           <svg  className='w-6 h-6  ' fill="#808080" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 477.666 477.666" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
       <g id="SVGRepo_iconCarrier"> <g> <path d="M470.25,7.41c-4.913-4.913-11.965-7.406-20.976-7.406c-59.281,0-245.431,114.868-317.575,187.019 c-17.694,17.687-32.213,
       35.381-43.175,52.586c-2.182,3.433-2.723,7.664-1.464,11.531c1.261,3.867,4.187,6.971,7.974,8.461 l11.823,4.657l-31.185,12.275c-4.08,1.595-7.131,5.064-8.214,9.304c-6.083,
       23.813-3.849,46.439,6.067,66.918l20.764-20.762 c-3.246-10.279-3.913-21.154-1.864-32.772l56.631-22.289c0.258-0.096,0.452-0.292,0.692-0.398l6.492-6.494 c0.861-1.791,1.455-3.716,
       1.455-5.782c0-5.596-3.424-10.626-8.639-12.675l-28.062-11.042c8.39-11.236,18.42-22.705,29.969-34.253 c70.271-70.272,251.48-179.037,298.31-179.037c0.381,0,0.728,0.009,1.03,0.027c0.194,
       4.843-1.233,20.044-18.377,57.757 l-50.884,38.892c-3.371,2.572-5.348,6.572-5.348,10.821c0,4.24,1.976,8.248,5.348,10.821l13.676,10.457 c-39.397,67.895-88.152,135.479-123.345,170.672c-48.266,
       48.266-90.431,67.575-125.599,56.551l-20.842,20.842 c12.701,6.156,26.155,9.553,40.436,9.553c38.209,0,80.365-22.776,125.269-67.682c39.141-39.141,91.621-112.463,133.697-186.797 c3.344-5.923,
       1.818-13.411-3.584-17.534l-9.002-6.882l39.424-30.129c1.757-1.339,3.166-3.095,4.089-5.11 C485.098,34.958,479.581,16.723,470.25,7.41z"></path> <path d="M237.023,240.629C177.528,278.164,45.347,
       396.747,0,477.662C76.248,434.921,196.704,304.533,237.023,240.629z"></path> </g> </g></svg>

            <span className="font-bold text-gray-600"> 4.6K </span>
          </div>

          <div className="mt-2 text-sm text-gray-400">Blogs</div>
        </a>

        <a href="#"
          className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div className="flex flex-row items-center justify-center">
            <svg className='w-6 h-6 ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#808080"></path> 
      </g></svg> 
            <span className="font-bold text-gray-600"> 45 </span>
          </div>

          <div className="mt-2 text-sm text-gray-400">Likes</div>
        </a>

        <a href="#"
          className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div className="flex flex-row items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
      strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
      <circle opacity="0.4" cx="15" cy="6" r="3" fill="#1C274C"></circle> 
      <ellipse opacity="0.4" cx="16" cy="17" rx="5" ry="3" fill="#1C274C"></ellipse>
     <circle cx="9.00098" cy="6" r="4" fill="#1C274C"></circle> <ellipse 
     cx="9.00098" cy="17.001" rx="7" ry="4" fill="#1C274C"></ellipse> </g></svg> 

            <span className="font-bold text-gray-600"> 120K </span>
          </div>

          <div className="mt-2 text-sm text-gray-400">Followers</div>
        </a>
      </div>
    </div>

    <div className="w-100 flex flex-grow flex-col items-end justify-start">
      <div className="flex flex-row space-x-3">
        <button
          className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600">
          <svg className="mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" 
            version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>

          Follow
        </button>

        <button className="flex rounded-md bg-gray-100 py-2 px-1 text-white 
        transition-all duration-150 ease-in-out hover:bg-gray-200">
          <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" 
            version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
            </svg>
        </button>
      </div>
    </div>
  </div>

    <div className="mt-4 mb-4">
        <h3 className="text-lg font-semibold ">Followers</h3>
        <p className="text-sm text-gray-500">Your have 8 active followers</p>
    </div>
    <ul className="flex gap-2 px-1">
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Alex</h5>
      </li>
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Sarah</h5>
      </li>
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Jericho</h5>
      </li>
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Dianna</h5>
      </li>
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Bernard</h5>
      </li>
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/women/19.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Francis</h5>
      </li>
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Edna</h5>
      </li>
      <li className="flex items-center flex-col">
        <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
        <h5 className="font-semibold text-sm">Carson</h5>
      </li>
    </ul>
  </div>

                <Blog/>       
            </div>
          
        </div>
    </div>

    
    </>)
}
