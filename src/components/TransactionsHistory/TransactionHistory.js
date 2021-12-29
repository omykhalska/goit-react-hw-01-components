import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHeadRow,
  TableColumnHeader,
  TransactionWrapper,
  TransactionCell,
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
            <TransactionWrapper key={id}>
              <TransactionCell column="type">{type}</TransactionCell>
              <TransactionCell column="amount">{amount}</TransactionCell>
              <TransactionCell column="currency">{currency}</TransactionCell>
            </TransactionWrapper>
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
