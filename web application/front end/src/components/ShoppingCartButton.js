import React from 'react';
import { useNavigate  } from 'react-router-dom';

export default function ShoppingCartButton() {
    const navigate = useNavigate()

    function handleClick (e) {
        e.preventDefault()
        try {
            //setError("")
            //await addDoc(collections, {title, content, author: { id: currentUser.uid }})
            navigate("/User/Shopping_cart")
        } catch (err) {
            //setError('Failed to create a post')
        }
    }

    return (
        <a>
            <button className='ui button' onClick={handleClick}>Shopping Cart</button>
        </a>
    )
}