import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerAccount from './SellerAccount';

export default function SellerProfile() {
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
                    <a className={add} onClick={() => {
                        navigate("../Seller/StoreCloth")
                    }}>
                        Cloth in Store
                    </a>
                    <a className={history} onClick={() => {
                        navigate("../Seller/History")
                    }}>
                        History
                    </a>
                </div>
            </div>
            <div className='twelve wide stretched column'>
                <div className='ui segment'>
                    <SellerAccount />
                </div>
            </div>
            <div>
                <div class="ui pink submit button" onClick={() => {
                    navigate("../Seller/Search")
                }}>Home</div>
            </div>
        </div>
    )
}