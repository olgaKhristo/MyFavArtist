import React from 'react';
import "./App.css"
import pic from "./queen.jpg"
export default function Header() {
    return(
        <>
            <img src={pic} alt="queen" className='picture' />
            <h1>Queen</h1>
            <p> Another one bites the dust </p>
        </>
    )
}