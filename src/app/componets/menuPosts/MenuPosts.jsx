import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
//     <div className={styles.items}>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//  <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" fill="true" className={styles.image} />          </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.travel}`}>Travel</span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam incidunt mollitia vero
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}>  10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//  <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" fill="true" className={styles.image} />          </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.culture}`}>
//             Culture
//           </span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}>  10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//  <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" fill="true" className={styles.image} />          </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.food}`}>Food</span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}>  10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//       <Link href="/" className={styles.item}>
//         {withImage && (
//           <div className={styles.imageContainer}>
//             <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" fill="true" className={styles.image} />
//           </div>
//         )}
//         <div className={styles.textContainer}>
//           <span className={`${styles.category} ${styles.fashion}`}>
//             Fashion
//           </span>
//           <h3 className={styles.postTitle}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </h3>
//           <div className={styles.detail}>
//             <span className={styles.username}>John Doe</span>
//             <span className={styles.date}>  10.03.2023</span>
//           </div>
//         </div>
//       </Link>
//     </div>
<div className="sm:col-span-6 lg:col-span-4">
<div className="flex items-start mb-3 ">
    <a href="#" className="inline-block mr-3">
        <div className="w-16 h-16 bg-cover bg-center rounded-full "
            style={{backgroundImage:"url(https://images.unsplash.com/photo-1708112292159-0189af7700e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D);"}}>
        </div>
    </a>
    <div className="text-sm">
        <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
            of Juventus FC looks dejected during the...</a>
            <p className="text-orange-600 text-xs font-semibold mt-1">Food</p>
        <p className="text-gray-600 text-xs">Aug 18</p>
    </div>
</div>
<div className="flex items-start mb-3 ">
    <a href="#" className="inline-block mr-3">
        <div className="w-16  h-16 bg-cover bg-center rounded-full"
            style={{backgroundImage:"url(https://images.unsplash.com/photo-1708112292159-0189af7700e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D);"}}>
        </div>
    </a>
    <div className="text-sm w-2/3">
        <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">Barcelona vs Bayern
            Munich The real football club </a>
            <p className="text-pink-600 text-xs font-semibold mt-1">Style</p>
        <p className="text-gray-600 text-xs">Jan 18</p>
    </div>
</div>
<div className="flex items-start mb-3 ">
    <a href="#" className="inline-block mr-3">
        <div className="w-16 h-16 bg-cover bg-center rounded-full"
            style={{backgroundImage:"url(https://images.unsplash.com/photo-1708112292159-0189af7700e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D);"}}>
        </div>
    </a>
    <div className="text-sm">
        <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">Cristiano Ronaldo
            of Juventus FC looks dejected during the...</a>
            <p className="text-orange-600 text-xs font-semibold mt-1">Food</p>
        <p className="text-gray-600 text-xs">Aug 18</p>
    </div>
</div>

</div>
  );
};

export default MenuPosts;