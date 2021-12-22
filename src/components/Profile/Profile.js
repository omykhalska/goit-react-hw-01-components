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

export default function Profile({ username, tag, location, avatar, stats }) {
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
          <StatsData>{stats.followers.toLocaleString()}</StatsData>
        </StatsBox>
        <StatsBox>
          <StatsLabel>Views</StatsLabel>
          <StatsData>{stats.views.toLocaleString()}</StatsData>
        </StatsBox>
        <StatsBox>
          <StatsLabel>Likes</StatsLabel>
          <StatsData>{stats.likes.toLocaleString()}</StatsData>
        </StatsBox>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
