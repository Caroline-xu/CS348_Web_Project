import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { useEffect } from "react";
import { variables } from "../link";
import Axios from "axios";
import AuthContext from "../AuthProvider";

export default function AddCloth() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const [Aid, getID] = useState([]);
  const [Email, setE] = useState("");
  const [Price, setP] = useState(0);
  const [Sid, setS] = useState(0);

  // const getID = () => {
  //     Axios.get(variables.HOME_URL+ "users/login", {email: Email,password: Pass}).then((response)=> {
  //         // setID(response.data);
  //         console.log(response.data);

  //     });

  //   }
  // useEffect(() => {
  //    userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //     setErrMsg("");
  // }, [Email,Pass]);

    // useEffect(() => {
    //   Axios.get(variables.HOME_URL + "users/login").then((response) => {
    //     console.log(response.data);
    //   });
    // }, [Email, Pass]);

  const login = () => {
    Axios.post(variables.HOME_URL + "seller/post", {
      brand: Email,
      price: Price,
    }
    ).then((response) => {

       
        console.log("success")
        
    });

  };

  return (
  
        <div>
          <div class="ui attached message">
            <div class="header">Please enter the new cloth information below</div>
        
          </div>
          <form class="ui form attached fluid segment">
        
            <div class="field">
              <label>Brand Name</label>
              <input
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(event) => setE(event.target.value)}
        
                required
              />
            </div>
            <div class="field">
              <label>Price</label>
              <input
                type="text"
                ref={userRef}
                onChange={(event) => setP(event.target.value)}
             
                required
              />
            </div>
            <div class="ui blue submit button" onClick ={login}>
              Submit
            </div>
          </form>
          <br />

       
          
          <div
            class="ui grey submit button"
            onClick={() => {
              navigate("../Seller/Search");
            }}
          >
            Back
          </div>

       
        </div>
      

  );
}
