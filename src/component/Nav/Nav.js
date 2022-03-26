import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
	return (
		<nav>
			<ul className='navbar'>
				<Link className='link' to='/'>
					<li>Home</li>
				</Link>
				<Link className='link' to='/about'>
					<li>About</li>
				</Link>
				<Link className='link' to='/services'>
					<li>Services</li>
				</Link>
				<Link className='link' to='/gallery'>
					<li>Gallery</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
