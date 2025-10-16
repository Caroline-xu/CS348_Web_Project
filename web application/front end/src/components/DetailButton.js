import React from 'react'
import { useNavigate  } from 'react-router-dom';

export default function DetailButton() {
    const navigate = useNavigate()

    function handleClick (e) {
        e.preventDefault()
        try {
            //setError("")
            //await addDoc(collections, {title, content, author: { id: currentUser.uid }})
            navigate("/details")
        } catch (err) {
            //setError('Failed to create a post')
        }
    }

    return (
        <button className='ui button' onClick={handleClick}>Details</button>
    )
}