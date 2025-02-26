'use client'
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userImage: FileList;
};

export default function Signup() {
  const [preference, setPreference] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State to hold image preview
  const dropdown_data = ['Javascript', 'Python'];

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<FormValues>();
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const saveUser = async (registration_data: FormValues) => {
    try {
      const formData = new FormData();
      formData.append('name', registration_data.name);
      formData.append('email', registration_data.email);
      formData.append('password', registration_data.password);
      formData.append('preference', preference);
      if (registration_data.userImage.length > 0) {
        formData.append('userImage', registration_data.userImage[0]);
      }

      const response = await axios.post('http://localhost:5000/user/signup', formData, {
        withCredentials: true,
      });

      if (response.data.error === 'User Already Exists') {
        console.log('User already exists');
      } else {
        console.log(response.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    saveUser(data);
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file)); // Set image preview URL
    }
  };

  useEffect(() => {
    // Reset image preview when component is unmounted or when user doesn't select an image
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview); // Clean up object URL
      }
    };
  }, [imagePreview]);

  return (
    <>
      <div style={{ backgroundImage: 'url(8116.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="flex items-center flex-col justify-center p-8 gap-y-4 max-w-screen-md mx-auto border shadow-xl rounded-lg my-12 bg-white opacity-95">
          <div>
            <h1 className="text-center text-2xl font-bold text-[#6A64F1] sm:text-3xl">Get started today</h1>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-3'>
                <label className="mb-2 block text-sm px-2 font-medium text-[#07074D]">Enter your Name</label>
                <input type="text" placeholder="John"
                  className="input input-bordered input-md w-full py-3 px-3 border rounded-full"
                  {...register('name', { required: 'Name is required' })} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
              </div>
              <div className='mb-3'>
                <label className="mb-2 block text-sm px-2 font-medium text-[#07074D]">Enter your Email</label>
                <input type="email" placeholder="abc@gmail.com"
                  className="input input-bordered input-md w-full py-3 px-3 border rounded-full"
                  {...register('email', { required: 'Email is required' })} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className='grid grid-cols-2 gap-x-3'>
                <div className='mb-3 col-span-1'>
                  <label className="mb-2 block text-sm font-medium text-[#07074D]">Enter your Password</label>
                  <input
                    type="password"
                    placeholder="*******"
                    className={`input input-bordered input-md w-full py-3 px-3 border rounded-full ${errors.password ? 'border-red-500' : ''}`}
                    {...register('password', { required: 'Password is required' })} />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div className='mb-3 col-span-1'>
                  <label className="mb-2 block text-sm font-medium text-[#07074D]">Confirm your Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className={`input input-bordered input-md w-full py-3 px-3 border rounded-full ${errors.confirmPassword ? 'border-red-500' : ''}`}
                    {...register('confirmPassword', {
                      validate: value => value === password || 'Passwords do not match'
                    })}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                </div>
              </div>

              <div className='grid grid-cols-2'>
                <div className="mb-3 col-span-1">
                  <label className="block text-base font-medium text-[#6A64F1]">Choose your preference</label>
                  <div className="flex items-center gap-x-2 justify-center h-20 rounded-lg">
                    {dropdown_data.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setPreference(item)}
                        className={`${
                          preference === item ? 'bg-[#6A64F1] text-white' : 'text-[#6A64F1] bg-white'
                        } w-full text-base text-center font-semibold rounded-full px-2 py-3 border border-[#6A64F1]`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex justify-between items-center my-8'>
                <div>
                  <label className="mb-2 block text-lg px-4 font-medium text-[#07074D]">Select your profile picture</label>
                  <label className="bg-white rounded w-full py-4 px-4 flex flex-col items-start justify-start cursor-pointer mx-auto m-4">
                    <p className="text-gray-400 font-semibold text-sm">Drag & Drop or <span className="text-[#6A64F1]">Choose file</span> to upload</p>
                    <input type="file" {...register('userImage', { required: true })} onChange={handleImageChange} className="hidden" />
                    <p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                  </label>
                </div>
                <div className='border rounded-full w-40 h-40 border-[#6A64F1] flex justify-center items-center'>
                  {imagePreview && <img src={imagePreview} alt="Profile Preview" className="rounded-full w-full h-full object-cover" />}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`hover:shadow-form w-full rounded-full bg-[#6A64F1] py-4 px-8 text-center text-base font-semibold text-white outline-none ${password !== confirmPassword ? 'cursor-not-allowed opacity-50' : ''}`}
                  disabled={password !== confirmPassword}
                >
                  Click to Signup
                </button>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or Signup with Google</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>

              <div className="mt-2">
                <button className="flex items-center justify-center py-3 w-full bg-white border border-gray-300 rounded-full shadow-md px-6 text-sm font-medium text-gray-800 hover:bg-gray-200">
                  <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                  <span className="text-lg font-semibold">Continue with Google</span>
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-3">
                Already have an account?
                <Link href="/login" className="font-semibold"> Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
