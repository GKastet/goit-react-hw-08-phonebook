import { instance } from './api';

export const token ={
    set(token){
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        instance.defaults.headers.common.Authorization = '';
    }
}

export const registerRequest = async (userData) =>{
    const {data} = await instance.post('/users/signup', userData);
    token.set(data.token)
    return data
}
export const logInRequest = async (logInUserData) =>{
    const {data} = await instance.post('/users/login', logInUserData);
    token.set(data.token)
    return data
}

export const logOutRequest = async () =>{
    await instance.post('/users/logout');
    token.unset()    
}

export const currentUser = async () =>{
    const {data} = await instance.get('/users/current');
    return data    
}