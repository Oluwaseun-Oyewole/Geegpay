// import CryptoJS from "crypto-js";
import { keyConstants } from "./keyConstants";

export const encrypt = (secret: string, value: string) => {
  return CryptoJS.AES.encrypt(value, secret).toString();
};

export const handleLogout = () => {
  localStorage.removeItem(keyConstants.EXPIRY_TOKEN_TIME);
  localStorage.removeItem(keyConstants.AUTH_TOKEN);
  window.location.href = window.location.origin + "/auth/login";
};
