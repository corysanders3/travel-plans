import './Form.css';
import { useState, useRef } from 'react';
import { cities } from '../data/cities';

function Form() {
    const cityDropdown = useRef();

    const [cityInput, setCityInput] = useState('');
    const [travelersInput, setTravelersInput] = useState('');
    const [daysInput, setDaysInput] = useState('');
    const [typeInput, setTypeInput] = useState('');

    const citiesSelect = cities.map((city) => {
        return (
            <>
                <option value={city}>{city}</option>
            </>
        )
    })

    function checkInputs(e) {
        e.preventDefault()

        
    }

    return (
        <div className='form'>
            <form className='form-container'>
                <label htmlFor='destination' className='label'>
                    Where are we going? Select a destination!
                </label>
                <select name='destination' className='dropdown' ref={cityDropdown} onChange={e => setCityInput(e.target.value)}>
                    <option value={''}>Choose a city</option>
                    {citiesSelect}
                </select>
                <label htmlFor='travelers' className='label'>
                    How Many Travelers?
                </label>
                <select name='travelers' className='dropdown' onChange={e => setTravelersInput(e.target.value)}>
                    <option value={'0'}>0</option>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                    <option value={'6'}>6</option>
                    <option value={'7'}>7</option>
                    <option value={'7+'}>7+</option>
                </select>
                <label htmlFor='days' className='label'>
                    How Many Days Will You Be There?
                </label>
                <select name='days' className='dropdown' onChange={e => setDaysInput(e.target.value)}>
                    <option value={'0'}>0</option>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                    <option value={'6'}>6</option>
                    <option value={'7'}>7</option>
                    <option value={'7+'}>7+</option>
                </select>
                <label htmlFor='type' className='label'>
                    What Type Of Vacation Are You Looking For?
                </label>
                <select name='type' className='dropdown' onChange={e => setTypeInput(e.target.value)}>
                    <option value={''}>Choose a trip type</option>
                    <option value={'Tourist Sites'}>Tourist Sites</option>
                    <option value={'Mostly tourist sites with some relaxation'}>Mostly tourist sites with some relaxation</option>
                    <option value={'Mostly relaxation with some tourist sites'}>Mostly relaxation with some tourist sites</option>
                    <option value={'Relaxation'}>Relaxation</option>
                    <option value={'Local experience'}>Local experience</option>
                </select>
                <button className='form-button' onClick={e => checkInputs(e)}>Plan It!</button>
            </form>
        </div>
    )
}

export default Form;