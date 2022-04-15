import React from 'react';
import { Button } from "@veneer/core";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  background-color: pink;

  .btn {
    position: absolute;
    top: 45%;
    left: 45%;
  }
`;

function Page2Component() {
  const navigate = useNavigate();

  const btnClick = () => {
    navigate("/")
  };

  return (
    <Wrapper>
      <Button className='btn' onClick={btnClick}>Go to Page 1</Button>
    </Wrapper>
  );
}

export default Page2Component;
