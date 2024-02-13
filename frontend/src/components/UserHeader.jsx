import React from 'react'

const UserHeader = (props) => {
  return (
    <div className='grid grid-cols-12 col-span-12 gap-8 justify-center items-center'>
        <div className='col-span-3'>
            <img src={props.image} className='w-[200px] h-[200px] rounded-full'/>
        </div>
        <div className='grid grid-rows-1 col-span-9 gap-2'>
            <div className='grid grid-cols-12 col-span-12 justify-between items-center'>
                <div className='col-span-9'>
                    <h2 className='text-xl text-gray-500'>{props.name}</h2>
                </div>
                <div className='col-span-3 m-2'>
                    <button className='text-sm p-2 rounded-full bg-black text-white w-[50%]'>Follow</button>
                </div>
            </div>
            <div className='text-sm text-gray-400'>{props.about}</div>
        </div>
    </div>
  )
}

export default UserHeader