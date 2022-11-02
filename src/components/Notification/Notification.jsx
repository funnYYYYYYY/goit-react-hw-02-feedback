import { Title } from 'components/FeedBack/FedBack.styled';

export const Notification = ({ message }) => {
  return <>{message && <Title>{message}</Title>}</>;
};
