import { transactionsData } from "../data/data"
import Account from "../components/accountCard/Account";
import Header from "../containers/nav/Nav";
import { useLocation } from 'react-router-dom';
import "../css/transactions.css"
export default function Transaction() {

    const location = useLocation();
    const { title, amount, description } = location.state || {};

    const buttonTitle =  "Go back to account";
    return (
        <>
            <Header />
            <main className="main bg-dark transactions-padding">

                <h2 className="sr-only">Accounts</h2>
                <Account
                    className="transactions-margin"
                    key={title}
                    title={title}
                    amount={amount}
                    description={description}
                    titleButton={buttonTitle}
                />
                <div className="details-account">
                    <span>Date</span>
                    <span>Description</span>
                    <span>Amount</span>
                    <span>Balance</span>
                    <span></span>
                </div>
            </main>

        </>
    );
}