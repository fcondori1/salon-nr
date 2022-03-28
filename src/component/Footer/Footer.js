import React from 'react';
import './Footer.css';
import facebook from '../../assets/facebook_logo2.png';
import instagram from '../../assets/instagram_logo.png';
import linkedin from '../../assets/linkedin_logo2.png';

function Footer(props) {
	return (
		<div className='footer_logos'>
			<img src={facebook} alt='facebook logo' className='logo'></img>
			<img src={instagram} alt='instagram logo' className='logo'></img>
			<img src={linkedin} alt='linkedin logo' className='logo'></img>
		</div>
	);
}

export default Footer;
