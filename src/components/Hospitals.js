import React, { useState, useEffect } from 'react';
import { BsBuildings } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import data from '../components/data/HospitalsData';

const Hospitals = () => {
  const placeholders = [
    'Search for doctors',
    'Search for patients',
    'Search for hospitals',
  ];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState(data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex(
        (prevIndex) => (prevIndex + 1) % placeholders.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const filtered = data.filter((hospital) =>
      hospital.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredHospitals(filtered);
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='container' id='hospitals'>
      <input
        type='text'
        placeholder={placeholders[currentPlaceholderIndex]}
        value={searchValue}
        onChange={handleInputChange}
      />
      <h1>Hospitals in Pakistan</h1>
      <div className='card-container'>
        {filteredHospitals.map((hospital) => (
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
