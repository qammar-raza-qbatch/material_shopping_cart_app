import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const DynamicTitle = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  )
}

export default DynamicTitle;

DynamicTitle.propTypes = {
  children: PropTypes.node
}