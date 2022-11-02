import React, { Component } from 'react';
import { Box } from './FedBack.styled';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions ';
import { Notification } from '../Notification/Notification';
import { Section } from 'components/Section/Section';

class FedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = options => {
    this.setState(prevState => {
      return { ...this.state, [options]: prevState[options] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const result = Number(
      this.state.good + this.state.neutral + this.state.bad
    );

    return Number(((this.state.good * 100) / result).toFixed(0));
  };

  render() {
    return (
      <Box>
        <Section title="Please leave FedBack">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={
                this.countPositiveFeedbackPercentage() || 0
                  ? this.countPositiveFeedbackPercentage()
                  : 0
              }
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Box>
    );
  }
}

export { FedBack };
