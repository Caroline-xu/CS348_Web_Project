import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SellHistory() {
    const navigate = useNavigate()

    // !!!! list
    return (
        <div>
            <div>Transaction History</div>
            <div class="ui grey submit button" onClick={() => {
                navigate("../Seller/Profile")
            }}>Back</div>
        </div>
    )
}