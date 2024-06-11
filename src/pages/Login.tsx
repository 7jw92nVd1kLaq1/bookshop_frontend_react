import styled from "styled-components";
import { useForm } from "react-hook-form";
import InputText from "../components/common/InputText";
import useAuth from "../hooks/useAuth";


export interface LoginFormProps {
  email: string;
  password: string;
}

const Login = () => {
  const { userLogin, error } = useAuth();
  const { handleSubmit, register } = useForm<LoginFormProps>();

  return (
    <LoginStyle>
        <form onSubmit={handleSubmit(userLogin)}>
            <InputText placeholder="Email" inputType="text" {...register("email")} />
            <InputText placeholder="Password" inputType="password" {...register("password")} />
            <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
    </LoginStyle>
  );
};


const LoginStyle = styled.div`
  padding: ${props => props.theme.layout.medium.padding};
  background-color: ${props => props.theme.color.background};
  border-radius: 0.25rem;
`;

export default Login;