import React from 'react';
import background1 from '../../assets/salon.jpg';
import background2 from '../../assets/hair.jpg';
// import background3 from '../../assets/salon-tools.jpg';
import './Main.css';

function Main(props) {
	return (
		<>
			<div className='container'>
				<img
					src={background1}
					alt='Salon with brushes'
					className='background1'></img>
				<img
					src={background2}
					alt='Salon with brushes'
					className='background1'></img>
				{/* <img
					src={background3}
					alt='Salon with brushes'
					className='background1'></img> */}
			</div>
		</>
	);
}

export default Main;
