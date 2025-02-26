export const Slide_two = () => {
    return (
        <div className="grid grid-cols-8  justify-between items-center ">
        <div className="col-span-4 flex flex-col items-center">
               <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-end  ">
            <div className="w-full lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                <h1
                    className="text-5xl text-center text-gray-800 dark:text-white  leading-12">
                    Discover our ideas &
                    <span className="text-[#ef4444] ">Creative</span>
                    stories.
                </h1>
                <p className="mt-5 text-base  text-gray-600 dark:text-gray-300  text-center ">
                    A Community where ideas take flight. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto excepturi
                </p>
            </div>
            <div className="flex w-full px-12">
                <div className="flex rounded-md w-full">
                <div className="flex gap-6 justify-center mx-auto">

   <a className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#ef4444] border border-[#ef4444] rounded active:text-[#ef4444] hover:bg-transparent hover:text-[#ef4444] focus:outline-none focus:ring" href="/download">
     Download
   </a>
   
   <a className="inline-block px-12 py-3 text-sm font-medium text-[#ef4444] border border-[#ef4444] rounded hover:bg-[#ef4444] hover:text-white active:bg-[#ef4444] focus:outline-none focus:ring" href="/download">
     Download
   </a>

</div>
                   
                </div>
            </div>
        </div>
    </div>
        </div>
        <div className="col-span-4 flex justify-center w-full ">
        <div className="w-full   rounded-lg  dark:bg-gray-800">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
          alt=""
        />
        <a
          href="/"
          aria-label="Play Video"
          className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
        >
          <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
            <svg
              className="w-10 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
            </svg>
          </div>
        </a>
      </div>
      
    </div>
        </div>

        </div>
      
</div>
    
    );
  };