
import React from 'react';
import { Button } from "@veneer/core";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import authReducer from "../../redux/reducers/authReducer";

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

interface AuthState {
  authentication: typeof authReducer;
}

const AuthSignIn: React.FC = () => {
  const auth: any = useSelector((state: AuthState) => state.authentication);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const btnClick = (e: any) => {
    e.preventDefault();
    dispatch(authenticate(auth.token));
    const apiUrl = process.env.REACT_APP_PUBLIC_BACKEND_URL
    window.location.href = `${apiUrl}/auth?next=${window.location.origin}/auth/in?token=`
    auth.token && navigate("/plans")
  };

  return (
    <Wrapper>
      <Button className='btn' onClick={btnClick}>Sign in with HP Account</Button>
    </Wrapper>
  );
}

export default AuthSignIn;
