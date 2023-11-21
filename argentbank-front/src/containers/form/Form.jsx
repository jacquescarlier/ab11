import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogIn } from "../../api/ApiUser";
import Button from "../../components/button/button"
import InputForm from "../../components/input/InputForm"
import "./form.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector(state => state.user)

  useEffect(() => {
    if (status === true) {
      navigate(`/accounts/`)
    }
  })

  return (
    <form id="logIn">
      <InputForm
        divClassName="input-wrapper"
        htmlFor="email"
        labelTitle="Email"
        type="email"
        inputId="email"
        autocomplete="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      { /*} <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
  </div> */ }
      <InputForm
        divClassName="input-wrapper"
        htmlFor="password"
        labelTitle="Password"
        type="password"
        inputId="password"
        autocomplete="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      { /*}  <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="password"
          onChange={(e) => setPassword(e.target.value)}
        />
</div> */ }
      {status === "error" && (
        <div className="errorMessage" id="errorText">
          {error}
        </div>
      )}
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
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

