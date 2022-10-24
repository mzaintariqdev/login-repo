import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [validUserName, setValidUserName] = useState(true);
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const Submit = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      if (userName.length > 5 && password.length > 5) {
        setValidPassword(true);
        setValidUserName(true);
        history.push("/home");
      } else {
        if (userName.length < 5) {
          setValidUserName(false);
        }
        if (password.length < 5) {
          setValidPassword(false);
        }
      }
    }, 5000);
  };

  return (
    <FormContainer>
      <Heading>Login Page</Heading>
      <InputWrap>
        <InputLabel>Username:</InputLabel>
        <InputFields
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        {!validUserName && (
          <ErrorStatement>Enter correct username</ErrorStatement>
        )}
      </InputWrap>
      <InputWrap>
        <InputLabel>Password:</InputLabel>
        <InputFields
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!validPassword && (
          <ErrorStatement>Enter correct password</ErrorStatement>
        )}
      </InputWrap>

      <SubmitButton onClick={Submit}>
        {loader ? "Loading..." : "Login"}
      </SubmitButton>
    </FormContainer>
  );
}

const InputLabel = styled.p``;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ErrorStatement = styled.p`
  margin-button: 8px;
  color: red;
`;
const Heading = styled.h1``;
const SubmitButton = styled.button`
  width: 120px;
  hight: 40px;
`;
const InputFields = styled.input`
  width: 350px;
  height: 40px;
  margin-bottom: 25px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 16rem;
  border: 1px solid black;
  border-radius: 8px;
`;

export default Form;
