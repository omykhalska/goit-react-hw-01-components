// это ГЛАВНЫЙ КОМПОНЕНТ приложения
// 💡 Один компонент - один файл

import Profile from './components/Profile/Profile'; // импортирум компонент и его пропсы
import user from './data/user.json'; // сюда нужно импортировать данные для рендера (пропсы)

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}
