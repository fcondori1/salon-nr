import React from 'react';
import './Footer.css';
import facebook from '../../assets/face_logo.png';
import instagram from '../../assets/insta_logo2.png';
import linkedin from '../../assets/linked_logo.png';

function Footer(props) {
	return (
		<div className='footer_logos'>
			<a
				href='https://www.facebook.com/noelia.romero.311'
				target='_blank'
				rel='noreferrer'
				className='space'>
				<img src={facebook} alt='facebook logo' className='logo'></img>
			</a>
			<a
				href='https://www.instagram.com/rjnbeauty/?utm_medium=copy_link'
				target='_blank'
				rel='noreferrer'
				className='space'>
				<img src={instagram} alt='instagram logo' className='logo'></img>
			</a>
			<a
				href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
				target='_blank'
				rel='noreferrer'
				className='space'>
				<img src={linkedin} alt='linkedin logo' className='logo'></img>
			</a>
		</div>
	);
}

export default Footer;
