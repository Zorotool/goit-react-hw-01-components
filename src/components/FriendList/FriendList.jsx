import PropTypes from 'prop-types';
import s from './friendList.module.css';
import FriendListItem from './FriendListItem';


const FriendList = ({friends}) => {
    return (
    <ul className={s.container}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
