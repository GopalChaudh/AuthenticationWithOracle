import React from 'react'
import cookies from 'js-cookies'
import {Navigate} from 'react-router-dom'
export default function Home() {
    
    if(!(cookies.hasItem('AccessToken')))
       { 
        Navigate({
            to:'/register'
        })
        
}
        return (
            <div>Home</div>
            )
       
}
