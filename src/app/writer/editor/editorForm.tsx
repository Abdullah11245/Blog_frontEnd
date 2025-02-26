import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the Quill styles

const FormComponent = () => {
  const [Choose, setChoose] = useState(false);
  const [Category, setCategory] = useState("Category");
  const [SubCategory, setSubCategory] = useState("Sub-category");
  const [selectCategory, setSelectCategory] = useState("");
  const [selectSubCategory, setSelectSubCategory] = useState("");
  const [check, setCheck] = useState(false);
  const [checksub, setChecksub] = useState(false);

  // For blog title and content
  const [blogTitle, setBlogTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");
  const [file, setFile] = useState(null);
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
  // Sample categories and subcategories
  const categories = ["Tech", "Lifestyle", "Business"];
  const subCategories = ["Web", "Mobile", "Marketing"];

  // Handle file upload
  const handleFileChange = (e:any) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  // Handle form submission with axios
  const onSubmit = async (e:any) => {
    e.preventDefault();

    const formData = new FormData();
    
    // Append form fields to FormData
    formData.append("title", blogTitle);
    formData.append("category", Choose ? selectCategory : Category);
    formData.append("subCategory", Choose ? selectSubCategory : SubCategory);
    formData.append("content", editorContent); // Use content from editor
    
    // Append file if selected
    if (file) {
      formData.append("postimage", file);
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/editor/post/${'67bbc6080c029a8ab5cab324'}`, // Replace with your API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // if your API requires credentials (cookies, etc.)
        }
      );
      console.log("Blog submitted successfully:", response.data);
    } catch (error) {
      console.log("Error submitting the form:", error);
    }
  };

  return (
    <div className="mx-auto bg-white p-8">
      <form onSubmit={onSubmit}>
        {/* Blog Title */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#07074D] mb-2">
            Blog Title:
          </label>
          <input
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            placeholder="Enter your blog title"
            className="w-full p-4 border border-[#e0e0e0] rounded-full text-sm text-gray-700 focus:border-[#6A64F1] focus:ring-2 focus:ring-[#6A64F1]"
          />
        </div>

        {/* Toggle between predefined or custom input */}
        <div className="my-6">
          <div className="flex gap-x-3">
            <button
              className={`py-4 px-5 font-semibold ${
                Choose !== true ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              } text-sm rounded-full transition duration-200`}
              onClick={() => setChoose(false)}
              type="button"
            >
              Select category & sub-Category
            </button>
            <button
              className={`py-4 px-5 font-semibold ${
                Choose === true ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              } text-sm rounded-full transition duration-200`}
              onClick={() => setChoose(true)}
              type="button"
            >
              Type your own category & sub-Category
            </button>
          </div>
        </div>

        {/* Custom input for category & subcategory */}
        <div
          className={`mb-5 grid grid-cols-2 gap-x-2 ${Choose === true ? "block" : "hidden"}`}
        >
          <div className="col-span-1">
            <label className="mb-3 block text-sm font-medium text-[#07074D]">
              Blog Category:
            </label>
            <input
              type="text"
              placeholder="Enter category"
              className="w-full rounded-full border border-[#e0e0e0] bg-white py-4 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectCategory}
              onChange={(e) => setSelectCategory(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <label className="mb-3 block text-sm font-medium text-[#07074D]">
              Blog Sub-category:
            </label>
            <input
              type="text"
              placeholder="Enter sub-category"
              className="w-full rounded-full border border-[#e0e0e0] bg-white py-4 px-6 text-sm font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={selectSubCategory}
              onChange={(e) => setSelectSubCategory(e.target.value)}
            />
          </div>
        </div>

        {/* Predefined category & subcategory select */}
        <div
  className={`mb-5 grid grid-cols-2 gap-x-2 ${Choose !== true ? "block" : "hidden"}`}
>
  {/* Category Select */}
  <div className="col-span-1">
    <label className="text-sm block py-2">Select a Category:</label>
    <div className="relative">
      <div className="h-12 bg-white flex border border-gray-200 rounded items-center">
        <input
          value={selectCategory}
          onChange={(e) => setSelectCategory(e.target.value)}
          className="px-4 appearance-none outline-none text-gray-800 w-full"
          placeholder="Search categories..."
        />
        <button
          onClick={() => {
            setCheck(false);
            setCategory("Category");
          }}
          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
        >
          <svg
            className="w-4 h-4 mx-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button
          onClick={() => {
            setCheck(!check);
          }}
          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
        >
          {check !== true ? (
            <svg
              className="w-5 h-5 mx-2"
              fill="#000000"
              viewBox="-2.4 -2.4 28.8 28.8"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024"
            >
              <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-4 mx-2 rotate-180"
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
            >
              <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`absolute rounded shadow bg-white overflow-hidden ${check ? "block" : "hidden"} flex flex-col w-full mt-1 border border-gray-200`}
      >
        {categories
          .filter((category) =>
            category.toLowerCase().includes(selectCategory.toLowerCase())
          )
          .map((category) => (
            <div className="cursor-pointer group" key={category}>
              <button
                className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 w-full text-start group-hover:bg-gray-100"
                onClick={() => {
                  setCategory(category);
                  setSelectCategory(category); // Update the input with the selected category
                  setCheck(false);
                }}
              >
                {category}
              </button>
            </div>
          ))}
      </div>
    </div>
  </div>

  {/* Sub-category Select */}
  <div className="col-span-1">
    <label className="text-sm block py-2">Select a Sub-category:</label>
    <div className="relative">
      <div className="h-12 bg-white flex border border-gray-200 rounded items-center">
        <input
          value={selectSubCategory}
          onChange={(e) => setSelectSubCategory(e.target.value)}
          className="px-4 appearance-none outline-none text-gray-800 w-full"
          placeholder="Search sub-categories..."
        />
        <button
          onClick={() => {
            setChecksub(false);
            setSubCategory("Sub-category");
          }}
          className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
        >
          <svg
            className="w-4 h-4 mx-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button
          onClick={() => {
            setChecksub(!checksub);
          }}
          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
        >
          {checksub !== true ? (
            <svg
              className="w-5 h-5 mx-2"
              fill="#000000"
              viewBox="-2.4 -2.4 28.8 28.8"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024"
            >
              <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-4 mx-2 rotate-180"
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
            >
              <path d="M12 17a1.72 1.72 0 0 1-1.33-.64l-4.21-5.1a2.1 2.1 0 0 1-.26-2.21A1.76 1.76 0 0 1 7.79 8h8.42a1.76 1.76 0 0 1 1.59 1.05 2.1 2.1 0 0 1-.26 2.21l-4.21 5.1A1.72 1.72 0 0 1 12 17z"></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`absolute rounded shadow bg-white overflow-hidden ${checksub ? "block" : "hidden"} flex flex-col w-full mt-1 border border-gray-200`}
      >
        {subCategories
          .filter((subcategory) =>
            subcategory.toLowerCase().includes(selectSubCategory.toLowerCase())
          )
          .map((subcategory) => (
            <div className="cursor-pointer group" key={subcategory}>
              <button
                className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 w-full text-start group-hover:bg-gray-100"
                onClick={() => {
                  setSubCategory(subcategory);
                  setSelectSubCategory(subcategory); // Update the input with the selected subcategory
                  setChecksub(false);
                }}
              >
                {subcategory}
              </button>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>


        {/* Blog Content */}
       
        {/* Profile Picture Upload */}
        {/* <div className="mb-6">
          <label className="block text-sm font-medium text-[#07074D] mb-2">
            Profile Picture:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
        </div> */}
        <div className="mb-6 pt-4">
  <div className="flex justify-between items-center mb-6">
    <div>
      <label className="mb-2 block text-lg px-4 font-medium text-[#07074D]">
        Select your profile picture
      </label>
      <label className="bg-white rounded w-full py-4 px-4 flex flex-col items-start justify-start cursor-pointer mx-auto m-4">
        <p className="text-gray-400 font-semibold text-sm">
          Drag & Drop or <span className="text-[#6A64F1]">Choose file</span> to
          upload
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-xs text-gray-400 mt-2">
          PNG, JPG SVG, WEBP, and GIF are Allowed.
        </p>
      </label>
    </div>
    <div className="w-4/6 h-56 border flex items-center justify-center px-16 gap-x-1">
      {file ? (
        <img
          src={URL.createObjectURL(file)}
          alt="Profile Preview"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className=" opacity-70 flex flex-col-reverse space-y-1 items-center">
          <p className="text-sm">No Image Selected</p>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM11.1822 15.3618L6.89249 11.0721C6.03628 10.2159 4.66286 10.1702 3.75159 10.9675L2.751 11.8623C2.82464 6.81714 6.93735 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 13.9546 20.6438 15.7676 19.609 17.2612L17.7765 15.599C16.7369 14.6634 15.1888 14.5702 14.0446 15.3744L13.7464 15.5839C12.9512 16.1428 11.8694 16.0491 11.1822 15.3618Z" fill="#1C274C"></path> </g></svg>
        </div>
      )}
    </div>
  </div>
</div>
      <div className="mb-6">
          <label className="block text-sm font-medium text-[#07074D] mb-2">
            Content:
          </label>
          <ReactQuill
            value={editorContent}
            onChange={setEditorContent}
            className="w-full "
            theme="snow" 
           modules={modules} 
          />
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-48 bg-[#6A64F1] text-white font-semibold py-2 rounded-full mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
