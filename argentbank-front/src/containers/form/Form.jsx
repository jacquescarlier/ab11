import { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogIn } from "../../redux/reducers/ApiUser";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false)

  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (status === "success") {
    navigate("/useraccount");
  }
  if(rememberMe === true) {

  }
console.log("rememberMe", rememberMe)
  return (
    <form id="logIn">
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {status === "error" && (
        <div className="errorMessage" id="errorText">
          {error}
        </div>
      )}
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(!rememberMe)}
           />
        <label htmlFor="remember-me" className="labelCheckbox">Remember me</label>
      </div>
      <button

        className="sign-in-button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(userLogIn({ email: email, password: password }));
        }}
      >
        Sign In
      </button>
    </form>
  );
}

export default Form;
