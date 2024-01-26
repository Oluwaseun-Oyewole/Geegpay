// import CryptoJS from "crypto-js";
import { keyConstants } from "./keyConstants";

export const handleLogout = () => {
  localStorage.removeItem(keyConstants.EXPIRY_TOKEN_TIME);
  localStorage.removeItem(keyConstants.AUTH_TOKEN);
  window.location.href = window.location.origin + "/auth/login";
};

export const isAuthenticated = () => {
  const now = Date.now();
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  );
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME);
  const sessionIsValid = expireTime > now && !!token;
  return sessionIsValid;
};

export const isUnAuthenticated = () => {
  const now = Date.now();
  const expireTime = +(
    localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME) || 0
  );
  const token = localStorage.getItem(keyConstants.EXPIRY_TOKEN_TIME);
  const sessionIsInvalid = expireTime <= now || !token;
  return sessionIsInvalid;
};
