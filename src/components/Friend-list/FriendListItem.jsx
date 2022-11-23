import propTypes from "prop-types"
import s from './friendListItem.module.css'

function FriendListItem({avatar, name, isOnline }) {
    return (
        <li className={s.item} >
            <span className={ isOnline ? s.online : s.offline}></span>
            <img src={avatar} alt={name} className={s.avatar} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default FriendListItem

FriendListItem.propTypes = {
    
          avatar: propTypes.string.isRequired,
          name: propTypes.string.isRequired,
          isOnline: propTypes.bool.isRequired,
        
};