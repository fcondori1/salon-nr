import './App.css';
import Nav from './component/Nav/Nav';
import Main from './component/Main/Main';
import About from './component/About/About';
import { Routes, Route } from 'react-router-dom';
import Services from './component/Services/Services';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
			</Routes>
		</div>
	);
}

export default App;
