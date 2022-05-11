import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import service from '../../assets/service.jpg';
import beauty from '../../assets/beauty.jpg';
import me from '../../assets/noelia.png';

function Contact(props) {
	return (
		<div className='information'>
			<Link className='link' to='/gallery'>
				<p className='boxes'>Gallery</p>
			</Link>
			<Link className='link' to='/about'>
				<p className='boxes'>Me</p>
			</Link>
			<Link className='link' to='/services'>
				<p className='boxes'>Services</p>
			</Link>
		</div>
	);
}

<li>Gallery</li>;

export default Contact;
