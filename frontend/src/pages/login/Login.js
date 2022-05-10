import React from "react";
import styled from "styled-components";
import useLoginScreen from "./useLoginScreen.js";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Username = styled.input`
  margin-bottom: 1rem;
`;

const Password = styled.input`
  margin-bottom: 1rem;
`;

const Button = styled.button``;

const Login = () => {
  const {
    handleEmailChange,
    emailError,
    handlePasswordChange,
    passwordError,
    handleAuthenticate,
  } = useLoginScreen();

  return (
    <Container>
      <Wrapper>
        <Username placeholder="email" onChange={handleEmailChange}></Username>
        <Password
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        ></Password>
        <Button
          onClick={handleAuthenticate}
          disabled={emailError || passwordError}
        >
          Add Prize To DB
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
