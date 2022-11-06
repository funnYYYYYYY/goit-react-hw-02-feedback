import { Response } from 'components/FeedBack/FedBack.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Response>Good: {good}</Response>
    <Response>Neutral: {neutral}</Response>
    <Response>Bad: {bad}</Response>

    <Response>Total: {total}</Response>
    <Response>Positive feedback:{positivePercentage || 0} %</Response>
  </div>
);

Statistics.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export { Statistics };
