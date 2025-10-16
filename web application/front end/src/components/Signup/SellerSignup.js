import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { variables } from "../link";

export default function UserSignup(props) {
  const navigate = useNavigate();

  function handleClick() {
    console.log(1);
  }

  const [Name, setN] = useState("");
  const [Address, setA] = useState("");
  const [Pass, setPass] = useState("");
  
  const addSeller = () => {
    Axios.post(variables.HOME_URL + "seller/register", {
      name: Name,
      address: Address,
      password: Pass

    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div>
      <div class="ui attached message">
        <div class="header">Welcome to our site!</div>
        <p>Fill out the form below to sign-up for a new Seller account</p>
      </div>
      <form class="ui form attached fluid segment">
       
          <div class="field">
            <label>Store Name</label>
            <input placeholder="Store Name" type="text" 
            onChange={(event) => {
                setN(event.target.value);
              }}/>
          </div>
       
        <div class="field">
          <label>Password</label>
          <input placeholder="password" type="password" onChange={(event) => {
                setPass(event.target.value);
              }} />
        </div>
        <div class="field">
          <label>Address</label>
          <input type="text"  onChange={(event) => {
                setA(event.target.value);
              }}/>
        </div>
        <div class="inline field">
          <div class="ui checkbox">
            <input type="checkbox" id="terms" />
            <label for="terms">I agree to the terms and conditions</label>
          </div>
        </div>
        <div
          class="ui blue submit button"
          onClick={
        //     () => {
        //     navigate("../Seller/Search");
        //   }
        addSeller
        }
        >
          Submit
        </div>
        <div
          class="ui grey submit button"
          onClick={() => {
            navigate("../");
          }}
        >
          Home
        </div>
      </form>
      <div class="ui bottom attached warning message">
        <i class="icon help"></i>
        Already have an account with us?{" "}
        <a href="#">
          <Link to="/login">Login here</Link>
        </a>{" "}
        instead.
      </div>
      <div class="ui bottom attached warning message">
        <i class="icon help"></i>
        <a href="#"><Link to="/Seller/forgotpwd">Forgot Password?</Link></a> Click here to reset your password.
        </div>
    </div>
  );
}
