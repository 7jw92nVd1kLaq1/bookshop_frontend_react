import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputText from "../components/common/InputText";
import { login } from "../api/auth.api";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";


export interface LoginFormProps {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginFormProps>();

  const { storeLogin, storeLogout } = useAuthStore();
  const onSubmit = (data: LoginFormProps) => {
    login(data).then((response: {token: string}) => {
        storeLogin(response.token);
        navigate("/");
    }).catch((error) => {
        console.log(error);
        alert("Login failed");
    });
  };

  useEffect(() => {
    storeLogout();
  }, []);

  return (
    <LoginStyle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputText placeholder="Email" inputType="text" {...register("email")} />
            <InputText placeholder="Password" inputType="password" {...register("password")} />
            <button type="submit">Login</button>
        </form>
    </LoginStyle>
  );
};


const LoginStyle = styled.div`
  padding: ${props => props.theme.layout.medium.padding};
  background-color: ${props => props.theme.color.background};
  border-radius: 0.25rem;
`;

export default Login;