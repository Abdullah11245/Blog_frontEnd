import Menu from '../menu/Menu'
import Card from '../card/Card'
import { Pagination } from '../pagination/Pagination';
// import styles from "../menu/menu.module.css";
import Cardtwo from '../card/cardtwo';
import { FeaturedBlogs } from './featuredblogs';
import styles from './featured.module.css'
export const Featured = () =>{
    return (<>
	<div className='max-w-screen-xl mx-auto gap-x-16 my-24'>
	<div  className="max-w-2xl mb-10">
    <h2  className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Lorem ipsum </h2>
    <p  className="mt-1 text-gray-600 dark:text-gray-400">See how game-changing companies are making the most of every engagement with Preline.</p>
  </div>
  <div className='grid grid-cols-3  gap-x-16 '>
	<div className="grid grid-cols-2 gap-12 col-span-2">
			<div className="flex flex-col dark:bg-gray-900">
			<div  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
            <div  className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
            </div>

			<div  className="mt-4">
		<div className='flex justify-between '>
		<h3  className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
		<div className='font-semibold text-gray-700 rounded-lg text-sm bg-gray-200 p-1'>Sports</div>
		</div>
        
        <p  className="mt-2 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best in className capabilities like badge printing
        </p>
        <div className="mt-3 flex items-center justify-between   font-medium">
		<div className="flex gap-2 items-center">
        <img className="h-10 w-10 shrink-0 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="" />
        <div className="flex flex-col -gap-[0.5] justify-center">
            <div className="font-semibold text-sm text-black hover:text-blue-600">Prajwal Hallale</div>
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
			<div className="flex flex-col dark:bg-gray-900">
			<div  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
      <div  className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1462103686380-da2f4af3369e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNjA1MDYzfHxlbnwwfHx8fHw%3D" alt="Image Description" />
      </div>

	  <div  className="mt-4">
		<div className='flex justify-between '>
		<h3  className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
		<div className='font-semibold text-gray-700 rounded-lg text-sm bg-gray-200 p-1'>Sports</div>
		</div>
        
        <p  className="mt-2 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best in className capabilities like badge printing
        </p>
        <div className="mt-3 flex items-center justify-between   font-medium">
		<div className="flex gap-2 items-center">
        <img className="h-10 w-10 shrink-0 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="" />
        <div className="flex flex-col -gap-[0.5] justify-center">
            <div className="font-semibold text-sm text-black hover:text-blue-600">Prajwal Hallale</div>
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
			<div className="flex flex-col dark:bg-gray-900">
			<div  className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
      <div  className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1668450433152-e56d7e8fe4ee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
      </div>

	  <div  className="mt-4">
		<div className='flex justify-between '>
		<h3  className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
		<div className='font-semibold text-gray-700 rounded-lg text-sm bg-gray-200 p-1'>Sports</div>
		</div>
        
        <p  className="mt-2 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best in className capabilities like badge printing
        </p>
        <div className="mt-3 flex items-center justify-between   font-medium">
		<div className="flex gap-2 items-center">
        <img className="h-10 w-10 shrink-0 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="" />
        <div className="flex flex-col -gap-[0.5] justify-center">
            <div className="font-semibold text-sm text-black hover:text-blue-600">Prajwal Hallale</div>
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
			<div className="flex flex-col dark:bg-gray-900">
			<div className="group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
      <div  className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img  className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1671519821514-07056239cd99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" alt="Image Description" />
      </div>
	  <div  className="mt-4">
		<div className='flex justify-between '>
		<h3  className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          Onsite
        </h3>
		<div className='font-semibold text-gray-700 rounded-lg text-sm bg-gray-200 p-1'>Sports</div>
		</div>
        
        <p  className="mt-2 text-gray-800 dark:text-gray-200">
          Optimize your in-person experience with best in className capabilities like badge printing
        </p>
        <div className="mt-3 flex items-center justify-between   font-medium">
		<div className="flex gap-2 items-center">
        <img className="h-10 w-10 shrink-0 rounded-full object-cover" src="https://lh3.googleusercontent.com/a/AGNmyxbSlMgTRzE3_SMIxpDAhpNad-_CN5_tmph1NQ1KhA=s96-c" alt="" />
        <div className="flex flex-col -gap-[0.5] justify-center">
            <div className="font-semibold text-sm text-black hover:text-blue-600">Prajwal Hallale</div>
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
		
		</div>
	</div>
	

	

   
   
    
    </>)
}
export default Featured;