import React from 'react';
import { useNavigate  } from 'react-router-dom';

export default function AddClothButton() {
    const navigate = useNavigate()

    function handleClick (e) {
        e.preventDefault()
        try {
            //setError("")
            //await addDoc(collections, {title, content, author: { id: currentUser.uid }})
            navigate("/AddCloth")
        } catch (err) {
            //setError('Failed to create a post')
        }
    }

    return (
        <a>
            <button className='ui button' onClick={handleClick}>Add Cloth</button>
        </a>
    )
}