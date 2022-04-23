import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';

import Nav from './component/Nav/Nav';
import Main from './component/Main/Main';
import About from './component/About/About';
import Services from './component/Services/Services';
import Gallery from './component/Gallery/Gallery';
import Footer from './component/Footer/Footer';
import Loading from './component/Loading/Loading';

import './App.css';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 4000)
	}, []);

	return (
		<>
			{loading === false ? (
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
			) : (
				<Loading />
			)}
		</>
	);
}

export default App;
