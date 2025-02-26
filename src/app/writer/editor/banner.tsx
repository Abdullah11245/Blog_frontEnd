export default () =>{
    return (<>
    <div className="max-w-3xl mx-auto my-16">
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col mx-auto lg:flex-row">
		<div className="w-full lg:w-1/3" style={{backgroundImage: "url('https://merakiui.com/images/components/Email-campaign-bro.svg')", backgroundPosition: "center" ,backgroundRepeat:'no-repeat'}}></div>
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mb-6 text-blue-600">
				<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
			</svg>
			<h2 className="text-3xl font-semibold leading-none">Modern solutions to all kinds of problems</h2>
			<p className="mt-4 mb-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum rem amet!</p>
			<button className="self-start px-4 py-2 text-base font-medium rounded-3xl bg-blue-600 text-white">Get started</button>
		</div>
	</div>
</section>
               <header className="bg-white dark:bg-gray-900">
    {/* <nav className="border-t-2 border-blue-500">
        <div className="container flex items-center justify-between px-6 py-3 mx-auto">
            <a href="#">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Whats new this <span className="text-blue-500">Week</span></h1>

            </a>

            <a className="my-1 text-sm font-medium text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 lg:mx-4 lg:my-0" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </nav> */}

    {/* <div className="container  py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Subscribe To The <span className="text-blue-500">Newsletter</span></h1>

                    <p className="mt-3 text-gray-600 dark:text-gray-400">be the first to knows when our <span className="font-medium text-blue-500">Brand</span> is live</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <input id="email" type="text" className="px-4 py-3 text-gray-700 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600   focus:outline-none " placeholder="Email Address" />

                        <button className="w-full px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-full lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art" />
            </div>
        </div>
    </div> */}
</header>
    </div>
    
    
    </>)
}