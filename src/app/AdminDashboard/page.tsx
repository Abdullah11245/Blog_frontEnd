import { PieChart } from "./Charts/PieCharts"
import { MaintainProgress } from "./MaintainProgress"
import { Navbar } from "./NavBar"
import { Sidebar } from "./Sidebar"
import Stats from "./Stats"
import { Viewed } from "./Viewed"
import WritersTable from "./WritersTable"

export default () =>{
    return (<>
    



    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
  <Navbar/>

   
     
     <Sidebar/>
    
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
    
       
        <Stats/>
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
    
          <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded  border">
            <PieChart/>
          </div>
         
          <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded  border">
            <MaintainProgress/>
          </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2  p-4 gap-y-2 gap-x-4 text-black dark:text-white mt-12">
          <div className="md:col-span-2 xl:col-span-3">
            <h3 className="text-xl font-semibold">Task summaries of recent sprints</h3>
          </div>
          
            <Viewed/>
       
            <Viewed/>
       
        
        </div>
        

        <div className="mt-4 ">
          <div className="w-full overflow-hidden shadow-xs">
            <WritersTable/>
           
          </div>
        </div>
        <div className="mt-4 ">
          <div className="w-full overflow-hidden shadow-xs">
            <WritersTable/>
           
          </div>
        </div>
      
      
        <div className="mt-8 mx-4 grid grid-cols-3 gap-x-8">
        <div className="col-span-1 bg-white rounded-lg shadow-md overflow-hidden ">
    <div className="bg-gray-100 px-4 py-2">
        <h2 className="text-lg font-medium text-gray-800">Credit Card</h2>
    </div>
    <div className="px-4 py-5 sm:p-6">
        <div className="flex flex-col items-start justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">Cardholder Name</span>
            <span className="text-lg font-medium text-gray-800">John Doe</span>
        </div>
        <div className="flex flex-col items-start justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">Card Number</span>
            <span className="text-lg font-medium text-gray-800">**** **** **** 1234</span>
        </div>
        <div className="flex flex-row items-center justify-between mb-6">
            <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-600">Expiration Date</span>
                <span className="text-lg font-medium text-gray-800">12/24</span>
            </div>
            <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-600">CVV</span>
                <span className="text-lg font-medium text-gray-800">***</span>
            </div>
        </div>
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-600">Expense</span>
                <span className="text-lg font-medium text-red-500">$10,000</span>
            </div>
            <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-600">Available Balance</span>
                <span className="text-lg font-medium text-green-500">$7,500</span>
            </div>
        </div>
    </div>
</div>
          <div className="flex rounded-lg shadow-md col-span-2">
    <div className="w-full  ">
      <div className="container mx-auto h-full ">
        
        <header className="container px-4 lg:flex flex-col justify-center gap-y-8 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-3xl  font-bold max-w-sm">Find your <span className="text-green-700">greeny</span> stuff for your room</h1>
            <div className="w-20 h-1 bg-green-700 my-2"></div>
            <p className="text-base my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <button className="bg-green-700 text-white text-lg  px-2 py-1 rounded shadow">View Details</button>
          </div>
          <div className="flex justify-between max-w-xs mx-auto gap-x-2">
         <div className="bg-gray-500 w-2 h-2 rounded-full"></div>
         <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
         <div className="bg-gray-300 w-2 h-2 rounded-full"></div>
        </div>
        </header>
        
      </div>
    </div>
    <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-96 object-cover  sm:w-4/12" />
  </div>
          </div>
        </div>
      </div>

  
    
    
    </>)
}
