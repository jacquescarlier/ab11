import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogIn } from "../../api/ApiUser";
import Button from "../../components/button/button"
import InputForm from "../../components/input/InputForm"
import LabelForm from "../../components/label/LabelForm"
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
      <div className="input-wrapper">
        <LabelForm
          labelTitle="Username"
          htmlFor="email"
        />
        <InputForm
          name="email"
          type="email"
          inputId="email"
          autocomplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <LabelForm
          labelTitle="Password"
          htmlFor="password"
        />
        <InputForm
          name="password"
          type="password"
          inputId="password"
          autocomplete="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {status === "error" && (
        <div className="errorMessage" id="errorText">
          {error}
        </div>
      )}
      <div className="input-remember">
        <InputForm
          name="remember-me"
          type="checkbox"
          inputId="remember-me"
        />
        <LabelForm
          labelTitle="Remember me"
          htmlFor="remember-me"
        />
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

/*
 { /*<InputForm
        divClassName="input-wrapper"
        htmlFor="password"
        labelTitle="Password"
        type="password"
        inputId="password"
        autocomplete="password"
        onChange={(e) => setPassword(e.target.value)}
/> 


      <InputForm 
        divClassName = "input-remember"
        htmlFor="remember-me"
        labelTitle="Remember me"
        type="checkbox"
        inputId="remember-me"
    /> 
       

*/