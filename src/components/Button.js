import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  const { color } = props;
  const { wide } = props;
  const { bottomRightRadius } = props;
  const { bottomLeftRadius } = props;
  const styles = {
    flexBasis: wide ? '50%' : '25%',
    backgroundColor: color,
    borderBottomRightRadius: bottomRightRadius ? 10 : 0,
    borderBottomLeftRadius: bottomLeftRadius ? 10 : 0,
  };

  return (
    <div className="btn" style={styles}>
      {name}
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  bottomLeftRadius: PropTypes.bool,
  bottomRightRadius: PropTypes.bool,
};

Button.defaultProps = {
  color: '#fb8B24',
  wide: false,
  bottomLeftRadius: false,
  bottomRightRadius: false,
};

export default Button;
