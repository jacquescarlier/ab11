import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.webp";
import "./nav.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch()
  const userName = useSelector(state => state.user.user.userName)
  const token = useSelector(state => state.user.user.token)
  const navigate = useNavigate()

  const handleSignOut = (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem("token")
    sessionStorage.removeItem("token")
    navigate('/')
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!token  &&
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>}
      {token && (
        <div>
          <Link to="/profile/`{userId}`" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <span className="userNameCircle">{userName}</span>
          </Link>
          <Link
            className="main-nav-item"
            onClick={handleSignOut}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>)}
    </nav>
  );
}

export default Nav;
