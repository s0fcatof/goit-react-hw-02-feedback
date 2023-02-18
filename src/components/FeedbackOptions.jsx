import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        {Object.keys(this.props.options).map(key => (
          <button
            key={key}
            onClick={() => this.props.onLeaveFeedback(this.props.options[key])}
          >
            {this.props.options[key]}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
