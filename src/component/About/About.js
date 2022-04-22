import React, { useState, useEffect } from 'react';
import noelia from '../../assets/noelia.png';
import './About.css';
import Loading from '../Loading/Loading';

function About(props) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

	return (
		<>
			{loading === false ? (
				<div className='page'>
					<h2>Noelia Rosales</h2>
					<img src={noelia} alt='noelia profile pic' className='profile'></img>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
						similique voluptatum velit nihil harum iusto exercitationem quaerat,
						sed dicta. Accusamus autem modi corrupti, reiciendis enim dolore
						nihil eaque. Repudiandae, expedita!
					</p>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default About;
