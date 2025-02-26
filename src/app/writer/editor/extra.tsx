'use client'
import React, { useState,useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { MouseEventHandler } from 'react';
import '../editor.css'
import Link from 'next/link';
import axios from 'axios';
import { Content } from 'next/font/google';
type FormValues = {
  title: string;
  category: string;
  subCategory: string;
  postimage: FileList;
  content:String
};

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>, // Optional loading component
});

  
export const EditorForm = () =>{
  const [selectCategory,setCategory] =useState('Category')
  const [selectSubCategory,setSubCategory] =useState('SubCategory')
  const [check,setCheck] =useState(false)
  const [checksub,setChecksub] =useState(false)
  const [Choose,setChoose] =useState(false)
  const [editorContent, setEditorContent] = useState('');
  const [key, setKey] = useState(0); // Add a key state
  useEffect(() => {
    setKey(1); 
  }, []);
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }], // custom button values
    [{ 'list': 'ordered'},{ 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }], // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }], // outdent/indent
    [{ 'direction': 'rtl' }], // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
    [{ 'font': ['sans-serif', 'serif', 'monospace'] }],
    [{ 'align': [] }],
  
    ['clean'] 
  ]; 
  const modules = {
    toolbar: toolbarOptions,
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true
    }
  };

  const saveBlogpost = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('category', data.category);
      formData.append('subCategory', data.subCategory);
      formData.append('content', editorContent);
    //   if (data.postimage.length > 0) {
    //     formData.append('postimage', data.postimage[0]);  
    //   }
      const response = await axios.post(`http://localhost:5000/editor/post/${'67bbc6080c029a8ab5cab324'}`, formData, {
        withCredentials: true,
    });
    if (response.data.error === 'User Already Exists') {
      console.log('User already exists');
    } else {
      console.log(response.data);
    }
  
     
    } catch (error) {
      console.error(error);
    }
  };
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const Category=['Sports','Bussiness']
    const SubCategory=['Badminton','DigitalBussiness']
    const onSubmit: SubmitHandler<FormValues> = data => {
      console.log(data)
      saveBlogpost(data);
    };
    return (<>
   <div className="max-w-3xl mx-auto " >
    
    <div className="max-w-xl my-6 ">
     <p className="text-3xl font-semibold text-[#6A64F1]">Lorem ipsum</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-6" >
                <label className="mb-3 block text-sm font-medium text-[#07074D]">
                    Blog Title:
                </label>
                <input type="text"  id="email" placeholder="Lorem Ipsum dolor ..."
                    className="w-full rounded-full border border-[#e0e0e0] bg-white
                     py-4 px-6 text-sm font-medium text-[#6B7280] outline-none 
                     focus:border-[#6A64F1] focus:shadow-md" 
                     {...register('title', { required: 'Name is required' })}

                   />
     </div>
       
    <div className="mx-auto bg-white">
      <div className="my-6">
      <div className="flex  gap-x-3">
      <button className={` py-4 px-5 font-semibold   ${Choose !==true ?'bg-gray-700 text-white':'bg-gray-200 text-black' }  text-sm   rounded-full transition duration-200`} onClick={()=>{setChoose(false)}}>Select  category & sub-Category</button>
		<button className={` py-4 px-5 font-semibold ${Choose ==true ?'bg-gray-700 text-white':'bg-gray-200 text-black' }  text-sm  rounded-full transition duration-200`} onClick={()=>{setChoose(true)}} >Type your own category & sub-Category</button>
      </div>
      </div>
      <div className={`mb-5 grid grid-cols-2 gap-x-2 ${Choose ==true ?'block':'hidden'}`}>
      <div className="col-span-1" >
                <label className="mb-3 block text-sm font-medium text-[#07074D]">
                   Blog Category :
                </label>
                <input type="text"  id="" placeholder="example@domain.com"
                    className="w-full rounded-full border border-[#e0e0e0] bg-white   
                    py-4 px-6 text-sm font-medium text-[#6B7280] 
                    outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register('category', { required: 'Name is required' })}
                    />
     </div>
     <div className="col-span-1"  >
                <label className="mb-3 block text-sm font-medium text-[#07074D]">
                   Blog Sub-category
                </label>
                <input type="text" id="" placeholder="example@domain.com"
                    className="w-full rounded-full border border-[#e0e0e0] bg-white
                   py-4 px-6 text-sm font-medium text-[#6B7280] outline-none 
                   focus:border-[#6A64F1] focus:shadow-md" 
                   {...register('subCategory', { required: 'Email is required' })}
                   />
    </div>


      </div>

      <div className={`mb-5 grid grid-cols-2 gap-x-2 ${Choose !==true ?'block':'hidden'}`}>
      <div className="col-span-1">
    <label  className="text-sm block py-2">Select a Category:</label>

    <div className="relative">
      <div className="h-12 bg-white flex border border-gray-200 rounded items-center">
        <input value={selectCategory}   id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" checked />

        <button onClick={()=>{setCheck(false),setCategory('Category')}} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button onClick={()=>{setCheck(!check)}} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
        {check!==true ?<svg className='w-5 h-5 mx-2' fill="#000000" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"></g>
        <g id="SVGRepo_iconCarrier"> 
        <g data-name="Layer 2"> <g data-name="arrow-downward"> <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect> 
        <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path> </g> </g> </g></svg>
        :
        <svg className='w-5 h-4 mx-2 rotate-180' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
         <g data-name="Layer 2"> <g data-name="arrow-downward"> <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect> 
        <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1
         2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path> </g> </g> </g></svg>

        }
        </button>
      </div>

      <input type="checkbox" name="show_more" id="show_more" className="hidden peer" checked />
      <div className={`absolute rounded shadow bg-white overflow-hidden ${check?'peer-checked:block':'peer-checked:hidden'} flex flex-col w-full mt-1 border border-gray-200`}>
        {Category.map((category:String)=>{
          return (<>
          <div className="cursor-pointer group ">
          <button className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 w-full text-start group-hover:bg-gray-100" onClick={()=>{setCategory(category as any),setCheck(false)}}>{category}</button>
        </div>
          </>)
        })}
       
      </div>
    </div>
      </div>
      <div className="col-span-1">
    <label  className="text-sm block py-2">Select a Sub-category:</label>

    <div className="relative">
      <div className="h-12 bg-white flex border border-gray-200 rounded items-center">
        <input value={selectSubCategory} name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 w-full" checked />

        <button onClick={()=>{setChecksub(false),setSubCategory('subCategory')}} className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
          <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button onClick={()=>{setChecksub(!checksub)}} className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600">
        {checksub!==true ?<svg className='w-5 h-5 mx-2' fill="#000000" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"></g>
        <g id="SVGRepo_iconCarrier"> 
        <g data-name="Layer 2"> <g data-name="arrow-downward"> <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect> 
        <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path> </g> </g> </g></svg>
        :
        <svg className='w-5 h-4 mx-2 rotate-180' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
         <g data-name="Layer 2"> <g data-name="arrow-downward"> <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect> 
        <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1
         2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path> </g> </g> </g></svg>

        }
        </button>
      </div>

      <input type="checkbox" name="show_more" id="show_more" className="hidden peer" checked />
      <div className={`absolute rounded shadow bg-white overflow-hidden ${checksub?'peer-checked:block':'peer-checked:hidden'} flex flex-col w-full mt-1 border border-gray-200`}>
        {SubCategory.map((subcategory:String)=>{
          return (<>
          <div className="cursor-pointer group ">
          <button className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 w-full text-start group-hover:bg-gray-100" onClick={()=>{setSubCategory(subcategory as any),setChecksub(false)}}>{subcategory}</button>
        </div>
          </>)
        })}
       
      </div>
    </div>
      </div>


      </div>
           

            <div className="mb-6 pt-4">
                <div className="flex justify-between mb-6">
                <div>
<label  className="mb-2 block text-lg px-4 font-medium text-[#07074D]">
      Select your profile picture
        </label>
<label 
      className="bg-white rounded w-full  py-4 px-4 flex flex-col items-start justify-start cursor-pointer  mx-auto  m-4">
    
      <p className="text-gray-400 font-semibold text-sm">Drag & Drop or <span className="text-[#6A64F1]">Choose file</span> to
        upload</p>
      <input type="file" {...register('postimage', {required:false})}  className="hidden" />
      <p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
    
 </label>
               </div>
               <div className="w-4/6 h-56 border flex items-center justify-center px-16 gap-x-1 ">

                <div className="w-12 h-12 opacity-70">
                <svg className="w-full"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path style={{fill:"#FFFFFF;"}} d="M372.813,508H94.311c-15.735-0.04-28.477-12.783-28.517-28.517V32.517
                 C65.834,16.782,78.577,4.04,94.311,4h323.378c15.735,0.04,28.477,12.783,28.517,28.517v402.306"></path> <path style={{fill:"#8E8E8E"}} d="M372.813,512H94.319c-17.95-0.024-32.501-14.575-32.525-32.525V32.517 
                 C61.818,14.567,76.369,0.024,94.319,0h323.37c17.95,0.024,32.493,14.567,32.517,32.517v402.298h-7.999V32.517 c-0.016-13.535-10.983-24.502-24.518-24.518H94.319c-13.535,0.016-24.51,10.983-24.526,24.518v446.958
                  c0.016,13.535,10.983,24.502,24.518,24.518h278.502L372.813,512L372.813,512z"></path> <path style={{fill:"#333333;"}} d="M372.813,450.246v61.706l77.129-77.129H388.26C379.74,434.839,372.837,441.727,372.813,450.246z"></path> 
                <polygon points="109.806,324.098 195.446,224.731 281.086,324.098 "></polygon> <polygon style={{fill:"#E21B1B;"}} points="174.056,324.098 289.997,189.582 405.938,324.098 "></polygon> <circle style={{fill:"#666666"}} cx="228.275"
                 cy="161.105" r="28.485"></circle> </g></svg>   
               </div>
               <div className="text-sm max-w-xs opacity-70">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div> 
                
                </div>
                </div>

                <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div className="flex items-center justify-between">
                        <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                            banner-design.png
                        </span>
                        <button className="text-[#07074D]">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                    fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                    fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>

                
            </div>

            <div>
               
            </div>
       
    </div>
   
    <div className='flex flex-col gap-y-6 max-w-3xl mx-auto my-16'>
      <div className="container max-w-3xl mx-auto h-64">
      <ReactQuill className='h-52 rounded-lg' key={key} onChange={(content)=>{setEditorContent(content)}}   theme="snow" value={editorContent}  modules={modules} />
      
       </div>
      </div>

      <button type='submit' onClick={saveBlogpost} className='w-36 rounded-full py-3 bg-gray-700 text-white' >Submit</button>

    </form>
   
</div> 
    
    
    
    
    </>)
}
export default EditorForm