import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const navigate = useNavigate()

    return (
        <div>
            <div>Payment History</div>
            <div class="ui grey submit button" onClick={() => {
                navigate("../User/Profile")
            }}>Back</div>
        </div>
    )
}