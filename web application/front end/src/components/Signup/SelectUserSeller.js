import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SelectUserSeller(props) {
    const [id, setId] = useState("")
    const navigate = useNavigate()

    return (
        <div class="ui form">
            <div class="inline fields">
                <label><h3>Register as a seller or a user?</h3></label>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="frequency" onClick={() => {
                            setId("User")
                            //console.log(id)
                        }} />
                        <label><h5>User</h5></label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="frequency" onClick={() => {
                            setId("Seller")
                            //console.log(id)
                        }} />
                        <label><h5>Seller</h5></label>
                    </div>
                </div>
            </div>
            <button className='ui button' onClick={() => {
                console.log(id)
                if (id == "User") {
                    navigate('../User/Signup')
                } else {
                    navigate('../Seller/Signup')
                }
            }}>Submit</button>
        </div>
    )
}