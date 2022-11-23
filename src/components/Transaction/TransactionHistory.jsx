import propTypes from "prop-types"
import s from './transactionHistory.module.css'

function TransactionHistory({items}) {
    return (
    <table className={s.transactionHistory}>
        <thead>
            <tr>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>CURRENCY</th>
            </tr>
        </thead>
            {items.map(item => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
               </tbody>
           ))} 
    </table>
)
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.string.isRequired,
          type: propTypes.string.isRequired,
          amount: propTypes.string.isRequired,
          currency: propTypes.string.isRequired,
        }),
      ).isRequired,
}