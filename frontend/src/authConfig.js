export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_MSAL_CLIENT_ID, 
    authority: import.meta.env.VITE_MSAL_AUTHORITY + "/" + import.meta.env.VITE_MSAL_TENANT_ID,
    //authority: import.meta.env.VITE_MSAL_AUTHORITY + "/" + import.meta.env.VITE_MSAL_TENANT_ID + "/" + import.meta.env.VITE_MSAL_USER_FLOW,
    knownAuthorities: [import.meta.env.VITE_MSAL_KNOWN_AUTHORITIES],
    redirectUri: import.meta.env.VITE_MSAL_REDIRECT_URI,
  },
  cache: {
    cacheLocation: "sessionStorage", 
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "email"],
};