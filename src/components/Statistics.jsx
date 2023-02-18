import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from './Notification';

export class Statistics extends Component {
  render() {
    return this.props.total > 0 ? (
      <div>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage}%</p>
      </div>
    ) : (
      <Notification message="There is no feedback" />
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
