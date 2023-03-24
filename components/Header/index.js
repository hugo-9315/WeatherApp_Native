import React from 'react';
import styled from 'styled-components';

const Index = () => {
  return (
    <>
      <Banner>
        <Title>Today's Weather</Title>
      </Banner>
    </>
  );
};

const Banner = styled.View`
  height: 100px;
  background-color: lightblue;
`;

const Title = styled.Text`
  margin-top: 50px;
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  color: white;
`;

export default Index;
