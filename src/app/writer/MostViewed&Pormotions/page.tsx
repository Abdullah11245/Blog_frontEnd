import { Sidebar } from "../Sidebar"
import { Pagination } from "./Pagination"
 export default ()=>{
    return (<>
     <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

   
     
     <Sidebar/>
    
      <div className="h-full ml-14 mt-16  mb-10 md:ml-64">
     <div className="mb-2 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
            <div>
                <h4 className="text-2xl font-bold leading-tight text-gray-600 ">Most Viewed & Promoted</h4>
                <ul aria-label="current Status" className="flex flex-col md:flex-row items-start md:items-center text-gray-600 dark:text-gray-400 text-sm mt-3">
                    <li className="flex items-center mr-4">
                        <span>Admin Dashboard</span>
                    </li>
                    <li className="flex items-center mr-4 mt-4 md:mt-0">
                        <div className="mr-2">
                          <svg className="w-3 h-3" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.815 571.815"  transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M76.208,296.042l415.78,272.132c8.286,6.646,12.062,3.941,8.431-6.04L329.355,302.084 c-3.629-9.981-3.596-26.156,0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11L76.284,272.07 C67.958,278.661,67.921,289.395,76.208,296.042z"></path> </g> </g> </g></svg>
                        </div>
                        <span>Most Viewed & Promoted</span>
                    </li>
                </ul>
            </div>
            <div className="mt-6 md:mt-0 flex items-center ">
                <button className=" bg-gray-200 border dark:bg-gray-700 focus:outline-none  rounded-full transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 p-2 text-sm">
                    <svg className="w-6 h-6" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" enableBackground="new 0 0 100 100"><g id="SVGRepo_bgCarrier" strokeWidth="0">
                    </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <g> <path d="M74.656,56.818c3.895,3.729,5.788,8.795,5.788,15.491c0,1.104,0.896,2,2,2s2-0.885,
                    2-1.989 c0-7.736-2.362-13.91-7.022-18.369C66.646,43.639,46.325,44.551,30,45.269c-2.28,0.101-4.461,0.211-6.499,0.28L38.428,
                    30.62 c0.781-0.781,0.781-2.047,0-2.828s-2.048-0.781-2.828,0L17.479,45.915c-0.375,0.375-0.586,0.884-0.586,1.414 s0.211,1.039,
                    0.586,1.414l18.123,18.12c0.391,0.391,0.902,0.586,1.414,0.586s1.024-0.195,1.415-0.586 c0.781-0.781,0.781-2.048,0-2.828L24.142,
                    49.75c1.915-0.11,3.932-0.261,6.033-0.354C44.919,48.748,65.114,47.688,74.656,56.818z"></path> </g> </g></svg>
                </button>
            <a href="javascript:void(0)" className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"> See other projects </a>
            </div>
        </div>
       
      <div className=" w-full">
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
</div>


      
      
      
       
        </div>
      </div>
    
    
    </>)
 }
 
