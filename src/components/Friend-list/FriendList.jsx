import s from './friendList.module.css'
import FriendListItem from "./FriendListItem";

function FriendList({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map(item => (
                <FriendListItem
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))}
        </ul>
    )
}

export default FriendList