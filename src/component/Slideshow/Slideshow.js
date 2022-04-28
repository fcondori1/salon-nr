import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img2 from '../../assets/gallery/img2.JPG';
import img4 from '../../assets/gallery/img4.JPG';
import img5 from '../../assets/gallery/img3.JPG';
import './Slideshow.css';

const slideImages = [
	'https://react-slideshow.herokuapp.com/images/slide_2.jpg',
	'https://react-slideshow.herokuapp.com/images/slide_3.jpg',
	'https://react-slideshow.herokuapp.com/images/slide_4.jpg',
];

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	pauseOnHover: true,
	onChange: (oldIndex, newIndex) => {
		console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	},
};

const Slideshow = () => {
	return (
		<>
			<h2>SlideShow</h2>
			<div className='slide-container'>
				<Slide {...properties}>
					<div className='each-slide'>
							<img src={img2} alt='' className='slides'></img>
					</div>
					<div className='each-slide'>
							<img src={img4} alt='' className='slides'></img>
					</div>
					<div className='each-slide'>
							<img src={img5} alt='' className='slides'></img>
					</div>
				</Slide>
			</div>
		</>
	);
};

export default Slideshow;
