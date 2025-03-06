import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from '/components/navbar';
import Head from 'next/head';

const Container = styled.div`
  width: 100vw;
  margin: auto;
  background: var(--background);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;

  &:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
`;

const MapContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  filter: brightness(0.5);
`;

const MapViewPage = () => {
  const router = useRouter();
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      if (!mapRef.current) {
        mapRef.current = L.map('map').setView([40.795, -77.86], 16);
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapRef.current);
      }
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <Container>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" 
          crossOrigin=""
        />
        <script 
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" 
          crossOrigin=""
        ></script>
      </Head>
      <Navbar />
      <Header>
        <Title>Map View</Title>
        <Button onClick={() => router.push('/account')}>Go to Account</Button>
      </Header>
      <MapContainer id="map" />
    </Container>
  );
};

export default MapViewPage;
