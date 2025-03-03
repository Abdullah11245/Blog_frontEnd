
import Link from "next/link";
export const Herosection = ()=>{
    return (<>
  
    <div className="container mx-auto  py-2 max-w-screen-xl mt-8 mb-20">
    <section className="bg-white dark:bg-gray-900">
   


    <div className="container px-6 py-8 mx-auto ">
        <div className="mx-auto text-center">
        <div className="flex justify-center p-2 bg-white">
  <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
    <div className="row-span-2 relative flex flex-col rounded-md border border-slate-200" style={{backgroundImage:'url(https://images.unsplash.com/photo-1639411888704-8a4abde75b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <div className="z-10 absolute w-full h-16 rounded-lg text-white bottom-0 flex flex-col px-3 text-start">
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="flex justify-between mt-1">
         <p className="text-sm">Amet consectetur</p>
         <p className="text-sm">10 sep 2023</p>
        </div>
        </div>
        <div className="z-10 absolute w-full h-16 rounded-lg text-white top-0 flex flex-col items-end text-sm p-3 text-start">
        sports
       
        </div>
        <div className="z-0 absolute w-full h-24 rounded-lg  top-0 bg-gradient-to-t from-transparent to-black" ></div>
        <div className="z-0 absolute w-full h-24 rounded-lg  bottom-0 bg-gradient-to-b from-transparent to-black" ></div>
    </div>
  
    <div className="blog-slider flex  flex-col  justify-end items-center">
   
        <div className="swiper-wrapper">
            <div className="blog-slider__item flex items-center swiper-slide">
                <div className="blog-slider__img w-64  flex-shrink-0 overflow-hidden rounded-xl shadow-md">
                    <img className="h-64" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt="" />
                </div>
                <div className="blog-slider__content  ml-2 p-2 text-start ">
                <div className="blog-slider__title text-2xl font-medium text-gray-700 mb-1">Lorem Ipsum Dolor</div>
                    <div className="blog-slider__text text-slate-500 leading-relaxed mb-1 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                   <div className="flex flex-col gap-y-2">
                     <p className="text-sm font-semibold text-gray-600">Follow on Social platform</p>
                     <ul className="flex  space-x-2 mb-3">
    <li>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </li>
    <li>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"></path>
            </svg>
        </a>
    </li>
    <li>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                </path>
            </svg>
        </a>
    </li>
   
                    </ul>
                   </div>
                   <div className="text-sm px-1">
                    Lorem ipsum dolor sit adipisicing elit. suscipit <span className="text-[crimson]">adipisci</span>  repellat <span className="text-[crimson]">adipisci</span>.
                   </div>
                  
                    
                </div>
            </div>
           
           
        </div>
        
         {/* <div className="flex  gap-x-2">
          <div className="bg-gray-200 rounded-full w-2 h-2">

          </div>
          <div className="bg-gray-200 rounded-full w-2 h-2">

         </div>
<div className="bg-[crimson] rounded-full w-2 h-2">

</div>
         </div> */}
    </div>

   
    <div className="grid grid-cols-4 gap-x-8 rounded-md border border-slate-200">
    <div className="relative w-full col-span-4 rounded-lg flex flex-col justify-end border h-72" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
     <div className="z-10 absolute w-full h-16 rounded-lg text-white bottom-0 flex flex-col px-3 text-start">
        <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="flex justify-between mt-1">
         <p className="text-sm">Amet consectetur</p>
         <p className="text-sm">10 sep 2023</p>
        </div>
        </div>
        <div className="z-10 absolute w-full h-16 rounded-lg text-white top-0 flex flex-col items-end text-sm p-3 text-start">
        sports
       
        </div>
        <div className="z-0 absolute w-full h-24 rounded-lg  bottom-0 bg-gradient-to-b from-transparent to-black" ></div>
        <div className="z-0 absolute w-full h-24 rounded-lg  top-0 bg-gradient-to-t from-transparent to-black" ></div>

      
    </div>
    
            
    </div>
  </div>
</div>

           
        </div>

        <div className="max-w-screen-xl mx-auto mt-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
               <div className="flex ">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow gap-y-1.5">
						<div  className=" text-sm font-semibold">Aenean ac tristique lorem, ut mollis dui.</div>
						<div className=" text-xs dark:text-gray-400">5 minutes ago
							<p  className="block dark:text-blue-400 font-semibold lg:ml-2 lg:inline hover:underline">Politics</p>
						</div>
					</div>
				</div>
				<div className="flex  ">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow gap-y-1.5">
						<div  className=" text-sm font-semibold">Nulla consectetur efficitur.</div>
						<div className=" text-xs dark:text-gray-400">14 minutes ago
							<p   className="block dark:text-blue-400 font-semibold lg:ml-2 lg:inline hover:underline">Sports</p>
						</div>
					</div>
				</div>
				<div className="flex  ">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow gap-y-1.5">
						<div  className=" text-sm font-semibold">Vitae semper augue purus tincidunt .</div>
						<div className=" text-xs dark:text-gray-400">22 minutes ago
							<p    className="block dark:text-blue-400 font-semibold lg:ml-2 lg:inline hover:underline">World</p>
						</div>
					</div>
				</div>
				<div className="flex ">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow gap-y-1.5">
						<div className=" text-sm font-semibold">Suspendisse potenti semper augue.</div>
						<div className=" text-xs dark:text-gray-400">3 minutes ago
							<p  className="block dark:text-blue-400 font-semibold lg:ml-2 lg:inline hover:underline">Business</p>
						</div>
					</div>
				</div>
                <div className="flex  ">
					<img alt="" className="flex-shrink-0 rounded-lg object-cover w-16 h-16 mr-3 dark:bg-gray-500" src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" />
					<div className="flex flex-col flex-grow gap-y-1.5">
						<div  className=" text-sm font-semibold">Vitae semper augue purus tincidunt.</div>
						<div className=" text-xs dark:text-gray-400">22 minutes ago
							<p    className="block dark:text-blue-400 font-semibold lg:ml-2 lg:inline hover:underline">World</p>
						</div>
					</div>
				</div>
               
            </div>
        </div>
    </div>
</section>
   </div>
     
  
   
    
    </>)
}
export default Herosection;