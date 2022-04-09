import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom'

function Services(props) {
	return (
		<div className='page'>
			<div className='service-list'>
				<div className='service-item'>Hair Stydivng</div>
				<div className='service-item'>Hair Cutting</div>
				<div className='service-item'>Hair Coloring</div>
				<div className='service-item'>Make-up</div>
			</div>
		</div>
	);
}

export default Services;
