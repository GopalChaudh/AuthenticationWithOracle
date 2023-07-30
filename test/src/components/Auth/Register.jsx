import React, { useEffect, useState } from 'react';
import OTPVerification from './OTPVerification';
import ErrorComponent from '../ErrorComponent';
import validator from 'validator';

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        conformPassword: ''
    })
    const [submited, setSubmited] = useState(false)
    const [error,setError] = useState(false);
    useEffect(()=>{
        if(error)
            setTimeout(()=>{
                setError('')
            },5000);
    },[error])

    function handleClick(e) {
        e.preventDefault();
        setError('')
        // console.log(formData);
        if(!(formData.name) || !(formData.email) || !(formData.password) || !(formData.conformPassword)){
            return setError("All Feilds must be filled !")
        }
        if(!validator.isEmail(formData.email)){
            return setError("email is invalid !")
        }
        if(formData.password === formData.conformPassword){

            if(!validatePassword(formData.password)){
                setSubmited(true);
            }
        }else{
            onFormChange({conformPassword:''});

           return setError("password doesn't match !")

        }
        // setSubmited(true)
    }
    function validatePassword(password){

        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const HasNumbers = /\d/.test(password);
        const hasSpecialCherecters = /[!@#$%^&*?]/.test(password);
        if(hasLower && hasUpper && hasSpecialCherecters && HasNumbers && password.length >=9){
            return 0;
        }else{
            setError('password must contain [A-Z] , [a-z],[0-9] with special symbles like [!@#$%^&*?]')
            return -1;
        }
        
    }
    function onFormChange(Update) {
        setFormData({ ...formData, ...Update })
    }
    if (submited) {
        return <OTPVerification />
    } else {

        return (
            <div className='h-[90vh] text-white font-thin bg-gray-800 flex justify-center items-center flex-wrap' >
                <form>
                    <div className='w-[80%] grid grid-cols-2'>

                        <label htmlFor="name" >
                            Name:
                        </label>
                        <input className='text-gray-600 p-1 mt-1' type="text" onChange={(e) => onFormChange({ name: e.target.value })} value={formData.name} id="name" autoComplete='user-name' placeholder='Name' />
                        <br />
                    </div>
                    <div className='w-[80%] grid grid-cols-2'>

                        <label htmlFor="Email">
                            Email :
                        </label>
                        <input className='text-gray-600 p-1 mt-1' type="text" id="Email" onChange={(e) => onFormChange({ email: e.target.value })} value={formData.email} autoComplete='user-email' placeholder='Email@example.com' />
                        <br />
                    </div>
                    <div className='w-[80%] grid grid-cols-2'>

                        <label htmlFor="Password">Password :</label>
                        <input className='text-gray-600 p-1 mt-1' type="password" id="Password" onChange={(e) => onFormChange({ password: e.target.value })} value={formData.password} autoComplete='new-password' placeholder='Password' />
                        <br />
                    </div>
                    <div className='w-[80%] grid grid-cols-2'>

                        <label htmlFor="cPassword">conform Password :</label>
                        <input className='text-gray-600 p-1 mt-1' type="password" id="cPassword" autoComplete='new-password' onChange={(e) => onFormChange({ conformPassword: e.target.value })} value={formData.conformPassword} placeholder='conform Password' />
                        <br />
                    </div>

                    {
                    (error) ? ErrorComponent(error) : null
                }


                    <div className='w-[80%] grid grid-cols-2 gap-3'>
                        <input className='p-1 bg-green-400 hover:bg-green-800 transition-all ' onClick={(e) => handleClick(e)} type="submit" value="Submit" />


                        <input className='p-1 bg-green-400 hover:bg-green-800 transition-all' type="reset" onClick={() => onFormChange({
                            name: '',
                            email: '',
                            password: '',
                            conformPassword: ''
                        })} value="reset" />
                        <br />
                    </div>
                </form>
            </div>
        )
    }
}
