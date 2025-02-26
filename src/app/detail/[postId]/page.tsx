'use client';
import { usePathname } from "next/navigation";
import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import axios from "axios";
import sanitizeHtml from 'sanitize-html';
import './detail.css';
import Featured from "@/app/componets/featured/Featured";

const DetailPage: React.FC = () => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const [postDisplay, setPostDisplay] = useState<string>(''); // Adjusted type
  const targetRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });


  

  const FetchingPost = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/editor/postDisplay/${lastPart}`);
      console.log(response.data);
      setPostDisplay(sanitizeHtml(response.data.htmlContent));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchingPost();
    if (targetRef?.current) {
      setDimensions({
        width: targetRef.current?.offsetWidth,
        height: targetRef.current?.offsetHeight
      });
    }
  }, [postDisplay, lastPart]);


  console.log(dimensions,'These are the divs dimensions')
  console.log(targetRef.current?.offsetHeight)
  



return (<>
<div className="max-w-screen-xl mx-auto">
  <div className="grid grid-cols-4 gap-x-20 mt-8">
<div className="col-span-3">
<header className="flex items-center justify-between py-2">
      <a href="#" className="px-2 lg:px-0 font-bold">
        Tech Blog
      </a>
      <button className="block md:hidden px-2 text-3xl">
        <i className='bx bx-menu'></i>
      </button>
    

    </header>
    <main className="mt-4">

      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
          </h2>
          <a 
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            Cryptocurrency
          </a>
        </div>

        <img src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="w-full object-cover lg:rounded" style={{height: '28em'}}/>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">


      <div ref={targetRef} className="post_display" dangerouslySetInnerHTML={{ __html: postDisplay }} />
     
        

      </div>
    </main>
</div>
<div className="col-span-1 flex flex-col items-center justify-center gap-y-20">
<div className="w-full  mx-auto ">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p className="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                <p className="font-semibold text-gray-600 text-xs"> Editor </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              Mike writes about technology
              Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button className="px-2 py-1 text-gray-100 bg-gray-700 flex w-full items-center justify-center rounded-full">
              Follow 
              <i className='bx bx-user-plus ml-2' ></i>
            </button>
          </div>
</div>

<div className='flex flex-col justify-center '>
    <h1 className="mt-3 text-lg font-semibold py-2 ">
        Follow a Members
        
    </h1>
    
    <div className=' w-full  mx-auto  flex flex-col'>
        <div className="user-row flex flex-col items-center justify-between cursor-pointer  duration-300 sm:flex-row  pb-4">
            <div className="user flex items-center  flex-row text-left gap-x-2">
                <div className="">
                    <img className="avatar w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="#" className="title font-medium text-sm">Wade Warren</a>
                    <div className="skills flex flex-col text-xs">
                        <span className="subtitle text-slate-500">Marketing Liaison</span>
                        <span className="subtitle text-slate-500">Coordinator ?</span>
                    </div>
                </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium leading-6 tracking-tight text-white text-center border-0 bg-gray-700  duration-300" type="button">Follow</button>
            </div>
        </div>
      
       
        
        <div className="user-row flex flex-col items-center justify-between cursor-pointer  duration-300 sm:flex-row pb-4 ">
            <div className="user flex items-center  flex-row text-left gap-x-2">
                <div className="">
                    <img className="avatar w-12 h-12 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="#" className="title font-medium text-sm">Wade Warren</a>
                    <div className="skills flex flex-col text-xs">
                        <span className="subtitle text-slate-500">Marketing Liaison</span>
                        <span className="subtitle text-slate-500">Coordinator ?</span>
                    </div>
                </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium leading-6 tracking-tight text-white text-center border-0 bg-gray-700  duration-300" type="button">Follow</button>
            </div>
        </div>

        <a className=" block text-sm mt-3   rounded   text-gray-600 duration-300" href="#/">Show more members</a>
    </div>
</div>
</div>
  </div>
   


    <div className="mx-auto mt-16 mb-8">
                <div className="mb-2">
                    <p className="text-4xl font-bold ">
                        Related Blogs
                    </p>
                 
                </div>
                <div className="">
                <section className=" dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-8">
		
		<div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-4">
    <div className="relative mt-6 flex  flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="p-6">
  
    <h5 className="mb-1 block  text-lg font-semibold leading-snug tracking-normal ">
      Astro build starter template with Tailwind
    </h5>
    <p className="block text-sm ">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel accusantium natus.
    </p>
    <div className="w-full ">
      <div className="flex items-center gap-x-2 my-2">
        <div>
        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-lg rounded-full  w-10 h-10" />
        </div>
        <div className="flex flex-col justify-center ">
          <h5 className="text-sm font-semibold">Romina Hadid</h5>
          <p className=" text-xs font-semibold">
            Marketing Specialist
          </p>
          
        </div>
      </div>
    </div>
  </div>
    </div>
    <div className="relative mt-6 flex  flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="p-6">
  
    <h5 className="mb-1 block  text-lg font-semibold leading-snug tracking-normal ">
      Astro build starter template with Tailwind
    </h5>
    <p className="block text-sm ">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel accusantium natus.
    </p>
    <div className="w-full ">
      <div className="flex items-center gap-x-2 my-2">
        <div>
        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-lg rounded-full  w-10 h-10" />
        </div>
        <div className="flex flex-col justify-center ">
          <h5 className="text-sm font-semibold">Romina Hadid</h5>
          <p className=" text-xs font-semibold">
            Marketing Specialist
          </p>
          
        </div>
      </div>
    </div>
  </div>
    </div>
    <div className="relative mt-6 flex  flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="p-6">
  
    <h5 className="mb-1 block  text-lg font-semibold leading-snug tracking-normal ">
      Astro build starter template with Tailwind
    </h5>
    <p className="block text-sm ">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel accusantium natus.
    </p>
    <div className="w-full ">
      <div className="flex items-center gap-x-2 my-2">
        <div>
        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-lg rounded-full  w-10 h-10" />
        </div>
        <div className="flex flex-col justify-center ">
          <h5 className="text-sm font-semibold">Romina Hadid</h5>
          <p className=" text-xs font-semibold">
            Marketing Specialist
          </p>
          
        </div>
      </div>
    </div>
  </div>
    </div>
    <div className="relative mt-6 flex  flex-col rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="p-6">
  
    <h5 className="mb-1 block  text-lg font-semibold leading-snug tracking-normal ">
      Astro build starter template with Tailwind
    </h5>
    <p className="block text-sm ">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel accusantium natus.
    </p>
    <div className="w-full ">
      <div className="flex items-center gap-x-2 my-2">
        <div>
        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-lg rounded-full  w-10 h-10" />
        </div>
        <div className="flex flex-col justify-center ">
          <h5 className="text-sm font-semibold">Romina Hadid</h5>
          <p className=" text-xs font-semibold">
            Marketing Specialist
          </p>
          
        </div>
      </div>
    </div>
  </div>
    </div>
   


		</div>
	</div>
</section>
                    
                </div>
           
    </div>
    
</div>
    
    
    
    
    </>)
}

export default DetailPage;