import "../css/userAccount.css";
import "../index.css"
import Account from "../components/accountCard/Account";
import UserHeader from "../containers/nav/Nav";
import EditNameSection from "../containers/editUserNameForm/editUserNameForm";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { accountsData } from "../data/data"

export default function UserAccount() {
  const token = useSelector(state => state.user.user.token)
  const isTransactionPage = true; // ou false, en fonction de la logique de votre application
  const buttonTitle = isTransactionPage ? "View transactions" : "Go back to account";

  return (
    <>
      {!token && (<Navigate to='Page404' replace={true} />)}
      {token && (<>
        <UserHeader />
        <div className="user_container">
          <main className="main bg-dark">
            <div className="header">
              <EditNameSection />
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountsData.map((account) => (
              <Account
                key={account.title}
                title={account.title}
                amount={account.amount}
                description={account.description}
                titleButton={buttonTitle}
              />
            ))}
          </main>
        </div>
      </>
      )}
    </>
  );
}


