import Form from "../containers/loginForm/LoginForm";
import Header from "../containers/nav/Nav";
import { useSelector } from "react-redux";
import "../css/signIn.css"

export default function SignIn() {
  const status  = useSelector(state => state.user.user.status)
 
  return (
    <>
    { !status && (
      <>
      <Header />
      <div className="form_container">
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <Form />
          </section>
        </main>
      </div>
      </>)}
    </>
  );
}

