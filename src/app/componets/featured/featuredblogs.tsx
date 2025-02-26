export const FeaturedBlogs = () =>{

    return (<>
    <div className="col-span-5  "> 

<div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
<div className="py-4">
            <h1 className="text-3xl font-bold mb-2">Blog post title</h1>
            <p className="text-gray-500 text-sm">Published on <span >April 5, 2022</span></p>
        </div>

    <div className="relative">
        <a href="#">
            <img className="w-full"
                src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
                alt="Sunset in the mountains" />
        </a>
        <a href="#!"
            className="hidden  z-10 text-sm font-semibold absolute top-2 right-2 rounded-md bg-[crimson] px-2 m-2 py-1 text-white hover:bg-white hover:text-[crimson] transition duration-500 ease-in-out sm:flex items-center"><span
                className="text-lg">|</span>&nbsp;&nbsp;<span>Cooking</span></a>

    </div>
    <p className='text-xl font-semibold mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dignissimos voluptates modi.</p>
    <p className="text-gray-700 text-base leading-8">
        Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea
        level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred
        Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.
    </p>

</div>

    </div>
    
    
    </>)
}
