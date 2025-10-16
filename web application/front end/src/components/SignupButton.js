import React from 'react';
import { useNavigate  } from 'react-router-dom';

export default function SignupButton(props) {
    const navigate = useNavigate()

    function handleClick (e) {
        e.preventDefault()
        try {
            //setError("")
            //await addDoc(collections, {title, content, author: { id: currentUser.uid }})
            navigate("/SelectUserSeller")
        } catch (err) {
            //setError('Failed to create a post')
        }
    }

    return (
        <a>
            <button className='ui button' onClick={handleClick}>Signup</button>
        </a>
    )
}