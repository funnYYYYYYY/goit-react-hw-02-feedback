import { Title } from 'components/FeedBack/FedBack.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <div>{children}</div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
