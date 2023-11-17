import "../css/userAccount.css";
import Account from "../components/accountCard/Account";
import UserHeader from "../containers/nav/Nav";
import EditNameSection from "../containers/formEditUserName/formEditUserName";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { accountsData } from "../data/data"

export default function UserAccount() {
  const token = useSelector(state => state.user.user.token)

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
              />
            ))}
          </main>
        </div>
      </>
      )}
    </>
  );
}


