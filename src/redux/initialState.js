const initialState = {
  user:{
    name: null,
    email: null,
  },  
  token: null,
  isLoggedIn: false,  
};

export const initialStateContacts = {
  contacts: [],  
  filter: '',
}

export const initialStateRoot ={
  isLoading: false,
  error: '',
}

export default initialState;
