import Profile from "./components/Profile/Profile";
import user from "./Json/user.json";
import FriendList from "./components/Friend-list/FriendList";
import friends from "./Json/friends.json";
import Statistics from "./components/Statistics/Statistics";
import statistics from './Json/data.json';
import TransactionHistory from "./components/Transaction/TransactionHistory";
import transaction from './Json/transactions.json';


function App() {
  return (<div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    <Statistics title='Statistics' statistics={statistics}/>  
    <FriendList friends={friends} />
    <TransactionHistory items={transaction}/>
    </div>
  );
}

export default App;
