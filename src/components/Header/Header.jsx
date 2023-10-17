import React from 'react';

import pic from "../../../public/queen.jpg"
export default function Header() {
    return(
        <>
            <img src={pic} alt="queen" className='picture' />
            <h1>Queen</h1>
            <p> Another one bites the dust </p>
        </>
    )
}