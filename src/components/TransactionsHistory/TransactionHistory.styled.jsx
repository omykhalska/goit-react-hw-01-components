import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
  border-radius: ${props => props.theme.boxBorderRadius};
  border-collapse: collapse;
  transition: all ${props => props.theme.transition};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const TableHeadRow = styled.tr`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.25em;
  color: ${props => props.theme.colors.primaryBgColor};
  background-color: ${props => props.theme.colors.irisBlue};
`;

export const TableColumnHeader = styled.th`
  min-width: 230px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: ${props => props.theme.spacing(2)};
`;
export const TransactionWrapper = styled.tr`
  font-size: 1em;
  color: ${props => props.theme.colors.secondaryTextColor};
  background-color: ${props => props.theme.colors.primaryBgColor};

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.secondaryBgColor};
  }
`;

export const TransactionCell = styled.td`
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: ${props => props.theme.spacing(2)};
  padding-left: ${({ theme, column }) => {
    return column === 'type' ? theme.spacing(24) : theme.spacing(2);
  }};

  text-align: ${({ column }) => {
    switch (column) {
      case 'type':
        return 'left';
      default:
        return 'center';
    }
  }};

  text-transform: ${({ column }) => {
    switch (column) {
      case 'type':
        return 'capitalize';
      case 'currency':
        return 'uppercase';
      default:
        return 'none';
    }
  }};
`;
