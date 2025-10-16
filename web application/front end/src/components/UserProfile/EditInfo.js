import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditInfo() {
    const navigate = useNavigate()

    function handleClick() {
        console.log(1)
        //!!!!
        navigate("../User/Profile")
    }

    // !!!! first input users' info(change placeholder) and then update, handleSUbmit need to be changed
    return (
        <div>
            <div class="ui attached message">
                <div class="header">
                    Edit your account information
                </div>
            </div>
            <form class="ui form attached fluid segment">
                <div class="two fields">
                    <div class="field">
                    <label>First Name</label>
                    <input placeholder="Mary" type="text" />
                    </div>
                    <div class="field">
                    <label>Last Name</label>
                    <input placeholder="Liu" type="text" />
                    </div>
                </div>
                <div class="field">
                    <label>Username</label>
                    <input placeholder="xiaohe" type="text" />
                </div>
                <div class="field">
                    <label>Gender</label>
                    <input placeholder="Female" type="text" />
                </div>
                <div class="field">
                    <label>DOB</label>
                    <input placeholder="2002-4-15" type="text" />
                </div>
                <div class="field">
                    <label>Phone Number</label>
                    <input placeholder="1111-111-111" type="text" />
                </div>
                <div class="field">
                    <label>Password</label>
                    <input placeholder="0000" type="password" />
                </div>
                <div class="ui blue submit button" onClick={handleClick}>Submit</div>
                <div class="ui grey submit button" onClick={() => {
                    navigate("../User/Profile")
                }}>Cancel</div>
            </form>
        </div>
    )
}