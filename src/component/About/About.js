import React from 'react';
import noelia from '../../assets/noelia.png';

function About(props) {
    return (
			<div>
				<h2>Hello from About</h2>
				<img src={noelia} alt='noelia profile pic' className='profile'></img>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
					similique voluptatum velit nihil harum iusto exercitationem quaerat,
					sed dicta. Accusamus autem modi corrupti, reiciendis enim dolore nihil
					eaque. Repudiandae, expedita!
				</p>
			</div>
		);
}

export default About;