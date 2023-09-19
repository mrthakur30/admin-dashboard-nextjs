'use client'
import React, { useState } from 'react';

interface AddProfileModelProps {
  submitName: (name: string) => void;
  submitEmail: (email: string) => void;
  submitPhone: (phone: string) => void;
  submitIgLink: (igLink: string) => void;
  submitYtLink: (ytLink: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}


export default function AddProfileModel({
  submitName,
  submitEmail,
  submitPhone,
  submitIgLink,
  submitYtLink,
  setIsOpen,
}: AddProfileModelProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [igLink, setIgLink] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [isSocialOpen, setIsSocialOpen] = useState(true);

  const submitHandler = () => {
    submitName(name);
    submitEmail(email);
    submitPhone(phone);
    submitIgLink(igLink);
    submitYtLink(ytLink);
    setIsOpen(false);
  };

  return (
    <div className='model w-full bg-black bg-opacity-40  my-auto  flex items-center justify-center'>
      <div className='rounded-lg px-4 py-4 bg-white md:min-h-1/2 md:w-1/3'>
        <div className='flex justify-between mb-4'>
          <h1 className='font-semibold  text-xl'>Add Profile</h1>
          <button className='text-gray-200 ' onClick={() => setIsOpen(false)}>X</button>
        </div>
        <hr />

        <div className='flex flex-row justify-evenly'>
          <span>
            <h1 className='font-semibold'>Basic</h1>
            <hr />
          </span>
          <span>
            <h1 className='font-semibold'>Social</h1>
            <hr />
          </span>
        </div>
        <div className='flex justify-evenly pt-3'>
          <div className=''>
            <p>Enter Name*</p>
            <input
              className='px-2 py-1.5 border border-gray-300 rounded-md mb-4 mt-2 outline-none'
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Eg. Mukul Thkaur'
            />

            <p>Enter Email*</p>
            <input
              className='px-2 py-1.5 border border-gray-300 rounded-md mb-4 mt-2 outline-none'
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='Eg. mukul@xyx.com'
            />

            <p>Enter Phone*</p>
            <input
              className='px-2 py-1.5 border border-gray-300 rounded-md mb-4 mt-2 outline-none'
              type='tel'
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder='Eg. 85825959595'
            />

            <div className="flex">
              {/* <button>Back</button>
              <button>Next</button> */}
              <button className=' bg-blue-500 rounded-lg  border-4 border-gray-100 text-white  font-semibold py-2 px-3' onClick={submitHandler}>Submit</button>
            </div>
          </div>
          <div>
            <p>Instagram Link (Optional)</p>
            <input
              className='px-2 py-1.5 border border-gray-300 rounded-md mb-4 mt-2 outline-none'
              type='text'
              name="igLink"
              id="igLink"
              onChange={(e) => setIgLink(e.target.value)}
              value={igLink}
              placeholder='Eg. instagram.com/username'
            />

            <p>Youtube Link (Optional)</p>
            <input
              className='px-2 py-1.5 border border-gray-300 rounded-md mb-4 mt-2 outline-none'
              type='text'
              name="ytLink"
              id="ytLink"
              onChange={(e) => setYtLink(e.target.value)}
              value={ytLink}
              placeholder='Eg. youtube.com/username'
            />
          </div>
        </div>

      </div>
    </div>
  );
}
