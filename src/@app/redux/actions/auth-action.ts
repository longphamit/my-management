import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfoService, loginService } from "../../services/auth-service";

export const loginAction = createAsyncThunk(
    "user/login",
    async (arg: { email: string; password: string }) => {
      const { email, password } = arg;
      const result = await loginService(email,password);
      return result;
    }
);
export const getUserInfoAction=createAsyncThunk(
    "user/info",
    async (arg:{email:string})=>{
        const {email}=arg;
        const result=await getUserInfoService(email);
        return result;
    }
)