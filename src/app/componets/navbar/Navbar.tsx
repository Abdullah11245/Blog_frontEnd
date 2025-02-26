import ToggleButton from "./ToggleButton";
import Link from "next/link";
export const Navbar = () =>{
    return (<>
    
	
  
    <nav className="relative  flex justify-between items-center bg-white h-24  max-w-screen-xl mx-auto">
		<div className=" leading-none flex gap-x-3 items-center" >
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
      <div className="relative border w-full rounded-full">
    <img src="search.svg" className="w-3 absolute text-gray-400 top-1/2 transform -translate-y-1/2 left-4" alt="" />
    <input type="text" className=" h-10 rounded-full w-full px-3  focus:outline-none hover:cursor-pointer placeholder:text-sm" name="" style={{paddingLeft: "40px"}} placeholder="Type to search..." />
    <span className="absolute top-1/2 transform -translate-y-1/2 right-5 border-l pl-4">
        <img src="microphone.svg" className="w-3 text-gray-500 hover:text-green-500 hover:cursor-pointer" alt="" />
    </span>
      </div>
		</div>

  {/* <div className="flex items-center justify-between gap-x-3">
  <div className="flex items-center justify-between gap-x-1">
      <div className="">
      <svg className="w-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#71797E" 
      fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" 
      stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M55.5,23.9V53.5a2,2,0,0,1-2,2h-43a2,2,0,0,1-2-2v-43a2,
      2,0,0,1,2-2H41.64"></path><path d="M19.48,38.77l-.64,5.59a.84.84,0,0,0,.92.93l5.56-.64a.87.87,0,0,0
      ,.5-.24L54.9,15.22a1.66,1.66,0,0,0,0-2.35L51.15,9.1a1.67,1.67,0,0,0-2.36,0L19.71,38.28A.83.83,0,0,0,19.48,38.77Z"></path>
      <line x1="44.87" y1="13.04" x2="50.9" y2="19.24"></line></g></svg>
      </div>
    
     <div className="font-semibold text-xs">Write</div>
    </div>
  <div className=" flex  items-center  justify-center  p-1 relative">
    <svg className="w-8" viewBox="0 0 24 24" fill="#E5E7EB" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
    <path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 
    13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86
    18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 
    2.90991 12.02 2.90991Z" stroke="#292D32" stroke-width="0.3" stroke-miterlimit="10" stroke-linecap="round"></path> 
    <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 
    2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="#292D32" stroke-width="0.3" 
    stroke-miterlimit="4" stroke-linecap="round" stroke-linejoin="round">
    </path> <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#292D32" stroke-width="0.3" stroke-miterlimit="10"></path> </g></svg>
    
    <div className="bg-gray-600 absolute top-0 right-0 text-white rounded-full text-[10px] w-4 h-4  flex items-center justify-center">17</div>
    </div>
    <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-4  text-sm  rounded-md transition duration-200" href="#">
    <div className="py-1 px-2 flex  items-center">
    <div className="flex relative w-10 h-10 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg" />
        <div className="bg-green-600 rounded-full w-2 h-2 absolute bottom-0 right-0"></div>
    </div>
   
       
    </div>
    </a>
    <div>
    <svg className="w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
    </g><g id="SVGRepo_iconCarrier"><path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 
    0zm0-6a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" fill="#71797E">
    </path></g></svg>
    </div>
   
  </div> */}
  
    <div className="flex gap-x-3 items-center">
    <div className="  lg:ml-auto  py-2 px-2  text-black text-sm  font-bold  rounded-md transition duration-200" >
    <img className="w-5 " src="notification.png" alt="" />
  </div>
		<Link className="  lg:ml-auto  py-2 px-4 bg-gray-200 text-black text-sm  font-bold  rounded-full transition duration-200" href='/login'>Sign In</Link>
		<Link className="  py-2 px-4 bg-gray-700 text-sm text-white font-semibold rounded-full transition duration-200" href="/signup">Sign up</Link>
    </div>
  
	</nav>
  
  

		
		
	
    
    
    </>)
}
export default Navbar;