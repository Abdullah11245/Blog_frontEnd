export const ContactBanner = () =>{
    return (<>
     <aside
    className="p-4 mb-20 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">Get more updates...</h3>
    <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
        Sign up for our newsletter and you'll be among the first to find out about new
        features.
    </p>
    <form>
        <div className="flex items-end mb-3">
            <div 
                className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields">
                <div className="relative w-full mr-3 formkit-field">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </div>
                    <input id="member_email" className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email_address"  placeholder="Your email address..." type="email" />
                </div>
                <span className="px-5 py-3 text-sm font-medium text-center text-white bg-[#6A64F1] rounded-full cursor-pointer focus:ring-4  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</span>
            </div>
        </div>
    </form>
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">By subscribing, you agree with ConvertKit's <a
            href="#" className="text-[#6366F1]  dark:text-blue-500">Terms of Service</a> and
        <a className="text-[#6366F1]   dark:text-blue-500" href="#"> Privacy
            Policy
        </a>.
    </div>
</aside>
    
    
    
    </>)
}