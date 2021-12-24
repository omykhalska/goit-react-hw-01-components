import PropTypes from 'prop-types';
import {
  TransactionWrapper,
  TransactionCell,
} from './TransactionHistoryRow.styled';

export default function TransactionHistoryRow({ id, type, amount, currency }) {
  return (
    <TransactionWrapper key={id}>
      <TransactionCell column="type">{type}</TransactionCell>
      <TransactionCell column="amount">{amount}</TransactionCell>
      <TransactionCell column="currency">{currency}</TransactionCell>
    </TransactionWrapper>
  );
}

TransactionHistoryRow.propTypes = PropTypes.object.isRequired;
