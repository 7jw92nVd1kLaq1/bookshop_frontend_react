import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore";
import { login } from "../api/auth.api";
import { useState } from "react";

const useAuth = () => {
  const navigate = useNavigate();
  const { storeLogin } = useAuthStore();
  const [ error, setError ] = useState<string>("");

  const userLogin = (data: { email: string; password: string }) => {
    login(data).then((response: { token: string }) => {
      storeLogin(response.token);
      navigate("/");
    }).catch((error) => {
      console.log(error);
      setError("Login failed");
    });
  };

  return { userLogin, error };
};

export default useAuth;