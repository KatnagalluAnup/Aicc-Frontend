import React from 'react';
import { Button } from "@veneer/core";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;

  .btn {
    position: absolute;
    top: 45%;
    left: 45%;
  }
`;

function SampleComponent() {
  const navigate = useNavigate();

  const btnClick = () => {
    navigate("/page2")
  }
  return (
    <Wrapper>
      <Button className='btn' onClick={btnClick}>Go to Page 2</Button>
    </Wrapper>
  );
}

export default SampleComponent;
