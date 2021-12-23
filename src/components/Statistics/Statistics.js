import PropTypes from 'prop-types';
import {
  StatsSection,
  SectionTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsData,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatsSection>
      {title && <SectionTitle>{title}</SectionTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <StatsLabel>{label}</StatsLabel>
            <StatsData>{percentage}%</StatsData>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
