'use client'
import { PieChart } from '../AdminDashboard/Charts/PieCharts';
import './editor.css'
import React, { useEffect, useState } from 'react';
import { ProfileCardsList } from './profileCardslist';
import { Msg } from './msg';
import { DataCards } from './dataCards';
import { Display } from './Display';


const BackgroundAnimation: React.FC = () => {
 

  return (<>
<section>
    <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
            <div className="relative">
                <div className="relative z-10 grid gap-3 grid-cols-6">
                   
                    <div className="col-span-full sm:col-span-3 lg:col-span-2 relative   dark:border-gray-800 dark:bg-gray-900">
                       <DataCards/>
                    
                    </div>
                    <div className="col-span-full lg:col-span-2  relative  dark:border-gray-800 dark:bg-gray-900">
                       <Msg/>
                    </div>

                    <div className="col-span-full sm:col-span-3 lg:col-span-2  relative  dark:border-gray-800 dark:bg-gray-900">
                      <ProfileCardsList/>
                    </div>



                    <div className="col-span-full lg:col-span-3  relative  dark:border-gray-800 dark:bg-gray-900">
                        <Display/>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</section>
  
  
  </>)
};






  
  export default BackgroundAnimation;