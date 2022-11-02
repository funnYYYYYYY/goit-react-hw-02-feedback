import { Title } from 'components/FeedBack/FedBack.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <div>{children}</div>
    </>
  );
};
