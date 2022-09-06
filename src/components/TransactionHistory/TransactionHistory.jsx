import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.table}>
            <thead className={s.tableHead}>
                <tr>
                    <th className={s.thName}>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
    
            <tbody>
                {items.map(item => (
                        <tr className={s.tr} key={item.id}>
                        <td className={s.tdFirst}>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,}))
    
}
export default TransactionHistory