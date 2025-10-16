import React from 'react';
import { useNavigate  } from 'react-router-dom';

// display all the user information on the right page
// use nested segment ui
// !!!! need to change line 14 to actual user info
export default function SellerAccount() {
    const navigate = useNavigate()

    function handleClick (e) {
        e.preventDefault()
        try {
            //setError("")
            //await addDoc(collections, {title, content, author: { id: currentUser.uid }})
            navigate("/Seller/EditStoreInfo")
        } catch (err) {
            //setError('Failed to create a post')
        }
    }

    return (
        // header list
        <div class="ui list">
            <div class="item">
                <div class="header">First Name</div>
                Mary
            </div>
            <div class="item">
                <div class="header">Last Name</div>
                Liu
            </div>
            <div class="item">
                <div class="header">Store Name</div>
                Balenciaga
            </div>
            <div class="item">
                <div class="header">Phone Number</div>
                111-111-1111
            </div>
            <div class="item">
                <div class="header">Email Address</div>
                aa@aa.com
            </div>
            <br />
            <button className="ui button" onClick={handleClick}>Edit</button>
        </div>
    )
}