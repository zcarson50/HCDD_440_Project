import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from '/components/navbar';

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  background: var(--background);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #007bff;
  margin-bottom: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  color: #555;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  
  &:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
`;

const AccountPage = () => {
  const router = useRouter();

  return (
    <Container>
        <Navbar />
      <Header>
        <Title>Account Details</Title>
      </Header>
      <Section>
        <SectionTitle>Personal Information</SectionTitle>
        <InfoRow>
          <Label>Name:</Label>
          <Value>John Doe</Value>
        </InfoRow>
        <InfoRow>
          <Label>Email:</Label>
          <Value>john.doe@example.com</Value>
        </InfoRow>
        <InfoRow>
          <Label>Phone:</Label>
          <Value>+1234567890</Value>
        </InfoRow>
      </Section>
      <Section>
        <SectionTitle>Account Settings</SectionTitle>
        <Button onClick={() => router.push('/map')}>Go to Map View</Button>
      </Section>
    </Container>
  );
};

export default AccountPage;
