import React, { useState } from 'react';
import ErrorComponent from '../ErrorComponent';

export default function OTPVerification() {
    const [OTP, setOTP] = useState('');
    const [error,setError] = useState('');
    function handleClick(e) {
        e.preventDefault();
        setError('vafield Cannot be empty')
    }

    return (
        <div className='h-[90vh] text-white font-thin bg-gray-800 flex justify-center items-center flex-wrap' >
            <form>
               
                
                <div className='w-[80%] grid grid-cols-2'>

                    <label htmlFor="OTP">OTP :</label>
                    <input className='text-gray-600 p-1 mt-1' maxLength={6} type="Number" id="OTP" onChange={(e) => setOTP(e.target.value)} value={OTP} placeholder='OTP' />
                    <br />
                </div>{

                    (error) ? ErrorComponent(error) : null
                }
               


                <div className='w-[80%] grid grid-cols-1 gap-3'>
                    <input className='p-1 bg-green-400 hover:bg-green-800 transition-all ' onClick={(e)=>handleClick(e)} type="submit" value="Login" />
                    <br />
                </div>
            </form>
        </div>
    )
}
