// App.js
import React, { useState } from 'react';
import './App.css';
import HospitalsData from './components/data/HospitalsData';
import DoctorsData from './components/data/DoctorsData';
import Doctors from './components/Doctors';
import Hospitals from './components/Hospitals';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Navbar />
      <Search
        onSearchSelect={handleSearchSelect}
        doctors={DoctorsData}
        hospitals={HospitalsData}
      />
      {(selectedOption === '' || selectedOption === 'Doctors') && <Doctors />}
      {(selectedOption === '' || selectedOption === 'Hospitals') && (
        <Hospitals />
      )}
    </>
  );
}

export default App;
