import PropTypes from 'prop-types';
import {
  FriendsListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendsListItem.styled';

export default function FriendListItem({ avatar, id, isOnline, name }) {
  return (
    <FriendsListItem key={id}>
      <FriendStatus isOnline={isOnline}>&nbsp;</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendsListItem>
  );
}

FriendListItem.propTypes = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
