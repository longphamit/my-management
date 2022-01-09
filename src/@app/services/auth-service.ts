import httpClient from "../utils/http-client";

export const loginService=async(email:string,password:string)=>{
    const response=await httpClient.post({
        url:"",
        data:{
            email,
            password
        },
    });
    return response.data;
};
export const getUserInfoService=async(email:string)=>{
    const response=await httpClient.get(
        {
            url:""
        }
    )
    return response.data;
}