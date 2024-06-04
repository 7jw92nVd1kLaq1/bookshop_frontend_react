import { LoginFormProps } from "../pages/Login";
import { httpClient } from "./http";

interface LoginResponse {
    token: string;
}

export const login = async (data: LoginFormProps) => {
    const response = await httpClient.post("/login", data);
    return response.data as LoginResponse;
};

export const logout = async () => {
    const response = await httpClient.post("/logout");
    if (response.status === 200) {
        return true;
    }
    return false;
};

export const checkTokenValidity = async () => {
    const response = await httpClient.get("/check-token");
    if (response.status === 200) {
        return response.data as LoginResponse;
    }
    throw new Error("Token is not valid");
};