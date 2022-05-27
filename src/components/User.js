import PropTypes from 'prop-types';

function User({ user, bgColor, textColor }) {
  const { name, position, imageURL } = user;
  const userStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className='user'>
      <img
        className='user-avatar'
        src={imageURL}
        alt={name}
        style={{ borderColor: `${userStyles.backgroundColor}` }}
      />
      <div className='user-position' style={userStyles}>
        {position}
      </div>
    </div>
  );
}

User.defaultProps = {
  backgroundColor: '#000',
  textColor: '#fff',
};

User.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
  }),
};

export default User;
