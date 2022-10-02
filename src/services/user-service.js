import { myAxios } from "./helper";


export const signUp=(user)=>{
    return myAxios
    .post("/api/auth/signup",user)
    .then((response)=>response.data())
};

export const loginUser=(loginDetail)=>{
    return myAxios.post('/api/auth/signin',loginDetail).then((response)=>response.data)
}



