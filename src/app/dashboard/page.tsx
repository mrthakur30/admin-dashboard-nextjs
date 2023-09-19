import AddProfileModel from '@/components/AddProfileModel'
import BarChartCard from '@/components/BarChartCard'
import BottomCards from '@/components/BottomCards'
import { SearchCard } from '@/components/SearchCard'
import StatsCard from '@/components/StatsCard'
import React from 'react'


function Dashboard() {


  return (
    <div className="grid bg-[#F8FAFF]  h-auto dashboard md:grid-cols-4 gap-4">
      <div className="bg-blue-500 hidden relative rounded-2xl md:flex flex-col gap-6 pl-12 my-12 ml-12">
        <h1 className="text-4xl font-bold text-white  my-14">Board.</h1>
        <ul className='text-white flex flex-col gap-5 font-light'>
          <li><span></span>Dashboard</li>
          <li><span></span>Transactions</li>
          <li><span></span>Schedules</li>
          <li><span></span>Users</li>
          <li><span></span>Settings</li>
        </ul>
        <div className="bottom-16 flex flex-col gap-5 absolute text-white font-light">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className=" px-7 md:px-14 col-span-3">
        <div className="flex md:flex-row flex-col mt-16 mb-12 items-center justify-between">
          <h1 className="text-2xl font-bold md:mb-0 mb-5">Dashboard</h1>
          <SearchCard />
        </div>

        <div className="flex">
            <StatsCard/>
        </div>
        <BarChartCard/>
        <BottomCards/>
      </div>
    </div>
  )
}

export default Dashboard