import { Link } from "react-router-dom";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import "./nav.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
/*import { logout } from "../../redux/reducers/ApiUser"*/
const Header=()=> {

  const dispatch = useDispatch()
  const userName = useSelector(state => state.user.user.userName)
  const status = useSelector(state => state.user.status)
  const navigate = useNavigate()

  const handleSignOut = (e) => {
      e.preventDefault()
      dispatch({type: 'LOGOUT'});
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
      {status === "unsuccess" &&
      <div>
        <Link to="/sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div> }
      {status === "success" && (
                <div className='navbar_loginSuccess'>
                    <Link className="main-nav-item" to="/user" >
                    <i className="fa fa-user-circle"></i>
                    <span className="userNameCircle">{ userName }</span>
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

export default Header;