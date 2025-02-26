export const Follow = () =>{
    return (<>


<div className='flex flex-col justify-center '>
    <h1 className="mt-3 text-lg font-semibold py-2 ">
        Follow a Members
        
    </h1>
    
    <div className=' w-full  mx-auto  flex flex-col'>
        <div className="user-row flex flex-col items-center justify-between cursor-pointer  duration-300 sm:flex-row  pb-4">
            <div className="user flex items-center  flex-row text-left gap-x-2">
                <div className="">
                    <img className="avatar w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="#" className="title font-medium text-sm">Wade Warren</a>
                    <div className="skills flex flex-col text-xs">
                        <span className="subtitle text-slate-500">Marketing Liaison</span>
                        <span className="subtitle text-slate-500">Coordinator ?</span>
                    </div>
                </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium leading-6 tracking-tight text-white text-center border-0 bg-gray-700  duration-300" type="button">Follow</button>
            </div>
        </div>
      
       
        
        <div className="user-row flex flex-col items-center justify-between cursor-pointer  duration-300 sm:flex-row pb-4 ">
            <div className="user flex items-center  flex-row text-left gap-x-2">
                <div className="">
                    <img className="avatar w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
                </div>
                <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
                    <a href="#" className="title font-medium text-sm">Wade Warren</a>
                    <div className="skills flex flex-col text-xs">
                        <span className="subtitle text-slate-500">Marketing Liaison</span>
                        <span className="subtitle text-slate-500">Coordinator ?</span>
                    </div>
                </div>
            </div>
            <div className="user-option mx-auto sm:ml-auto sm:mr-0">
                <button className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium leading-6 tracking-tight text-white text-center border-0 bg-gray-700  duration-300" type="button">Follow</button>
            </div>
        </div>

        <a className=" block text-sm mt-3   rounded   text-gray-600 duration-300" href="#/">Show more members</a>
    </div>
</div>
    
    
    </>)
}