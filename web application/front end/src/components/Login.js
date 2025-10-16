import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()

    return (
        <div>
            <div class="ui attached message">
                <div class="header">
                    Welcome to our site!
                </div>
                <p>Login to make a easier step towards your shopping!</p>
            </div>
            <form class="ui form attached fluid segment">
                <div class="field">
                    <label>Email Address</label>
                    <input type="text" />
                </div>
                <div class="field">
                    <label>Password</label>
                    <input type="text" />
                </div>
            </form>
            <i class="icon help"></i>
                Don't have an account yet? <a href="#"><Link to="/signup">Sign Up</Link></a> here.
            <br />
            <div class="ui grey submit button" onClick={() => {
                navigate("../")
            }}>Back</div>
        </div>
    )
}