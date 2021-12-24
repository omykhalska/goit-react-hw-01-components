import { Container } from './App.styled';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendsList/FriendsList';
import TransactionHistory from '../TransactionsHistory/TransactionHistory';

import user from '../../data/user.json';
import stats from '../../data/stats.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
