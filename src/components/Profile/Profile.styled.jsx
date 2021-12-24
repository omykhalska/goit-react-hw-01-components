import styled from '@emotion/styled';

export const Container = styled.div`
  min-width: 320px;
  border-radius: ${props => props.theme.boxBorderRadius};
  overflow: hidden;
  transition: all ${props => props.theme.transition};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export const DataBox = styled.div`
  padding: ${props => props.theme.spacing(5)}
    ${props => props.theme.spacing(10)};

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid ${props => props.theme.colors.borderColor};
  background-color: ${props => props.theme.colors.primaryBgColor};
`;

export const UserAvatar = styled.img`
  margin-bottom: ${props => props.theme.spacing(2)};
  width: 100px;
  border-radius: ${props => props.theme.imgBorderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const UserName = styled.p`
  margin: 0 0 ${props => props.theme.spacing(2)} 0;

  font-size: 1.25em;
  font-weight: 700;
  color: ${props => props.theme.colors.primaryTextColor};
`;

export const UserTag = styled.p`
  margin: 0 0 ${props => props.theme.spacing(2)} 0;

  color: ${props => props.theme.colors.secondaryTextColor};
`;

export const UserLocation = styled.p`
  color: ${props => props.theme.colors.secondaryTextColor};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondaryBgColor};
  list-style: none;
`;

export const StatsBox = styled.li`
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid ${props => props.theme.colors.borderColor};

  flex-basis: calc(100% / 3);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsLabel = styled.span`
  margin-bottom: ${props => props.theme.spacing(2)};

  color: ${props => props.theme.colors.secondaryTextColor};
`;

export const StatsData = styled.span`
  font-weight: 700;
  color: ${props => props.theme.colors.primaryTextColor};
`;
