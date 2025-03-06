import React from 'react';
import styled from 'styled-components';
import Navbar from '/components/navbar';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  background: var(--background);
`;

const FindPage = () => {
  return (
    <Container>
        <Navbar />
        <h1>FindPage</h1>
    </Container>
  );
};

export default FindPage;