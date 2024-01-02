import React, { useState, useEffect } from 'react';

const SearchComponent = ({ onSearchSelect, doctors, hospitals }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchPlaceholder, setSearchPlaceholder] = useState('Doctors');
  const [manualSelect, setManualSelect] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!manualSelect) {
        const placeholderOptions = ['Doctors', 'Hospitals'];

        setSearchPlaceholder((prevPlaceholder) => {
          const currentIndex = placeholderOptions.indexOf(prevPlaceholder);
          const nextIndex = (currentIndex + 1) % placeholderOptions.length;
          return placeholderOptions[nextIndex];
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [manualSelect]);

  const handleSelectChange = (event) => {
    const value = event.target.value;

    setSearchValue(value);

    if (!inputValue) {
      setSearchPlaceholder(value);
      setManualSelect(true);
    }

    setInputValue('');
    setSearchResult(null);

    setSelectedOption(value);
    onSearchSelect(value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    if (value && manualSelect) {
      setManualSelect(false);
    }

    if (selectedOption === 'Doctors') {
      const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResult(filteredDoctors);
    } else if (selectedOption === 'Hospitals') {
      const filteredHospitals = hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResult(filteredHospitals);
    }
  };

  return (
    <>
      <div className='main-welcome'>
        <h1 className='welcome'>
          <span>G</span>
          Hello, Guests!
        </h1>
        <h1 className='best-doctor'>Find the Best Doctor Near You</h1>
      </div>

      <div className='main-search'>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option></option>
          <option value='Doctors'>Doctors</option>
          <option value='Hospitals'>Hospitals</option>
        </select>

        <input
          type='text'
          value={inputValue}
          placeholder={inputValue ? '' : `Search by ${searchPlaceholder}`}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SearchComponent;
