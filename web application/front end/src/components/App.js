import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import unsplash from '../api/mysqlLink';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Details from './Details';
import Dashboard from './Dashboard';
import UserSignup from './Signup/UserSignup';
import Logout from './Logout';
import CollectButton from './CollectButton';
import ShoppingCart from './UserProfile/ShoppingCart';
import UserProfile from './UserProfile/UserProfile';
import EditInfo from './UserProfile/EditInfo';
import Login from './Login';
import SelectUserSeller from './Signup/SelectUserSeller';
import SellerSignup from './Signup/SellerSignup';
import UserSearch from './UserProfile/UserSearch';
import Payment from './UserProfile/Payment';
import Address from './UserProfile/Address';
import History from './UserProfile/History';
import SellerSearch from './SellerProfile/SellerSearch';
import SellerProfile from './SellerProfile/SellerProfile';
import EditStoreInfo from './SellerProfile/EditStoreInfo';
import StoreCloth from './SellerProfile/StoreCloth';
import SellHistory from './SellerProfile/SellHistory';
import SelectUserSellerLogin from './Login/SelectUserSellerLogin';
import UserLogin from './Login/UserLogin';
import SellerLogin from './Login/SellerLogin';
import AddCloth from './SellerProfile/AddCloth';
import Fb from './Fb';
import UForgotPassword from './Signup/UserForgotPwd';
import SForgotPassword from './Signup/SellerForgotPwd';

export default function App() {
    const [images, setImages] = useState([])

    // assign the async function to an instance property
    async function onSearchSubmit (term) {
        const response = await unsplash.get('/search/photos', {
            // params same as https://api.unsplash.com/search/query(term)
            params: { query: term },
        });

        setImages(response.data.results)
    }

    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/details" element={<Details />} />
                    <Route exact path="/feedback" element={<Fb />} />
                    <Route exact path="/AddCloth" element={<AddCloth />} />
                    <Route exact path="/User/signup" element={<UserSignup />} />
                    <Route exact path="/Seller/signup" element={<SellerSignup />} />
                    <Route exact path="/Seller/Search" element={<SellerSearch />} />
                    <Route exact path="/Seller/Profile" element={<SellerProfile />} />
                    <Route exact path="/Seller/EditStoreInfo" element={<EditStoreInfo />} />
                    <Route exact path="/Seller/StoreCloth" element={<StoreCloth />} />
                    <Route exact path="/Seller/History" element={<SellHistory />} />
                    <Route exact path="/logout" element={<Logout />} />
                    <Route exact path="/User/Shopping_cart" element={<ShoppingCart />} />
                    <Route exact path="/collects" element={<CollectButton />} />
                    <Route exact path="/User/Profile" element={<UserProfile />} />
                    <Route exact path="/EditUserInfo" element={<EditInfo />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/SelectUserSeller" element={<SelectUserSeller />} />
                    <Route exact path="/Seller" element={<SelectUserSeller />} />
                    <Route exact path="/User/Search" element={<UserSearch />} />
                    <Route exact path="/User/Payment" element={<Payment />} />
                    <Route exact path="/User/Address" element={<Address />} />
                    <Route exact path="/User/History" element={<History />} />
                    <Route exact path="/SelectUserSellerLogin" element={<SelectUserSellerLogin />} />
                    <Route exact path="/user/Login" element={<UserLogin />} />
                    <Route exact path="/Seller/Login" element={<SellerLogin />} />
                    <Route exact path="/User/forgotpwd" element={<UForgotPassword />} />
                    <Route exact path="/Seller/forgotpwd" element={<SForgotPassword />} />
                </Routes>
            </div>
        </Router>
    ) 
}