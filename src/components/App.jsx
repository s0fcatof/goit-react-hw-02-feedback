import React, { Component } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  countTotalFeedback = () => {
    let total = 0;
    for (const key in this.state) {
      total += this.state[key];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      +((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) || 0
    );
  };

  options = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };

  onLeaveFeedback = option => {
    switch (option) {
      case this.options.good:
        this.setState({
          ...this.state,
          good: this.state.good + 1,
        });
        break;
      case this.options.neutral:
        this.setState({
          ...this.state,
          neutral: this.state.neutral + 1,
        });
        break;
      case this.options.bad:
        this.setState({
          ...this.state,
          bad: this.state.bad + 1,
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <div>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={this.options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </div>
      </div>
    );
  }
}
