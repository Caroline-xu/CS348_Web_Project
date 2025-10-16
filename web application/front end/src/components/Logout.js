import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate()
    return (
        <div>
            <p>Press this button you will log out of your account</p>
            <button className='ui button' onClick={() => {
                navigate("../")
            }}>Logout</button>
        </div>
    )
}