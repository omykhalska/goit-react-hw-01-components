import PropTypes from 'prop-types';
import {
  Container,
  DataBox,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatsLabel,
  StatsData,
  StatsBox,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Container>
      <DataBox>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </DataBox>

      <Stats>
        <StatsBox>
          <StatsLabel>Followers</StatsLabel>
          <StatsData>{followers.toLocaleString()}</StatsData>
        </StatsBox>
        <StatsBox>
          <StatsLabel>Views</StatsLabel>
          <StatsData>{views.toLocaleString()}</StatsData>
        </StatsBox>
        <StatsBox>
          <StatsLabel>Likes</StatsLabel>
          <StatsData>{likes.toLocaleString()}</StatsData>
        </StatsBox>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
