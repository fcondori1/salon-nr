import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Main from './component/Main/Main';
import About from './component/About/About';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Main />
			<About />
		</div>
	);
}

export default App;
