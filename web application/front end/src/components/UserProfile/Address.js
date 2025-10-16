import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const navigate = useNavigate()

    //Address list !!!!!
    return (
        <div>
            <div>Address list</div>
            <div class="ui grey submit button" onClick={() => {
                navigate("../User/Profile")
            }}>Back</div>
        </div>
    )
}