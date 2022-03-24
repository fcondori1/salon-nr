import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(props) {
	return (
		<nav>
			<ul>
				<Link to='/'>
					<li>1st list</li>
				</Link>
				<Link to='/about'>
					<li>2nd list</li>
				</Link>
				<Link to='/services'>
					<li>3rd list</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
