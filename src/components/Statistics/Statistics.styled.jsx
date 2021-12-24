import styled from '@emotion/styled';
import stats from '../../data/stats.json';
import { getRandomColor } from '../../utils/getRandomColor';

export const StatsSection = styled.section`
  min-width: 320px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.boxBorderRadius};
  overflow: hidden;
  transition: all ${props => props.theme.transition};
  background-color: ${props => props.theme.colors.primaryBgColor};

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const SectionTitle = styled.h2`
  padding: ${props => props.theme.spacing(5)}
    ${props => props.theme.spacing(10)};

  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;

  list-style: none;
`;

export const StatsItem = styled.li`
  padding: ${props => props.theme.spacing(2)};
  width: calc(100% / ${stats.length});
  min-width: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${getRandomColor};
`;

export const StatsLabel = styled.span`
  margin-bottom: ${props => props.theme.spacing(2)};

  color: ${props => props.theme.colors.primaryBgColor};
`;

export const StatsData = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.primaryBgColor};
`;
