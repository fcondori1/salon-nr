import React, { useState, useEffect } from 'react';
// import background1 from '../../assets/salon.jpg';
import background2 from '../../assets/hair.jpg';
// import background3 from '../../assets/salon-tools.jpg';
import './Main.css';
import Contact from '../Contact/Contact';
import Loading from '../Loading/Loading';
import Slideshow from '../Slideshow/Slideshow';

function Main(props) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return (
		<>
			{loading === false ? (
				<div className='page'>
					<img
						src={background2}
						alt='Salon with brushes'
						className='background1'></img>
					<Slideshow />
					<Contact />
					{/* <img
						src={background1}
						alt='Salon with brushes'
						className='background1'></img> */}
					{/* <img
					src={background3}
					alt='Salon with brushes'
					className='background1'></img> */}
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Main;
