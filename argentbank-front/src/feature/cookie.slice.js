export const setTokenFromCookie = (user) => {
    return {
      type: "SET_TOKEN_FROM_COOKIE",
      email: action.payload.email,
      token: action.payload.token,
    };
  };
  
  export const setTokenEmpty = () => {
    return {
      type: "SET_TOKEN_EMPTY",
    };
  };