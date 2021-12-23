// это ГЛАВНЫЙ КОМПОНЕНТ приложения

import Profile from '../Profile/Profile'; // импортирум компонент и его пропсы
import Statistics from '../Statistics/Statistics';
import user from '../../data/user.json'; // сюда нужно импортировать данные для рендера (пропсы)
import stats from '../../data/stats.json';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
    </Container>
  );
}
