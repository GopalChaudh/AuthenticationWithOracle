import React, { useEffect, useState } from 'react'
import ErrorComponent from '../ErrorComponent';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(false)


    useEffect(()=>{
        
        if(error)
        setTimeout(()=>{
            setError('')
            },5000);
    },[error])


    function handleClick(e) {
        e.preventDefault();
        console.log(formData);

    }
    function OnFormChange(Update) {
        setFormData({ ...formData, ...Update })
    }

    return (

        <div className='h-[90vh] transition-all text-white font-thin bg-gray-800 flex justify-center items-center flex-wrap' >
            <form>

                <div className='w-[80%] grid grid-cols-2'>

                    <label htmlFor="Email">
                        Email :
                    </label>
                    <input className='text-gray-600 p-1 mt-1' type="text" id="Email" onChange={(e) => OnFormChange({ email: e.target.value })} value={formData.email} placeholder='Email@example.com' />
                    <br />
                </div>
                <div className='w-[80%] grid grid-cols-2'>

                    <label htmlFor="Password">Password :</label>
                    <input className='text-gray-600 p-1 mt-1' type="password" id="Password" onChange={(e) => OnFormChange({ password: e.target.value })} value={formData.password} placeholder='Password' />
                    <br />
                </div>

                {

                    (error) ? ErrorComponent(error) : null
                    
                }
               

                <div className='w-[80%] grid grid-cols-1 gap-3'>
                    <input className='p-1 bg-green-400 hover:bg-green-800 transition-all ' onClick={(e) => handleClick(e)} type="submit" value="Login" />
                    <br />
                </div>
            </form>
        </div>
    )
}

