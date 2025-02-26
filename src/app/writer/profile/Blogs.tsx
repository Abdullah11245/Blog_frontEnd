import { Pagination } from "./Pagination"
import { Rejection } from "./Rejection"
import { Footer } from "./Footer"
export const Blog = () =>{
    return (<>
<div className="w-full mx-auto">
   
<main className="mt-8">
        <div className=" flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
          <p className="text-3xl font-semibold">Most Viewed</p>
          <p className="text-xl text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia unde, ex ratione aut perferendis beatae! </p>
            </div>
           
          <div className="flex  space-x-0 md:space-x-6 mb-16">
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full relative rounded block">
          <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-md object-cover w-full h-64" />
          <span className="text-green-700 text-sm hidden md:block mt-4"> Technology </span>
          <h1 className="text-gray-800 text-2xl font-bold mt-2 mb-2 leading-tight">
            Ignorant branched humanity led now marianne too.
          </h1>
          <p className="text-gray-600 mb-4 text-sm">
            Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
            decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
            itself.
            Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
          </p>
          <button className="text-center px-4 text-sm py-2 rounded-full bg-[#6A64F1] font-semibold text-gray-100">
            Read more
          </button>
        </div>

        <div className="w-full ">
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Gadgets </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-base mb-2">
                At every tiled on ye defer do. No attention suspected oh difficult.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Wonder matter now can estate esteem assure fat roused. Am performed on existence as discourse is. Pleasure friendly at marriage blessing or
              </p>
            </div>
          </div>

          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Bitcoin </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-base mb-2">
                Fond his say old meet cold find come whom. The sir park sake bred.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Integer commodo, sapien ut vulputate viverra, Integer commodo
                Integer commodo, sapien ut vulputate viverra, Integer commodo
              </p>
            </div>
          </div>
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Insights </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-base mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
              </p>
            </div>
          </div>
          <div className="rounded w-full flex flex-col md:flex-row mb-10">
            <img src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0" />
            <div className="bg-white rounded px-4">
              <span className="text-green-700 text-sm hidden md:block"> Cryptocurrency </span>
              <div className="md:mt-0 text-gray-800 font-semibold text-base mb-2">
                Advice me cousin an spring of needed. Tell use paid law ever yet new.
              </div>
              <p className="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. 
              </p>
            </div>
          </div>

        </div>

      </div>
        </div>
      <div className="my-8">
    <div className="flex mb-6  px-4 lg:px-0 items-center justify-between">
      <div className="flex flex-col">
      <h2 className="font-bold text-3xl">Promotions</h2>
      <p className="text-lg mt-1 max-w-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci mollitia sint quo cupiditate, </p>
      </div>
        <button className="bg-[#6A64F1] text-white font-semibold text-sm px-4 py-2 rounded-full cursor-pointer">
          View all
        </button>
      </div>
     
  <div className="flex flex-col justify-between gap-y-4 ">
    
    <div className=" flex flex-col gap-y-3">
   
  
    <div className=" mx-auto rounded-xl overflow-hidden ">

   

        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2">
            <div className="lg:flex">
                <img className="object-cover w-full h-48 rounded-lg lg:w-48" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="flex flex-col justify-between py-4 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800  dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    <p className="text-base my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis 
                    </p>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-48 rounded-lg lg:w-48" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="flex flex-col justify-between py-4 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800  dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    <p className="text-base my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis 
                    </p>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-48 rounded-lg lg:w-48" src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="flex flex-col justify-between py-4 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800  dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    <p className="text-base my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis 
                    </p>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-48 rounded-lg lg:w-48" src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80" alt="" />

                <div className="flex flex-col justify-between py-4 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800  dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    <p className="text-base my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis 
                    </p>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-48 rounded-lg lg:w-48" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80" alt="" />

                <div className="flex flex-col justify-between py-4 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800  dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    <p className="text-base my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis 
                    </p>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div className="lg:flex">
                <img className="object-cover w-full h-48 rounded-lg lg:w-48" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <div className="flex flex-col justify-between py-4 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 s dark:text-white ">
                        How to use sticky note for problem solving
                    </a>
                    <p className="text-base ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis 
                    </p>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>
        </div>
   

    </div>
  
    
  
      
    </div>



    <Pagination/>
   </div>
      </div>

      <Rejection/> 

    </main> 
   
    <aside
    className="p-4 my-8 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
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
   
  </div>
  
    
    </>)
}