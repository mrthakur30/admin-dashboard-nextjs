'use client'
import React, { useState } from 'react'
import AddProfileModel from './AddProfileModel'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);

export default function BottomCards() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<String | null>(null);
  const [email, setEmail] = useState<String | null>(null);
  const [phone, setPhone] = useState<String | null>(null);
  const [igLink, setIgLink] = useState<String | null>(null);
  const [ytLink, setYtLink] = useState<String | null>(null);

  const [dataSet, setDataSet] = useState(null);
  const [lables, setLables] = useState(null);

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Top',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="flex md:flex-row flex-col grow gap-10 pb-8 justify-evenly ">
      {isOpen &&   
      <AddProfileModel
       submitName = {setName}
       submitEmail = {setEmail}
       submitPhone = {setPhone}
       submitIgLink = {setIgLink}
       submitYtLink = {setYtLink}
       setIsOpen = {setIsOpen}
      />}
      <div className='bg-white p-4 md:grow  md:h-60 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        <Doughnut data={data} />
      </div>
      <div className='bg-white p-4 grow  md:h-60 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        {name&& email && phone ?
          <div className='p-8'>
                <h1 className=' text-2xl font-semibold mb-7'>{name}</h1>
                <div className="flex justify-between gap-6">
                   <div className="flex flex-col gap-4">
                       <span className='  underline-offset-1 underline '>{phone}</span>
                       <span className='  underline-offset-1 underline '>{email}</span>
                   </div>
                   <div className="flex flex-col gap-4">
                       <span className='  underline-offset-1 underline '>{igLink}</span>
                       <span className='  underline-offset-1 underline '>{ytLink}</span>
                   </div>
                </div>
          </div>
          :
          <div className=' flex flex-col h-full justify-center items-center'>
            <button className=' rounded-full  text-slate-400 w-16 h-16  p-2 bg-gray-100 text-5xl' onClick={() => setIsOpen(true)}>+</button>

            <h1 className=' text-gray-400'>Add Profile</h1>
          </div>
        }
      </div>

    </div>
  )
}