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
