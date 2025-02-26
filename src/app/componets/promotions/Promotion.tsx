
export const Promotion = () =>{
    return (<>
	<div className="max-w-screen-xl mx-auto ">
     
	 <div className='grid grid-cols-3 max-w-screen-xl mx-auto gap-x-16 mt-12'>
	<div className="grid grid-cols-2 gap-12 col-span-2">
			<div className="flex flex-col col-span-1 dark:bg-gray-900">
			<div  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
      <div  className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
      </div>

      <div  className="mt-4">
		<div className='flex justify-between '>
		<h3  className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
		<p className='font-semibold text-gray-700 rounded-lg text-sm bg-gray-200 p-1'>Sports</p>
		</div>
        
        <p  className="mt-2 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best in className capabilities like badge printing
        </p>
        <div  className="mt-3 flex items-center justify-between   font-medium">
		<div className="flex gap-2 items-center">
        <img className="h-10 w-10 shrink-0 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="" />
        <div className="flex flex-col -gap-[0.5] justify-center">
            < p className="font-semibold text-sm text-black hover:text-blue-600">Prajwal Hallale</p>
			<p className='text-xs text-gray-500'>8 sep.2023 </p>
        </div>
       </div>
	   <div>
	  
	   <p className='text-xs text-gray-400'>10 months ago</p>
	   </div>
	  
        </div>
      </div>
    </div>
			</div>
			<div className="flex flex-col col-span-1 dark:bg-gray-900">
			<div className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
      <div  className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1462103686380-da2f4af3369e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNjA1MDYzfHxlbnwwfHx8fHw%3D" alt="Image Description" />
      </div>

	  <div  className="mt-4">
		<div className='flex justify-between '>
		<h3  className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
		<p className='font-semibold text-gray-700 rounded-lg text-sm bg-gray-200 p-1'>Sports</p>
		</div>
        
        <p  className="mt-2 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best in className capabilities like badge printing
        </p>
        <div className="mt-3 flex items-center justify-between   font-medium">
		<div className="flex gap-2 items-center">
        <img className="h-10 w-10 shrink-0 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="" />
        <div className="flex flex-col -gap-[0.5] justify-center">
            <p className="font-semibold text-sm text-black hover:text-blue-600">Prajwal Hallale</p>
			<p className='text-xs text-gray-500'>8 sep.2023 </p>
        </div>
       </div>
	   <div>
	  
	   <p className='text-xs text-gray-400'>10 months ago</p>
	   </div>
	  
        </div>
      </div>
    </div>
			</div>
		
		</div>
		<div className="col-span-1">
		
			{/* <div className="flex flex-col divide-y dark:divide-gray-700">
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/244x324" />
					<div className="flex flex-col flex-grow">
						<p  className=" hover:underline font-semibold">Aenean ac tristique lorem, ut mollis dui.</p>
						<div className="mt-auto text-xs dark:text-gray-400">5 minutes ago
						<p className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</p>
						</div>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/245x325" />
					<div className="flex flex-col flex-grow">
						<p  className=" hover:underline font-semibold">Nulla consectetur efficitur.</p>
						<div className="mt-auto text-xs dark:text-gray-400">14 minutes ago
							<p  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</p>
						</div>
					</div>
				</div>
				<div>
					<p>Who to follow</p>
					<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/246x326" />
					<div className="flex flex-col flex-grow">
						<p  className=" hover:underline font-semibold">Vitae semper augue purus tincidunt libero.</p>
						<div className="mt-auto text-xs dark:text-gray-400">22 minutes ago
							<p  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">World</p>
						</div>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-20 h-20 mr-4 dark:bg-gray-500" src="https://source.unsplash.com/random/247x327" />
					<div className="flex flex-col flex-grow">
						<p className=" hover:underline font-semibold">Suspendisse potenti.</p>
						<div className="mt-auto text-xs dark:text-gray-400">37 minutes ago
							<p  className="block dark:text-blue-400 lg:ml-2 lg:inline hover:underline">Business</p>
						</div>
					</div>
				</div>
				</div>
				
			</div> */}
		</div>
	</div>
	</div>

   
  

    
    
    </>)
}