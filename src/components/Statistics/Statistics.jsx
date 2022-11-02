import { Response, Title } from 'components/FeedBack/FedBack.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <Response>Good: {good}</Response>
    <Response>Neutral: {neutral}</Response>
    <Response>Bad: {bad}</Response>

    <Response>Total: {total}</Response>
    <Response>Positive feedback:{positivePercentage || 0} %</Response>
  </div>
);

export { Statistics };
