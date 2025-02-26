import { ContactBanner } from "../banner/ContactBanner"
import Display from "../display/Display"
import Herosection from "../herosection/Herosection"
import { MainBlog } from "../mainBlog/MainBlog"
import { Follow } from "./Follow/Follow"
import { Followings } from "./Followings/Followings"
import { Topics } from "./Hottopics/Topics"
import { MainFeatured } from "./Leftside/Main"
import { RightSide } from "./RightSide"
import { Suggestion } from "./Suggestion/Suggestions"

export const Homepage = ()=>{
    //  const saveUser = async () => {
    //       try {
          
           
      
    //         const response = await axios.get('http://localhost:5000/promotion/allPromtions' ,{
    //           withCredentials: true,
    //         });
           
    //           console.log(response.data);
       
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
      

     return (<> 
     <Herosection/>
    <div className="grid grid-cols-4 max-w-screen-xl gap-x-20  mx-auto ">
     <div className="col-span-3">
     <MainFeatured/>
     <Display/>
     {/* <MainBlog/> */}
      {/* <ContactBanner/> */}
     </div>
    
     <div className="col-span-1  flex flex-col h-[1200px] " style={{position: 'sticky', top: '20px',}}>
      <RightSide/>
      {/* <Topics/> */}
      
      <Follow/>
      <Followings/>
     
      {/* <Suggestion/> */}
      
     </div>
    
    </div>
    
     
     
    
     </>)
}