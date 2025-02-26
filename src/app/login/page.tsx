'use client'
import Link from "next/link";
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

type FormValues = {
  email: string;
  password: string;
  
};
export default () =>{
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const saveUser = async (registration_data: FormValues) => {
    console.log(registration_data)
    try {
      const formData = new FormData();
      formData.append('email', registration_data.email);
      formData.append('password', registration_data.password);
     

      const response = await axios.post('http://localhost:5000/user/login', {email:registration_data.email,password:registration_data.password}, {
        withCredentials: true,
      });
     
      
        console.log(response.data);
      

    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = data => {
    saveUser(data);
    console.log(data)
  };

    return (<>

<div className='' style={{backgroundImage:'url(signupbg2.jpg)',backgroundPosition: 'center',backgroundRepeat:'no-repeat',backgroundSize: 'cover'}}>
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
  <div className="mx-auto max-w-lg bg-white pt-4 rounded-lg opacity-95">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
      inventore quaerat mollitia?
    </p>

    <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={handleSubmit(onSubmit)}>
      <p className="text-center text-lg font-medium">Sign in to your account</p>

     
      <div className='mb-3'>
          <label  className="mb-2 block text-sm px-2 font-medium text-[#07074D]">
       Enter your Email
        </label>
        <input type="text" placeholder="abc@gmail.com" className="input input-bordered input-md w-full py-3 px-3 border rounded-full"
        {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          </div>
       
        <div className='mb-3'>
        <label  className="mb-2 block text-sm font-medium text-[#07074D]">
        Enter your Password
        </label>
        <input type="password" placeholder="*********" className="input input-bordered input-md w-full py-3 px-3 border rounded-full"
         {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        </div>
        <button
        type="submit"
        className="block w-full rounded-full bg-[#6A64F1] px-5 py-4 text-base font-medium text-white mt-4"
      >
        Sign in
      </button>
        <div className="mt-6 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or Login with Google</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
     
    <button className="flex items-center justify-center py-3 w-full bg-white dark:bg-gray-900 border border-gray-300 rounded-full shadow-md px-6  text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"  width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
        <span className="text-lg font-semibold">Login with Google</span>
    </button>


     

      <p className="text-center text-sm text-gray-500">
        No account?
        <Link className="font-semibold" href="/signup"> Sign up</Link>
      </p>
    </form>


  </div>
</div>
</div>

    </>)
}
