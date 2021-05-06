import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return(
    <h1 style={{color: 'pink', backgroundColor: 'black'}}>{title}</h1>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

// const headingStyle = {
//   color: "blue",
// }

export default Header;