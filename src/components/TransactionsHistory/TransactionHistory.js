import PropTypes from 'prop-types';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';
import {
  TransactionsTable,
  TableHeadRow,
  TableColumnHeader,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionsTable>
      <thead>
        <TableHeadRow>
          <TableColumnHeader>Type</TableColumnHeader>
          <TableColumnHeader>Amount</TableColumnHeader>
          <TableColumnHeader>Currency</TableColumnHeader>
        </TableHeadRow>
      </thead>

      <tbody>
        {items
          .sort((a, b) => a.type.localeCompare(b.type))
          .map(({ id, type, amount, currency }) => (
            <TransactionHistoryRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
      </tbody>
    </TransactionsTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
