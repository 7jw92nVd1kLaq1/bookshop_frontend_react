import React from "react";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import { useAuthStore } from "../store/authStore";


const Home : React.FC = () => {
  const {isLoggedIn, token} = useAuthStore();
  return (
    <div>
      <Title size="large" color="primary">Welcome to the Bookstore</Title>
      <Button size="large" scheme="primary" disabled={false} isLoading={false}>Get Started</Button>
      <p>{isLoggedIn ? `Logged in with token: ${token}` : "Not logged in"}</p>
    </div>
  );
};

export default Home;