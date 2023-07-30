import React from 'react'

export default function ErrorComponent(message) {
  return (
    <div className='w-[90vw] bg-red-500 container fixed flex justify-between top-[90vh] left-10  p-2'>

    <span className='text-red-100 text-sm'>{message}</span>
    </div>
  )
}
