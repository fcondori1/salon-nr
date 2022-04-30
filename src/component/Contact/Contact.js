import React from 'react';
import './Contact.css';
import service from '../../assets/service.jpg';
import beauty from '../../assets/beauty.jpg';
import me from '../../assets/noelia.png';

function Contact(props) {
    return (
			<div className='information'>
				<p className='boxes'>Gallery</p>
				<p className='boxes'>Me</p>
				<p className='boxes'>Services</p>
			</div>
		);
}

export default Contact;