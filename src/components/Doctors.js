import React from 'react';
import { Link } from 'react-router-dom';
import { IoStarOutline } from 'react-icons/io5';

const Doctors = ({ doctors }) => {
  return (
    <div className='container' id='doctors'>
      <h1>Doctors in Pakistan</h1>

      <div className='card-container'>
        {doctors.map((doctor) => (
          <Link to={`/doctors/${doctor.id}`} key={doctor.id} className='Link'>
            <div className='doctor-card'>
              <div className='doctor-info'>
                <img
                  src={doctor.image}
                  className='doctor-img'
                  alt={doctor.name}
                />
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
