import React, { useEffect } from 'react';
import { IoStarOutline } from 'react-icons/io5';
import Doctordata from './data/DoctorsData';

const Doctors = () => {
  return (
    <div className='container' id='doctors'>
      <h1>Doctors in Pakistan</h1>
      <div className='card-container'>
        {Doctordata.map((doctor) => (
          <div className='doctor-card' key={doctor.id}>
            <div className='doctor-info'>
              <h2>{doctor.name}</h2>
              <h3>{doctor.title}</h3>
              <h3>{doctor.experience} years experience</h3>
            </div>
            <div className='review-price-container'>
              <div className='review'>
                <IoStarOutline className='star' />
                {doctor.review}
              </div>
              <div className='price'>
                <p>Rs. {doctor.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
