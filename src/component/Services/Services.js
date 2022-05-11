import React, { useState, useEffect } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import background1 from '../../assets/salon.jpg';

function Services(props) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	return (
		<>
			{loading === false ? (
				<div className='page'>
					<img
						src={background1}
						alt='Salon with brushes'
						className='background1'></img>
					<div className='service-list'>
						<div className='service-item'>Hair Styling</div>
						<div className='service-item'>Hair Cutting</div>
						<div className='service-item'>Hair Coloring</div>
						<div className='service-item'>Make-up</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Services;
