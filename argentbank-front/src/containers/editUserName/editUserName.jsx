import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserName } from "../../api/ApiUser";
import Button from "../../components/button/button"
import "./editUserName.css"
import "../../index.css"

export default function App() {
  const dispatch = useDispatch();
  const initialUserName = useSelector((state) => state.user.user.userName);
  const userFirstName = useSelector((state) => state.user.user.firstName);
  const userLastName = useSelector((state) => state.user.user.lastName);
  const token = useSelector((state) => state.user.user.token);

  const [isActive, setIsActive] = useState(false);
  const [titleText, setTitleText] = useState("Welcome back");
  const [exclamationPoint, setExclamationPoint] = useState("!");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);

  const handleClick = () => {
    setIsActive((current) => !current);
    setTitleText("Edit user info");
    setFirstName("");
    setLastName("");
    setExclamationPoint("");
  };

  const cancelClick = () => {
    setIsActive((current) => !current);
    setTitleText("Welcome back");
    setFirstName(userFirstName);
    setLastName(userLastName);
    setExclamationPoint("!");
  };

  useEffect(() => {
    setUserName(initialUserName);
  }, [initialUserName]);

  return (
    <div className="userEdit">
      <h2 className="userEdit_title">
        {titleText}
        <br />
        {firstName} {lastName} {exclamationPoint}
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="userName_input">
              <label htmlFor="firstName" className="labelFormSignin">First name: </label>
              <input
                type="text"
                id="firstName"
                value={userFirstName}
                onChange={(e) => e.preventDefault()}
                disabled
              />
            </div>
            <div className="userName_input">
              <label htmlFor="lastName" className="labelFormSignin">Last name: </label>
              <input
                type="text"
                id="lastName"
                value={userLastName}
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
              dispatch(editUserName({ userName: userName, token: token }));
              cancelClick();
            }}
            />
             <Button 
            classButton = "editUserNameButton"
            type= "onClick"
            title="Cancel"
            Click= {(e) => {
              e.preventDefault();
              cancelClick();
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
