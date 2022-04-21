
import React from 'react';
import { Button } from "@veneer/core";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;

  .btn {
    position: absolute;
    top: 45%;
    left: 45%;
  }
`;

const AuthSignIn = () => {
  const navigate = useNavigate();

  const btnClick = () => {
    navigate("/plans")
  };

  return (
    <Wrapper>
      <Button className='btn' onClick={btnClick}>Sign in with HP Account</Button>
    </Wrapper>
  );
}

export default AuthSignIn;
