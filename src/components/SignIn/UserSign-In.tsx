import React, { useState } from "react";
import { Button } from "@veneer/core";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../redux/actions/authActions";
import { http } from "../../http-service";

const Wrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 36%;
  border: 1px solid black;
  width: 20%;
  height: 50%;
  text-align: center;
  background-color: white;

  .btn {
    position: absolute;
    top: 80%;
    left: 10%;
    align-content: left;
  }
  h6,
  .subtitle-large {
    padding: 20% 10%;
    font-size: xxx-large;
  }
  .labEl {
    text-align: left;
    padding: 0% 10%;
    font-size: large;
    color: black;
  }
  input {
    width: 90%;
    height: 25%;
    margin-bottom: 5%;
    color: grey;
  }
`;

const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSignIn = (e: any) => {
    // http().post('/auth', userData)
    // .then((response)=> console.log(response))
    // .catch((err)=> console.log(err))
   authenticate(userData);
    // navigate("/plans");
  };

  return (
    <div>
      <Wrapper>
        <h6>Sign In</h6>
        <form className="labEl" onSubmit={handleSignIn}>
          <label htmlFor="email"> User email: </label>
          <br />
          <input
            type="email"
            v-model="userData.email"
            placeholder="aicc@hp.com"
            onChange={(event) =>
              setUserData({
                email: event.target.value,
                password: userData.password,
              })
            }
            value={userData.email}
            required
          />
          <br />
          <label htmlFor="password"> Password: </label>
          <br />
          <input
            type="password"
            placeholder=" "
            onChange={(event) => {
              console.log(userData);
              setUserData({
                email: userData.email,
                password: event.target.value,
              });
            }}
            value={userData.password}
          />
          <Button type="submit" className="btn">
            Sign In
          </Button>
        </form>
      </Wrapper>
    </div>
  );
};

export default SignIn;
