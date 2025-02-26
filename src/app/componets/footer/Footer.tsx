export const Footer = () =>{
    return (<>
<footer className=" py-4 " >
  <div className="mx-auto  pb-6 pt-4 max-w-screen-xl">
    
    <div
      className="mt-4 grid grid-cols-1 gap-8  pt-4 md:grid-cols-4 lg:grid-cols-6"
    >
      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">About Us</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
              Company History
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Meet the Team </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
              Employee Handbook
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Careers </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Our Services</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
              Web Development
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Web Design </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Marketing </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Google Ads </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Resources</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Online Guides </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
              Conference Notes
            </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Forum </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Downloads </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
              Upcoming Events
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left">
        <p className="text-lg font-medium text-gray-900">Helpful Links</p>

        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> FAQs </a>
          </li>

          <li>
            <a className="text-gray-700 transition hover:text-gray-700/75" href="/"> Support </a>
          </li>

          <li>
            <a
              className="group flex  gap-1.5 "
              href="/"
            >
              <span className="text-gray-700 transition group-hover:text-gray-700/75"> Live Chat </span>

              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                ></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
        <p className="text-lg font-medium text-gray-900">Stay in Touch</p>

        <div className="mx-auto mt-8 max-w-md sm:ms-0">
          <p className=" leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id, iure consectetur et
            error hic!
          </p>

          <form className="mt-4">
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
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

            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</footer>
    
    
    
    </>)
}