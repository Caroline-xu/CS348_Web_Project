import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { useEffect } from "react";
import { variables } from "../link";
import Axios from "axios";
import AuthContext from "../AuthProvider";

export default function SellerLogin() {
    const navigate = useNavigate();
    const [Aid, getID] = useState([]);
    const [Email, setE] = useState("");
    const [Password, setP] = useState("");
    const [LoginStatus, setLoginStatus] = useState("");
  
    const login = () => {
        Axios.post(variables.HOME_URL + "sellers/login", {
          name: Email,
          password: Password,
        }
        ).then((response) => {
    
            if (response.data.message) {
              setLoginStatus(response.data.message)
            } else {
              setLoginStatus("Successful Login")
              navigate("../Seller/Search");
            }
            console.log(response.data[0])
            
        });
    
      };
    
  
  return (
    <div>
      <div class="ui attached message">
        <div class="header">Welcome to our site!</div>
        <p>Login to make a easier step towards your shopping!</p>
      </div>
      <form class="ui form attached fluid segment">
        <div class="field">
          <label>Name</label>
          <input type="text" onChange={(event) => setE(event.target.value)}/>
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password"    onChange={(event) => setP(event.target.value)}/>
        </div>
      </form>
      <br />
      <div
        class="ui blue submit button"
        onClick={login}
      >
        Submit
      </div>
      <div class="ui bottom attached warning message">
        <i class="icon help"></i>
        Don't have an account yet?{" "}
        <a href="#">
          <Link to="/Seller/signup">Sign Up</Link>
        </a>{" "}
        here.
      </div>
      <div
        class="ui grey submit button"
        onClick={() => {
          navigate("../");
        }}
      >
        Back
      </div>
    </div>
  );
}
