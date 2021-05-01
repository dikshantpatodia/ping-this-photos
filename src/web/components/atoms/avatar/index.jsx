/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { AvatarContainer } from './styles';

function getInitials(fullName) {
  let initials;
  const fullNameSplitted = fullName.split(' ');

  if (fullNameSplitted.length >= 2) {
    initials = fullNameSplitted[0].charAt(0) + fullNameSplitted[1].charAt(0);
  } else {
    initials = fullNameSplitted[0].charAt(0);
  }
  return initials;
}

const Avatar = ({
  fullName = '',
  size = 'md',
}) => {
  const initials = getInitials(fullName);

  return <AvatarContainer size={size}>{initials}</AvatarContainer>;
};

Avatar.propTypes = {
  fullName: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Avatar;
