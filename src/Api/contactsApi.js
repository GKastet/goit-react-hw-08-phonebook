import { instance } from './api';

export const getApiContact = async () =>{       
    const {data} = await instance.get('/contacts');
    return data
}

export const postApiContact = async (formData) =>{
    console.log(formData);
    const {data} = await instance.post('/contacts', formData);    
    return data
}

export const deleteApiContact = async (contactId) =>{
    const {data} = await instance.delete(`/contacts/${contactId}`);
    return data
}
