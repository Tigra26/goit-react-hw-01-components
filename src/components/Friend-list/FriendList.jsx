import propTypes from 'prop-types'
import s from './friendList.module.css';
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

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
          avatar: propTypes.string.isRequired,
          name: propTypes.string.isRequired,
          isOnline: propTypes.bool.isRequired,
          id: propTypes.number.isRequired,
        }).isRequired,
      ).isRequired,
};

export default FriendList