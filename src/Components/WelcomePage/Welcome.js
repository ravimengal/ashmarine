import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className='welcome'>
                  
            <div className='overlay'>
                <NavBar/>
                <h1>Welcome to A S MARINE HOSPITALITY</h1>
            </div>
          
           
        </div>
    )
}

export default Welcome
