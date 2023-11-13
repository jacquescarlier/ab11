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

  export const cookieCreator = (cookieName, cookieValue, minutesToExpire) => {
    let date = new Date();
    date.setTime(date.getTime() + minutesToExpire * 1000);
    document.cookie =
      cookieName + " = " + cookieValue + "; expires = " + date.toGMTString();
  };
  
  export const getCookie = (name) => {
    let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : "";
  };