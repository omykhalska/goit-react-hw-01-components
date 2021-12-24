import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  min-width: 320px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${props => props.theme.spacing(3)};

  list-style: none;
  box-shadow: ${props => props.theme.boxShadow};
  transition: all ${props => props.theme.transition};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
