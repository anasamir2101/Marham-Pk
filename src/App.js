import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HospitalsData from './components/data/HospitalsData';
import DoctorsData from './components/data/DoctorsData';
import Doctors from './components/Doctors';
import Hospitals from './components/Hospitals';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Doctor from './components/Doctor';

function App() {
  const [searchArray, setSearchArray] = useState(DoctorsData);
  const [searchHospital, setSearhHospital] = useState(HospitalsData);

  const getArrayData = (data) => {
    setSearchArray(data);
  };

  const getHospitalData = (data1) => {
    setSearhHospital(data1);
  };

  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path='/doctors/:personId' element={<Doctor />} />
          <Route
            path='/'
            element={
              <>
                <Search
                  doctors={DoctorsData}
                  hospitals={HospitalsData}
                  Search={(data) => getArrayData(data)}
                  SearchHospital={(data1) => getHospitalData(data1)}
                />

                <Doctors doctors={searchArray} />

                <Hospitals hospitals={searchHospital} />
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
