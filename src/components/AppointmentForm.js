import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import moment from 'moment';

const AppointmentForm = ({ onBookAppointment, doctorName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    onBookAppointment({
      date: data.date,
      time: data.time,
      name: data.name,
      phoneNumber: data.phoneNumber,
    });

    alert(
      `Your appointment is booked for ${moment(data.date).format(
        'MMMM D, YYYY'
      )} at ${data.time} with ${doctorName}.`
    );

    reset();
  };

  return (
    <div className={`appointment-form ${errors.length ? 'error-mode' : ''}`}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`input-group`}>
          <input
            type='date'
            {...register('date', {
              required: 'Date is required',
              validate: (value) => {
                const selectedDate = moment(value);
                const today = moment().startOf('day');

                return selectedDate.isSameOrAfter(today);
              },
            })}
          />

          {errors.date && (
            <span className='inside-input'>{errors.date.message}</span>
          )}
        </div>

        <div className={`input-group `}>
          <input
            type='time'
            {...register('time', { required: 'Time is required' })}
          />
          {errors.time && (
            <span className='inside-input'>{errors.time.message}</span>
          )}
        </div>

        <div className={`input-group `}>
          <input
            type='text'
            {...register('name', { required: 'Name is required' })}
            placeholder='Add Patient Name'
          />
          {errors.name && (
            <span className='inside-input'>{errors.name.message}</span>
          )}
        </div>

        <div className={`input-group phone-input `}>
          <input
            type='tel'
            pattern='[0-9]{11}'
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{11}$/,
                message: 'Invalid phone number',
              },
            })}
            placeholder='Mobile Number'
          />
          {errors.phoneNumber && (
            <span className='inside-input'>{errors.phoneNumber.message}</span>
          )}
        </div>

        <div className='appointment-btn'>
          <button type='submit'>Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
