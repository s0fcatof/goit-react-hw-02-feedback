import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
