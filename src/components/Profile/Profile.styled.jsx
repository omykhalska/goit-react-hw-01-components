import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 10px auto;
  width: 320px;
  box-shadow: 4px 4px 8px 0 #6e7681;
  border-radius: 5px;
  overflow: hidden;
`;

export const DataBox = styled.div`
  padding: 20px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
`;

export const UserAvatar = styled.img`
  margin-bottom: 10px;

  display: block;
  width: 100px;
  border-radius: 50%;
  box-shadow: 4px 4px 8px 0 #6e7681;
`;

export const UserName = styled.p`
  margin: 0 0 10px 0;
  font-weight: 700;
  color: black;
`;

export const UserTag = styled.p`
  margin: 0 0 10px 0;
  color: #6e7681;
`;

export const UserLocation = styled.p`
  margin: 0;
  color: #6e7681;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;

  background-color: #f3f6f9;
  list-style: none;
`;

export const StatsBox = styled.li`
  padding: 10px;
  border: 1px solid #dee5ed;

  flex-basis: calc(100% / 3);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsLabel = styled.span`
  margin-bottom: 10px;
  color: #6e7681;
`;

export const StatsData = styled.span`
  font-weight: 700;
`;
