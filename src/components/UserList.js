import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import User from './User';

function UserList({ users }) {
  const colors = [
    'rebeccapurple',
    'teal',
    'royalblue',
    'darkslateblue',
    'Sienna',
  ];

  if (!users || users.length === 0) {
    return <p>No Users Found</p>;
  }

  return (
    <div className='user-list'>
      <AnimatePresence>
        {users.map(user => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='user'
          >
            <User user={user} bgColor={colors[user.id - 1]} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ),
};

export default UserList;
