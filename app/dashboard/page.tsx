import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard } from 'lucide-react';

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className="flex justify-center py-24 min-h-screen  bg-gradient-to-r from-slate-950 via-gray-950 to-slate-950">
        <div className="flex justify-center flex-row gap-x-7 max-w-xl">
            <LayoutDashboard className="w-11 h-11 text-slate-50" />
          <h1 className="sm:text-5xl text-xl font-bold text-slate-50 mt-2 sm:mt-0">Dashboard   
          </h1>
          <div className="mt-2">
                <UserButton  />
         </div>
            
            </div>
            


    </div>

  )
}

export default Dashboard