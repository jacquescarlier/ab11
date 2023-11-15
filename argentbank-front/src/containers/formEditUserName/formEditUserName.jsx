import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserName } from "../../api/ApiUser";
import Button from "../../components/button/button"
import "./formEditUserName.css"

export default function App
() {
  const dispatch = useDispatch();

  const { userName, firstName, lastName, token } = useSelector(state => state.user.user)
//management of profile form inputs and the title
  const [isActive, setIsActive] = useState(false);
  const [titleText, setTitleText] = useState("Welcome back");
  const [exclamationPoint, setExclamationPoint] = useState("!");
  const [inputUserName, setUserName] = useState("");
  const [inputFirstName, setInputFirstName] = useState(firstName);
  const [inputLastName, setInputLastName] = useState(lastName);
//function foredit button
  const handleClick = () => {
    setIsActive((current) => !current);
    setTitleText("Edit user info");
    setInputFirstName("");
    setInputLastName("");
    setExclamationPoint("");
  };
  // function for save and cancel button
  const changeUserStateClick = () => {
    setIsActive((current) => !current);
    setTitleText("Welcome back");
    setInputFirstName(firstName);
    setInputLastName(lastName);
    setExclamationPoint("!");
  };

  useEffect(() => {
    setUserName(userName);
  }, [userName]);

  return (
    <div className="userEdit">
      <h2 className="userEdit_title">
        {titleText}
        <br />
        {inputFirstName} {inputLastName} {exclamationPoint}
      </h2>
      <div className="userName">
        <form
          className="userName_form"
          id="userNameEdit"
          style={{ display: isActive ? "flex" : "none" }}
        >
          <div className="user_input">
            <div className="userName_input">
              <label htmlFor="userName" className="labelFormSignin">User name: </label>
              <input
                type="text"
                id="userName"
                value={inputUserName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="userName_input">
              <label htmlFor="firstName" className="labelFormSignin">First name: </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => e.preventDefault()}
                disabled
              />
            </div>
            <div className="userName_input">
              <label htmlFor="lastName" className="labelFormSignin">Last name: </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => e.preventDefault()}
                disabled
              />
            </div>
          </div>
          <div className="userNameButton">
         
            <Button 
            classButton = "editUserNameButton"
            type= "onClick"
            title="Save"
            Click= {(e) => {
              e.preventDefault();
              dispatch(editUserName({ userName: inputUserName, token: token }));
              changeUserStateClick();
            }}
            />
             <Button 
            classButton = "editUserNameButton"
            type= "onClick"
            title="Cancel"
            Click= {(e) => {
              e.preventDefault();
              changeUserStateClick();
            }}
            />
          </div>
        </form>
      </div>
      <button
        className="editUserNameButton"
        style={{
          display: isActive ? "none" : "",
        }}
        onClick={handleClick}
      >
        Edit Name
      </button>
    </div>
  );
}
