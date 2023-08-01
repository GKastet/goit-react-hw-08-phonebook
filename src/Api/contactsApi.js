
import { instance } from './api';

// const enpointGet = '/contacts' //get contact
// const enpointPost = '/contacts' //post contact
// const enpointDelete = '/contacts/{contactId}' //delete contact
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



//================================================================
// export const getApiContact = async () =>{       
//     const {data} = await instance.get('/');
//     return data
// }

// export const postApiContact = async (contact) =>{
//     const {data} = await instance.post('/', contact);    
//     return data
// }

// export const deleteApiContact = async (id) =>{
//     const {data} = await instance.delete(`/${id}`);
//     return data
// }