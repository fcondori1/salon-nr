import { Routes, Route } from 'react-router-dom';

import Nav from './component/Nav/Nav';
import Main from './component/Main/Main';
import About from './component/About/About';
import Services from './component/Services/Services';
import Gallery from './component/Gallery/Gallery';
import Footer from './component/Footer/Footer';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/gallery' element={<Gallery />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
