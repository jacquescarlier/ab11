export default function TransactionsDetails({ date, description, amount, balance, arrow }) {
    return (
        <ul>
            <li>{date}</li>
            <li>{description}</li>
            <li>{amount}</li>
            <li>{balance}</li>
            <li>{arrow}</li>
        </ul>

    )
}