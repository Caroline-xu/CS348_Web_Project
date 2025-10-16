import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Filter from "../Filter";
import { useState } from "react";
import Axios from "axios";
import { variables } from "../link";
export default function UserSignup(props) {
  const navigate = useNavigate();

  const [First, setF] = useState("");
  const [Last, setLast] = useState("");
  const [Birth, setB] = useState("");
  const [Pass, setPass] = useState("");
  const [Phone, setPhone] = useState(0);
  const [Email, setEmail] = useState("");

  const addUser = () => {
    Axios.post(variables.HOME_URL + "user/register", {
      first_name: First,
      last_name: Last,
      birth: Birth,
      password: Pass,
      phone: Phone,
      email: Email,
    }).then(() => {
      console.log("success");
      navigate("../User/Search");
    });
  };

  function handleClick() {
    console.log(1);
  }
  console.log(props);
  return (
    <div>
      <div class="ui attached message">
        <div class="header">Welcome to our site!</div>
        <p>Fill out the form below to sign-up for a new User account</p>
      </div>
      <form class="ui form attached fluid segment">
        <div class="two fields">
          <div class="field">
            <label>First Name</label>
            <input
              placeholder="First Name"
              type="text"
              onChange={(event) => {
                setF(event.target.value);
              }}
            />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              onChange={(event) => {
                setLast(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="field">
          <label>Email</label>
          <input
            placeholder="Email"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div class="field">
          <label>DOB</label>
          <input
            placeholder="2002-4-15"
            type="text"
            onChange={(event) => {
              setB(event.target.value);
            }}
          />
        </div>
        {/* <div class="field">
                            <label>Gender</label>
                            <input placeholder="Female" type="text" />
                        </div> */}
        <div class="field">
          <label>Phone Number</label>
          <input
            placeholder="1234567890"
            type="text"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div class="field">
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => {
              setPass(event.target.value);
            }}
          />
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
          addUser
          
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
          Back
        </div>
      </form>
      <div class="ui bottom attached warning message">
        <i class="icon help"></i>
        Already have an account with us?{" "}
        <a href="#">
          <Link to="../login">Login here</Link>
        </a>{" "}
        instead.
      </div>
      <div class="ui bottom attached warning message">
            <i class="icon help"></i>
            <a href="#"><Link to="/User/forgotpwd">Forgot Password?</Link></a> Click here to reset your password.
        </div>
    </div>
  );
}
