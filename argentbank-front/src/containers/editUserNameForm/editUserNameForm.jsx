import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserName } from "../../api/ApiUser";
import Button from "../../components/button/button"
import InputForm from "../../components/input/InputForm"
import LabelForm from "../../components/label/LabelForm"
import "./editUserNameForm.css"

export default function EditUserNameForm() {
  const dispatch = useDispatch();
  const { userName, firstName, lastName, token } = useSelector(state => state.user.user)
  const [isToggle, setIsToggle] = useState(false);
  const [inputUserName, setInputUserName] = useState("");
  // function for edit, save and cancel button
  const toggleForm = () => {
    setIsToggle((current) => !current);
  };

  useEffect(() => {
    setInputUserName(userName);
  }, [userName]);

  return (
    <div className="userEdit">
      {!isToggle && (
        <>
          <h2 className="userEditTitle">
            Welcome back
            <br />
            {firstName} {lastName} !
          </h2>
          <Button
            classButton="editUserNameButton editButton"
            type="onClick"
            title="Edit Name"
            onClick={toggleForm}
          />
        </>
      )}
      {isToggle && (
        <>
          <h2 className="userEditTitle">
            Edit user info
          </h2>
          <div className="userName">
            <form
              className="userNameForm"
              id="userNameEdit"
            >
              <div className="userInput">
                <div className="userNameInput">
                  <LabelForm
                    labelTitle="User name: "
                    htmlFor="userName"
                    labelClass="labelFormSignin"
                  />
                  <InputForm
                    divClassName="userNameInput"
                    name="userName"
                    type="text"
                    inputId="userName"
                    onChange={(e) => setInputUserName(e.target.value)}
                    value={inputUserName}
                  />
                </div>
                <div className="userNameInput">
                  <LabelForm
                    htmlFor="firstName"
                    labelClass="labelFormSignin"
                    labelTitle="First name: "
                  />
                  <InputForm
                    divClassName="userNameInput"
                    name="firstName"
                    type="text"
                    inputId="firstName"
                    onChange={(e) => e.preventDefault()}
                    value={firstName}
                    disabled="disabled"
                  />
                </div>
                <div className="userNameInput">
                  <LabelForm
                    htmlFor="lastName"
                    labelClass="labelFormSignin"
                    labelTitle="Last name: "
                  />
                  <InputForm
                    divClassName="userNameInput"
                    name="lastName"
                    type="text"
                    inputId="lastName"
                    onChange={(e) => e.preventDefault()}
                    value={lastName}
                    disabled="disabled"
                  />
                </div>
              </div>
              <div className="userNameButton">
                <Button
                  classButton="editUserNameButton"
                  type="onClick"
                  title="Save"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(editUserName({ userName: inputUserName, token: token }));
                    toggleForm();
                  }}
                />
                <Button
                  classButton="editUserNameButton"
                  type= "onClick"
                  title="Cancel"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleForm();
                  }}
                />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
