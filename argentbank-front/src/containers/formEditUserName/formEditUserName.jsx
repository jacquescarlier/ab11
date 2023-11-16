import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserName } from "../../api/ApiUser";
import Button from "../../components/button/button"
import "./formEditUserName.css"

export default function App () {
  const dispatch = useDispatch();
  const { userName, firstName, lastName, token } = useSelector(state => state.user.user)
  const [isActive, setIsActive] = useState(false);
  const [inputUserName, setUserName] = useState("");

  // function for edit, save and cancel button
  const saveUserCloseForm = () => {
    setIsActive((current) => !current);
  };

  useEffect(() => {
    setUserName(userName);
  }, [userName]);

  return (
    <div className="userEdit">
      {!isActive && (
        <>
          <h2 className="userEditTitle">
            Welcome back
            <br />
            {firstName} {lastName} !
          </h2>
        </>
      )}
      {isActive && (
        <>
          <h2 className="userEditTitle">
            Edit user info
          </h2>
        </>
      )}
      <div className="userName">
        <form
          className="userNameForm"
          id="userNameEdit"
          style={{ display: isActive ? "flex" : "none" }}
        >
          <div className="userInput">
            <div className="userNameInput">
              <label htmlFor="userName" className="labelFormSignin">User name: </label>
              <input
                type="text"
                id="userName"
                value={inputUserName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="userNameInput">
              <label htmlFor="firstName" className="labelFormSignin">First name: </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => e.preventDefault()}
                disabled
              />
            </div>
            <div className="userNameInput">
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
              classButton="editUserNameButton"
              type="onClick"
              title="Save"
              Click={(e) => {
                e.preventDefault();
                dispatch(editUserName({ userName: inputUserName, token: token }));
                saveUserCloseForm();
              }}
            />
            <Button
              classButton="editUserNameButton"
              type="onClick"
              title="Cancel"
              Click={(e) => {
                e.preventDefault();
                saveUserCloseForm();
              }}
            />
          </div>
        </form>
      </div>
      <Button
        classButton="editUserNameButton editButton"
        type="onClick"
        title="Edit Name"
        styleButton=
        {{ display: isActive ? "none" : "", }}

        Click={saveUserCloseForm}
      />
    </div>
  );
}
