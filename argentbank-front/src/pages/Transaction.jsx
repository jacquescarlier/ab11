import { transactionsData } from "../data/data"
import Account from "../components/accountCard/Account";
import Header from "../containers/nav/Nav";
import { useLocation } from 'react-router-dom';
import "../css/transactions.css"
import TransactionsDetails from "../components/transactionDetails/TransactionDetails";

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
                
                {transactionsData.map((transaction) => (
              <TransactionsDetails
                key={transaction.date}
                date={transaction.date}
                description={transaction.description}
                amount={transaction.amount}
                balance={transaction.balance}
                
              />
            ))}
            </main>

        </>
    );
}