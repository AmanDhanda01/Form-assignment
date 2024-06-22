import React, { useState, useEffect } from 'react';
import EventSummar from '../components/EventSummar';
import { useForm } from '../hooks/event-rregistration-form';


const EventRegistration = () => {
  const { values, errors, handleInputChange, handleGuestChange, handleSubmit ,submitted } = useForm();
  if(submitted){
    return (
      <> 
      <EventSummar values={values}/>
      </>
    )
  }

  return (
    <div className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Event Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 text-gray-700 border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 text-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="johndoe@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 text-gray-700 border ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="25"
          />
          {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}
        </div>
        <div className="mb-4 flex space-x-1 items-center">
          <label className="block text-gray-700 text-sm font-bold mb-2 flex-1" htmlFor="attendGuest">
            Are you attending with a guest?
          </label>
          <label className='flex space-x-1'>
             <p className='mr-1 font-semibold'>Yes</p> 
             <input
               type="radio"
               name="attendingWithGuest"
               checked={values.attendingWithGuest}
               value={"Yes"}
               onChange={handleGuestChange}
               className={` px-4 py-2 text-gray-700 border`}
              /> 
          </label>
          <label className='flex space-x-1'>
             <p className='mr-1 font-semibold'>No</p> 
             <input
               type="radio"
               name="attendingWithGuest"
               checked={!values.attendingWithGuest}
               value={"No"}
               onChange={handleGuestChange}
               className={` px-4 py-2 text-gray-700 border`}
              /> 
          </label>
        </div>
        {values.attendingWithGuest && 
             <div className="mb-4">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guestName">
               Enter the Guest Name
             </label>
             <input
               type="text"
               id="guestName"
               name="guestName"
               value={values.guestName}
               onChange={handleInputChange}
               className={`w-full px-4 py-2 text-gray-700 border ${errors.guestName ? 'border-red-500' : 'border-gray-300'}`}
               placeholder="John Doe"
             />
             {errors.guestName && <p className="text-red-500 text-xs">{errors.guestName}</p>}
           </div>
        }
         <button type='submit' className='ml-auto bg-blue-500 rounded-md text-white p-1'>Submit</button>
        </form>
      </div>

)
}

export default EventRegistration