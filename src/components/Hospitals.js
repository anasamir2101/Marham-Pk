import React, { useState, useEffect } from 'react';
import { BsBuildings } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

const Hospitals = ({ hospitals }) => {
  return (
    <div className='container' id='hospitals'>
      <h1>Hospitals in Pakistan</h1>
      <div className='card-container'>
        {hospitals.map((hospital) => (
          <div className='hospital-card' key={hospital.id}>
            <div className='hospital-name'>
              <BsBuildings className='icon' />
              <h1>{hospital.name}</h1>
            </div>
            <div className='hospital-location'>
              <FaLocationDot className='icon' />
              <p>{hospital.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
