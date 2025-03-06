import React from 'react';
import styled from 'styled-components';
import Navbar from '/components/navbar';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';

import Autocomplete from "react-google-autocomplete";

import { useState } from 'react';

import Head from 'next/head';
import { useRef } from 'react';
import { useEffect } from 'react';


const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  background: var(--background);
`;

const MapContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  filter: brightness(0.5);
`;

const SellPage = () => {

  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  
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
        <h1>Rent a Spot</h1>
        <h6>Sell your own parking spot to other users</h6>

        <br></br>
        <br></br>

        <div id="dates">
          <h5>Start Date:</h5>
          <div id="start_date">
            <DatePicker
              selectsStart
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
            />
          </div>
          
          <br></br>
          <br></br>

          <h5>End Date:</h5>
          <div id="end_date">
            <DatePicker
              selectsEnd
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              endDate={endDate}
              startDate={startDate}
              minDate={startDate}
            />
          </div>
        </div>

        <br></br>
        <br></br>

        <div id="start_time">
          <h5>Select Daily Start Time</h5>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Select Start Time"
              value={selectedTime}
              onChange={(newTime) => setSelectedTime(newTime)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <br></br>

        <div id="end_time">
        <h5>Select Daily End Time</h5>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Select Start Time"
              value={selectedTime}
              onChange={(newTime) => setSelectedTime(newTime)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <div id="durations">
          <br></br>
          <br></br>
          <h5>Minimum Duration to Park:</h5>
          <input type="text" id="minimum_text_field"></input> 
        </div>

        <br></br>
        <br></br>

        <h5>Enter Description:</h5>
        <div id="description">
          <input type="text" id="desc"></input>
        </div>

        <br></br>
        <br></br>

        <div id="select_location">

          <h5>Location:</h5>
            <div id="map_view">
              <br></br>
              <h5>Select from Map View:</h5>
              <MapContainer id="map" />
            </div>

            <div id="type_address">
              <br></br>
              <h5>OR</h5>
              <br></br>
              <h5>Type Address:</h5>
              <input type="text" id="address"></input>
            </div>

        </div>

        <br></br>
        <br></br>

        <div id="post_photo">
          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="Preview" style={{ width: '200px' }} />}
          </div>
        </div>

        <br></br>
        <br></br>

        <button id="submit">Post Spot</button>

    </Container>
  );
};


export default SellPage;