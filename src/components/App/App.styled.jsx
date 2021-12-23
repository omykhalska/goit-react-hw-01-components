import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(6)};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: ${props => props.theme.spacing(6)};
`;
