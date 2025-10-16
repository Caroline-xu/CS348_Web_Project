import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate()

    function handleClick() {
        console.log(1)
        navigate("../Profile")
    }
    
    return (
        // !!!! change placeholder to user's actual card info; update user's payment information
        <div>
            <div class="ui attached message">
                <p>Add your payment method</p>
                </div>
                <form class="ui form attached fluid segment">
                    <div class="field">
                        <label>Card Number</label>
                        <input placeholder="4444-4444-4444-4444" type="text" />
                    </div>
                    <div class="two fields">
                        <div class="field">
                            <label>Expired date</label>
                            <input placeholder="01/24" type="text" />
                        </div>
                        <div class="field">
                            <label>CVV</label>
                            <input placeholder="111" type="number" />
                        </div>
                    </div>
                    <div class="ui blue submit button" onClick={handleClick}>Update</div>
                    <div class="ui grey submit button" onClick={() => {
                        navigate("../User/Profile")
                    }}>Cancel</div>
                </form>
        </div>
    )
}