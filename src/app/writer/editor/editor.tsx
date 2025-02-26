'use client'
// Import React and useState for component state management
// Import React and useState for component state management
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import '../editor.css'
import React, { useState,useEffect } from 'react';
import { useAppContext } from '@/app/Context';
import axios from 'axios';
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading...</p>, // Optional loading component
});



export const RichTextEditor: React.FC = () => {
  const { state, updateData } = useAppContext();

  const [editorContent, setEditorContent] = useState('');
  const [key, setKey] = useState(0); // Add a key state

  useEffect(() => {
    setKey(1); 
  }, []);
  // Function to handle editor content changes
  const handleEditorChange = (content: string) => {
    setEditorContent(content)
        updateData({content});
      

  };
  console.log(state)
  const EditorsSubmission = async () => {
    try {
      const response = await axios.post('http://localhost:5000/editor/post', { editorContent }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, 
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  
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
  

  return (
    <div>
      <div className='flex flex-col gap-y-6 max-w-3xl mx-auto my-16'>
      <div className="container max-w-3xl mx-auto h-64">
      <ReactQuill className='h-48 rounded-lg' key={key}   theme="snow" value={editorContent} onChange={handleEditorChange} modules={modules} />
      
       </div>
      </div>
      

     
    </div>
    
  );
};
export default RichTextEditor

