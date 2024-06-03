import React from "react";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";


const Home : React.FC = () => {
  return (
    <div>
      <Title size="large" color="primary">Welcome to the Bookstore</Title>
      <Button size="large" scheme="primary" disabled={false} isLoading={false}>Get Started</Button>
      <InputText placeholder="Search for books" />
    </div>
  );
};

export default Home;