import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogIn } from "../../api/ApiUser";
import Button from "../../components/button/button"
import "./form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const userId = useSelector((state) => state.user.user.userId);
 
  useEffect(() => {
    if (status === true) {
      navigate(`/profile/${userId}`)
    }
  })

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
      // error message
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
      <Button
        classButton="sign-in-button"
        title="Sign In"
        type="onClick"
        Click={(e) => {
          e.preventDefault();
          dispatch(userLogIn({ email: email, password: password }));
        }}
      />
    </form>
  );
}

export default Form;
