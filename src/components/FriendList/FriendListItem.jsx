import PropTypes from 'prop-types';
import s from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        < li className={s.listItem}>
            {isOnline ?
                (<span className={s.online}>{isOnline}</span>) :
                (<span className={s.offline}>{isOnline}</span>
                )}
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>);
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem