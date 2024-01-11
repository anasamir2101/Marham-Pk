import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa6';
import SingleDoctor from './data/SingleDoctor';
import AppointmentForm from './AppointmentForm';

const Doctor = () => {
  const { personId } = useParams();
  const selectedPerson = SingleDoctor.find(
    (person) => person.id === parseInt(personId)
  );

  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  if (!selectedPerson) {
    return <p>Person not found</p>;
  }

  const handleBookAppointment = (appointmentDetails) => {
    console.log('Booking appointment:', appointmentDetails);
    setShowAppointmentForm(false);
  };

  return (
    <div>
      <div className='Doctor' key={selectedPerson.id}>
        <img src={selectedPerson.image} alt='' />
        <div>
          <h1>{selectedPerson.name}</h1>
          <h3>{selectedPerson.title}</h3>
          <p>{selectedPerson.degree}</p>
          <p>{selectedPerson.occupation}</p>
          <h3 className='doctor-review'>
            <FaThumbsUp /> {selectedPerson.review} Reviews
          </h3>
          <p>{selectedPerson.experience} Yrs Experience</p>
          <button
            className='consult-button'
            onClick={() => setShowAppointmentForm(true)}
          >
            Consult Online
          </button>
        </div>
      </div>
      {showAppointmentForm && (
        <AppointmentForm
          onBookAppointment={handleBookAppointment}
          doctorName={selectedPerson.name}
        />
      )}
    </div>
  );
};

export default Doctor;
