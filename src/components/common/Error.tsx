import styled from "styled-components";

const Error = () => {
  return (
    <ErrorStyle>
      <h1>Error</h1>
    </ErrorStyle>
  );
};

const ErrorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default Error;