export default () =>{
    return (<>
       <div className='py-12 min-h-screen flex flex-col justify-center gap-y-16' style={{backgroundImage:'url(8116.jpg)',backgroundPosition: 'center',backgroundRepeat:'no-repeat',backgroundSize: 'cover'}}>
       <p className="text-white text-5xl text-center font-semibold mt-6">Contact us</p>
       <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white  rounded-md text-[#333] opacity-95">
                <div>
                    <h1 className="text-3xl font-bold">Let's Talk</h1>
                    <p className="text-sm text-gray-600 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <div className="mt-12">
                    <span className="text-lg font-bold tracking-wide text-gray-900">Email</span>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#dadee8] border h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <img src="mail.svg" className="w-6" alt="" />
                                </div>
                                <a target="blank" href="https://veilmail.io/e/FkKh7o" className="text-[#007bff] text-sm ml-3">
                                <span className="text-sm font-semibold tracking-wide text-gray-600">Mail</span>
                                    <strong> abc@gmail.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12">
                    <div>
    <span className="text-lg font-bold tracking-wide text-gray-900">Social</span>
    <div className="flex items-center mt-1 space-x-5">
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z">
                </path>
            </svg>

        </a>

        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                </path>
            </svg>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                </path>
            </svg>
        </a>
    </div>
    <p className="mt-2 text-sm text-gray-500">
        Follow Us on
    </p>
</div>
                    </div>
                </div>
              
                <form className="ml-auo space-y-4">
                    <div className='mb-3'>
          <label  className="mb-1 block text-xs px-2 font-semibold text-[#07074D]">
       Enter your Name
        </label>
        <input type="text" placeholder="John..." className="input input-bordered input-md w-full py-3 px-2 border rounded-lg" />
                   </div>
                   <div className='mb-3'>
          <label  className="mb-1 block text-xs px-2 font-semibold text-[#07074D]">
       Enter your Email
        </label>
        <input type="text" placeholder="abc@gmail.com" className="input input-bordered input-md w-full py-3 px-2 border rounded-lg" />
                  </div>
                  <div className='mb-3'>
          <label  className="mb-1 block text-xs px-2 font-semibold text-[#07074D]">
       Enter your Subject
        </label>
        <input type="text" placeholder="Subject of Email" className="input input-bordered input-md w-full py-3 px-2 border rounded-lg" />
                  </div>
                    <textarea placeholder='Message' 
                        className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                    <button type='button'
                        className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Send</button>
                </form>
            </div>
    </div>

    </>)
}
