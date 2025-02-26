import { Sidebar } from "../Sidebar"
import { Blog } from "./Blogs"
export default () =>{
    return (<>
    
    <div className="grid grid-cols-4 max-w-screen-xl">    
        <div className="container flex flex-col mx-auto  col-span-1">
            <aside className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start" id="sidenav-main">
              <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
           <Sidebar/>
           </div>



</aside>

        

        
        </div>
        <div className="flex flex-wrap  my-5 col-span-3">
            <div className="w-full  mx-auto ">
                <Blog/>       
            </div>
          
        </div>
    </div>

    
    </>)
}
