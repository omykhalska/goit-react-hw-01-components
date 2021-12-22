// это ГЛАВНЫЙ КОМПОНЕНТ приложения

import Profile from './components/Profile/Profile'; // импортирум компонент и его пропсы
import user from './data/user.json'; // сюда нужно импортировать данные для рендера (пропсы)

export default function App() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </>
  );
}
