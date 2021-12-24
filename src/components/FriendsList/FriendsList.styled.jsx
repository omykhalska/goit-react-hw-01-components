import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  min-width: 320px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${props => props.theme.spacing(3)};

  list-style: none;
  border: 1px solid ${props => props.theme.colors.borderColor};
  transition: ${props => props.theme.transition};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
