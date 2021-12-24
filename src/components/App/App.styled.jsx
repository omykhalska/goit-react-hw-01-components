import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(7)};

  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: ${props => props.theme.spacing(7)};
`;
