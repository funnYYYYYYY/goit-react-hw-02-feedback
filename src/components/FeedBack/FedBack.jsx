import React, { Component } from 'react';
import { Button, Title, Container, Box, Response } from './FedBack.styled';

class FedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
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
        <Title>Please leave FedBack</Title>
        <Container>
          <Button onClick={this.handleClickGood}>Good</Button>
          <Button onClick={this.handleClickNeutral}>Neutral</Button>
          <Button onClick={this.handleClickBad}>Bad</Button>
        </Container>

        <div>
          <Title>Statistics</Title>
          <Response>Good: {this.state.good}</Response>
          <Response>Neutral: {this.state.neutral}</Response>
          <Response>Bad: {this.state.bad}</Response>
        </div>

        <div>
          <Response>Total: {this.countTotalFeedback()}</Response>
          <Response>
            Positive feedback:{this.countPositiveFeedbackPercentage() || 0} %
          </Response>
        </div>
      </Box>
    );
  }
}

export { FedBack };
