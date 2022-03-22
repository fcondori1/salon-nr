import React from 'react';
import background1 from '../../assets/salon.jpg'

function Main(props) {
    return (
        <>
        <div>
            <h2>Hello from Main</h2>
            <img src={background1} alt='Salon with brushes' className='background1'></img>
        </div>
        </>
    );
}

export default Main;