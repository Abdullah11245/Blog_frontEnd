export const RightSide = () =>{
    return (<>
    <div className=" flex flex-col gap-y-4">
		<div  className="">
			
			<div className="text-lg font-semibold flex flex-col-reverse justify-start pb-2">
			
              <p className="">Hot Topics this week</p>
			  <p className="text-gray-500 text-sm font-semibold ">
			Consectetur.
			</p>
			</div>
		<div className="  dark:divide-gray-700 py-2">
				<div className="flex  pb-3">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow">
						<div  className=" text-sm font-semibold">Aenean ac tristique lorem, ut mollis dui.</div>
						<div className="mt-auto text-xs dark:text-gray-400">5 minutes ago
							<p  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</p>
						</div>
					</div>
				</div>
				<div className="flex  pb-3">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow">
						<div  className=" text-sm font-semibold">Nulla consectetur efficitur.</div>
						<div className="mt-auto text-xs dark:text-gray-400">14 minutes ago
							<p   className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</p>
						</div>
					</div>
				</div>
				<div className="flex  pb-3">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow">
						<div  className=" text-sm font-semibold">Vitae semper augue purus tincidunt libero.</div>
						<div className="mt-auto text-xs dark:text-gray-400">22 minutes ago
							<p    className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</p>
						</div>
					</div>
				</div>
				<div className="flex pb-3">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow">
						<div className=" text-sm font-semibold">Suspendisse potenti semper augue.</div>
						<div className="mt-auto text-xs dark:text-gray-400">37 minutes ago
							<p  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</p>
						</div>
					</div>
				</div>
			</div>
			<a className=" block text-sm mt-3   rounded   text-gray-600 duration-300" href="#/">Show more members</a>

		</div>
			
	   <div className='py-3'>
            <h1 className="mt-3 text-lg font-semibold sm:py-2 ">Choose a Category </h1>
			<div className="flex flex-wrap items-start font-semibold gap-x-2 gap-y-3  py-2">
    <a className=" relative  py-1 px-2  rounded-full shadow-sm  sm:text-base ring ring-transparent group md:px-4  text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 " href="https://tailwindflex.com/tag/card">
        <span className="text-sm">Card</span>
    </a>
    <a className=" relative  py-1 px-2  rounded-full shadow-sm  sm:text-base ring ring-transparent group md:px-4 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 " href="https://tailwindflex.com/tag/call-to-action">
        <span className="text-sm"> Action</span>
    </a>
    <a className=" relative  py-1 px-2  rounded-full shadow-sm  sm:text-base ring ring-transparent group md:px-4 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 " href="https://tailwindflex.com/tag/carousel">
        <span className="text-sm">Carousel</span>
    </a>
    <a className=" relative  py-1 px-2 rounded-full shadow-sm   sm:text-base ring ring-transparent group md:px-4 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 " href="https://tailwindflex.com/tag/banner">
        <span className="text-sm">Banner</span>
    </a>
   
    <a className=" relative  py-1 px-2  rounded-full shadow-sm  sm:text-base ring ring-transparent group md:px-4 text-white bg-gray-700 dark:bg-gray-400 dark:text-gray-200 " href="https://tailwindflex.com/tag/avatar">
        <span className="text-sm">Avatar</span>
    </a>
    <a className=" relative py-1 px-2  rounded-full shadow-sm  sm:text-base ring ring-transparent group md:px-4 text-gray-900 bg-gray-200 dark:bg-gray-400 dark:text-gray-200 " href="https://tailwindflex.com/tag/blog">
        <span className="text-sm">Blog</span>
    </a>
   

           </div>
		   <div className="flex justify-between items-center mt-3">
			<div className="text-xs flex items-center gap-x-1">
            <span className="text-white font-semibold text-xs w-5 h-5   bg-gray-600 rounded-full items-center justify-center flex"> 2</span> <span className="text-gray-700 font-semibold">Categories</span>  left ...
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
			

</div>
			

    </>)
}