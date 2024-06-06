import { checkingData, SavingData, creditCardData } from "../data/data"
import Account from "../components/accountCard/Account";
import Header from "../containers/nav/Nav";
import { useLocation } from 'react-router-dom';
import "../css/transactions.css"
import TransactionsDetails from "../components/transactionDetails/TransactionDetails";

export default function Transaction() {

    const location = useLocation();
    const { title, amount, description } = location.state || {};

    const tag = location.state.title
    console.log("title tag", tag)
    let transactions;
    if (tag === 'Argent Bank Checking (x8349)') {
        transactions = checkingData;
    } else if (tag === 'Argent Bank Savings (x6712)') {
        transactions = SavingData;
    } else if (tag === 'Argent Bank Credit Card (x8349)') {
        transactions = creditCardData;
    } else {
        transactions = []; // Si le tag n'est pas reconnu, définissez une liste vide ou une autre valeur par défaut
    }



    const buttonTitle = "Go back to account";
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

                {transactions.map((transaction) => (
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