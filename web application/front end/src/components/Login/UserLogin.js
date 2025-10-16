import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { useEffect } from "react";
import { variables } from "../link";
import Axios from "axios";
import AuthContext from "../AuthProvider";

export default function UserLogin() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const [Aid, getID] = useState([]);
  const [Email, setE] = useState("");
  const [Password, setP] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");
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
    Axios.post(variables.HOME_URL + "users/login", {
      email: Email,
      password: Password,
    }
    ).then((response) => {

        if (response.data.message) {
          setLoginStatus(response.data.message)
        } else {
          setLoginStatus("Successful Login")
          navigate("../User/Search");
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
              <label>Email Address</label>
              <input
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(event) => setE(event.target.value)}
        
                required
              />
            </div>
            <div class="field">
              <label>Password</label>
              <input
                type="password"
                ref={userRef}
                onChange={(event) => setP(event.target.value)}
             
                required
              />
            </div>
            <div class="ui blue submit button" onClick={login}>
              Submit
            </div>
          </form>
          <br />

       
          <div class="ui bottom attached warning message">
            <i class="icon help"></i>
            Don't have an account yet?{" "}
            <a href="#">
              <Link to="/User/signup">Sign Up</Link>
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

          <h1>{LoginStatus}</h1>
        </div>
      

  );
}
