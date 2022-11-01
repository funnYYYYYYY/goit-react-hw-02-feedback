import styled from 'styled-components';

const Box = styled.div`
  width: 300px;
  height: 300px;
`;

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 20px;
  text-align: center;
  justify-content: center;

  padding: 3px;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`;

const Response = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export { Button, Title, Container, Box, Response };
