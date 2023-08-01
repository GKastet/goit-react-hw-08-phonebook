export const selectUserName = state => state.auth.user.name;
export const selectToken = state=>state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectContacts = state => state.contacts.contacts;
export const selectFiltered = state => state.contacts.filter;

export const selectIsLoading = state => state.root.isLoading;
export const selectError = state => state.root.error;