import React, { useState } from 'react';

const SearchComponent = ({ doctors, hospitals, Search, SearchHospital }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    let value = event.target.value;
    setInputValue(value);

    const filteredDoctors = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(value.toLowerCase())
    );

    Search(filteredDoctors);
    const searchHospitalOf = filteredDoctors.map((doctor) => doctor.hospital);
    const uniqueHospitals = [...new Set(searchHospitalOf)];
    const filteredHospitals = hospitals.filter((hospital) =>
      uniqueHospitals.includes(hospital.name)
    );

    SearchHospital(filteredHospitals);
  };

  return (
    <>
      <div className='main-welcome'>
        <h1 className='welcome'>
          <span>G</span>
          Hello, Guests!
        </h1>
        <h1 className='best-doctor'>
          Find the Best Doctors and Hospitals Near You
        </h1>
      </div>

      <div className='main-search'>
        <input
          type='text'
          value={inputValue}
          placeholder={`Search by Doctors and Hospitals`}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SearchComponent;
