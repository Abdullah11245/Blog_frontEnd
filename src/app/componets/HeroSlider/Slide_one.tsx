export const Slide_one = () =>{
    return (<>
    <div className="grid grid-cols-8  justify-between items-center ">
        <div className="col-span-4">
               <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-end py-12 sm:py-24">
            <div className="w-full lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                <h1
                    className="text-5xl text-center text-gray-800 dark:text-white  leading-12">
                    Discover our ideas &
                    <span className="text-[#ef4444] ">Creative</span>
                    stories.
                </h1>
                <p className="mt-5 text-base  text-gray-600 dark:text-gray-300  text-left ">
                    A Community where ideas take flight.
                </p>
            </div>
            <div className="flex w-full px-12">
                <div className="flex rounded-md w-full">
         <div className="relative flex items-center w-full h-12  rouded-b-lg rounded-l-lg focus-within:shadow-lg border bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 "
        type="text"
        id="search"
        placeholder="Search something.." /> 
    </div>
                    <button
                        className="inline-flex items-center h-12 gap-2 bg-[#ef4444] text-white text-base font-semibold py-3 px-6 rounded-r-md">
                        <span>Search</span>
                       
                </button>
                </div>
            </div>
        </div>
    </div>
        </div>
        <div className="col-span-4 flex justify-center w-full ">
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div style={{position: 'relative' , display: 'inline-block'}}>
  <img className="object-cover w-full h-72" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
  <div style={{position: 'absolute' ,top: '0' , right: '0', width: '130px', height: '50px', backgroundColor: 'crimson' ,display:'flex', alignItems:'center' ,justifyContent :'center'}}>
    <p className="text-sm font-semibold text-white text-center ">Necessitatibus</p>
  </div>
</div>
    <div className="py-1 px-2 flex  items-center">
    <div className="flex relative w-10 h-10 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white"><img className="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg" />
        <div className="bg-green-600 rounded-full w-2 h-2 absolute bottom-0 right-0"></div>
    </div>
    <div className="flex flex-col">
     <p className="text-sm font-semibold text-gray-700">Lorem ipsum</p>
     <p className="text-xs"> amet consectetur elit.</p>
    </div>
       
    </div>
   
      </div>

        </div>
      
		</div>
    
    </>)
}