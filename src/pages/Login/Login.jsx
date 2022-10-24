import styled from "styled-components";
import Form from "../../components/Form/Form";

function Login() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display: flex;
    flex: direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 100vh;`;

export default Login;
