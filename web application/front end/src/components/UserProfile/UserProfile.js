import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from './Account';

export default function UserProfile() {
    const [acc, setAcc] = useState("active item")
    const [pay, setPay] = useState("item")
    const [sc, setSc] = useState("item")
    const [add, setAdd] = useState("item")
    const [history, setHistory] = useState("item")

    const navigate = useNavigate()

    return (
        // semantic ui grid
        <div className='ui grid'>
            <div className='four wide column'>
                <div class="ui vertical fluid tabular menu">
                    <a className={acc}>
                        Account
                    </a>
                    <a className={pay} onClick={() => {
                        navigate("/User/Payment")
                    }}>
                        Payment
                    </a>
                    <a className={sc} onClick={() => {
                        navigate("/User/Shopping_cart")
                    }}>
                        Shopping Cart
                    </a>
                    <a className={add} onClick={() => {
                        navigate("/User/Address")
                    }}>
                        Address
                    </a>
                    <a className={history} onClick={() => {
                        navigate("/User/History")
                    }}>
                        History
                    </a>
                </div>
            </div>
            <div className='twelve wide stretched column'>
                <div className='ui segment'>
                    <Account />
                </div>
            </div>
            <div>
                <div class="ui pink submit button" onClick={() => {
                    navigate("../User/Search")
                }}>Home</div>
            </div>
        </div>
    )
}