import localStore from "./localstore.util";
// import { updateHeaders } from "../services";
// import { removeUserInfo } from "./user.util";
// import { upda  teHeaders } from "../services";

export const getToken = () => localStore.get_data("token");

export const setToken = (token) => localStore.store_data("token", token);



export const getStoreToken = () => localStore.get_data("storeToken");

export const setStoreToken = (token) => localStore.store_data("storeToken", token);



export const setAuthForgetPassToken = (token) => localStore.store_data("Forgetpasstoken", token);

export const setPasswordReetToken= (token) => localStore.store_data("passwordResetToken", token);


export const getAdminToken = () => localStore.get_data("Admintoken");

export const getPasswordResetToken = () => localStore.get_data("passwordResetToken");

export const getForgetPassToken = () => localStore.get_data("Forgetpasstoken");

export const setAdminToken = (token) => localStore.store_data("Admintoken", token);



// export const getCategories = () => localStore.get_data("categories");

// export const setCategories = categories =>
//   localStore.store_data("categories", categories);

export const logout = () => {
  // updateHeaders();
  // localStore.remove_data("token");
  localStore.remove_all();
  return true;
};

export const isLoggedIn = () => {
  const token = getToken();
  return !!token;
  // return Promise.resolve(response);
};
