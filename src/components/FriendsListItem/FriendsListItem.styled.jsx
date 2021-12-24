import styled from '@emotion/styled';

export const FriendsListItem = styled.li`
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(3)};

  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing(2)};

  box-shadow: ${props => props.theme.boxShadow};
`;

export const FriendStatus = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: ${props => props.theme.imgBorderRadius};
  background-color: ${({ isOnline, theme }) => {
    switch (isOnline) {
      case true:
        return theme.colors.onlineColor;
      default:
        return theme.colors.offlineColor;
    }
  }};
`;

export const FriendAvatar = styled.img`
  border-radius: ${props => props.theme.boxBorderRadius};
`;

export const FriendName = styled.p`
  font-size: 1.25em;
  font-weight: 700;
  color: ${props => props.theme.colors.primaryTextColor};
`;
