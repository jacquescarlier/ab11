import "../css/userAccount.css";
import Account from "../components/accountCard/Account";
import UserHeader from "../containers/nav/Nav";
import EditNameSection from "../containers/formEditUserName/formEditUserName";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

const AccountsData = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

function User() {
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
            {AccountsData.map((account) => (
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

export default User;
