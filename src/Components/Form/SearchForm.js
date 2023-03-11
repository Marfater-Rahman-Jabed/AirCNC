import React, { useState } from 'react'
import { CalendarIcon } from '@heroicons/react/20/solid'
import DatePicker from 'react-datepicker'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
    const [location, setLocation] = useState('Dhaka');
    const [arrivalDate, setArrivalDate] = useState(new Date())
    const [departureDate, setDepartureDate] = useState(new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000));
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = {
            location: location,
            from: arrivalDate,
            to: departureDate
        }
        navigate('/search-result', { state: query })
        console.log(location, arrivalDate, departureDate);

    }
    return (
        <div className='w-full max-w-sm p-6 m-auto mx-auto'>
            <h1 className='text-xl font-semibold text-gray-700'>
                Where do you want to go
            </h1>

            <form className='mt-6' onSubmit={handleSubmit}>
                <div className='shadow-md rounded-md my-2 p-3'>
                    <label
                        htmlFor='location'
                        className='block text-md font-bold text-gray-800'
                    >
                        Location
                    </label>
                    <input
                        defaultValue={location}
                        onBlur={(event) => setLocation(event.target.value)}
                        type='text'
                        name='location'
                        required
                        placeholder='Add city, Landmark or address'
                        className='block w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>

                <div className='flex justify-between'>
                    <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                        <div>
                            <p className='block text-sm text-gray-500'>Arrival</p>
                            <DatePicker selected={arrivalDate} onChange={(Date) => setArrivalDate(Date)} className='w-2/3' />
                        </div>

                        <CalendarIcon className='h5 w-5' />
                    </div>
                    <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                        <div>
                            <p className='block text-sm text-gray-500'>Departure</p>
                            <DatePicker selected={departureDate} onChange={(Date) => setDepartureDate(Date)} className='w-2/3' />
                        </div>

                        <CalendarIcon className='h5 w-5' />
                    </div>
                </div>

                <div className='mt-6'>
                    <Button
                        type='submit'
                        classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
                    >
                        Search
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm