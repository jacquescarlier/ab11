import { checkingData, SavingData, creditCardData } from "../data/data"
import Account from "../components/accountCard/Account";
import Header from "../containers/nav/Nav";
import { useLocation } from 'react-router-dom';
import "../css/transactions.css"
import TransactionsDetails from "../components/transactionDetails/TransactionDetails";

export default function Transaction() {

    const location = useLocation();
    const { title, amount, description, id } = location.state || {};
    const tag = location.state?.id

    // Objet de correspondance pour les tags et les ensembles de données
    const dataMapping = {
        '0a0a0a': checkingData,
        '1b1b1b': SavingData,
        '2c2c2c': creditCardData
    };

    const transactions = dataMapping[tag] || [];
    // liste vide par défaut si le tag n'est pas reconnu
    const buttonTitle = "Go back to account";

    return (
        <>
            <Header />
            <main className="main bg-dark transactions-padding">
                <h2 className="sr-only">Accounts</h2>
                <Account
                    className="transactions-margin"
                    key={id}
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