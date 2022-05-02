import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Loading from '../Loading/Loading';
import Slideshow from '../Slideshow/Slideshow';
import wig1 from '../../assets/gallery/wig1.JPG';
import wig1a from '../../assets/gallery/wig1a.JPG';
import wig2 from '../../assets/gallery/wig2.JPG';
import wig2a from '../../assets/gallery/wig2a.JPG';
import wig2b from '../../assets/gallery/wig2b.JPG';
import wig3 from '../../assets/gallery/wig3.JPG';
import wig3a from '../../assets/gallery/wig3a.JPG';
import wig4 from '../../assets/gallery/wig4.JPG';
import wig5 from '../../assets/gallery/wig5.JPG';
import wig6 from '../../assets/gallery/wig6.JPG';
import wig7 from '../../assets/gallery/wig7.JPG';
import wig8 from '../../assets/gallery/wig8.JPG';
import full1 from '../../assets/gallery/full1.JPG';
import full2 from '../../assets/gallery/full2.JPG';
import img1 from '../../assets/gallery/img1.JPG';
import img2 from '../../assets/gallery/img2.JPG';
import img3 from '../../assets/gallery/img3.JPG';
import img4 from '../../assets/gallery/img4.JPG';
import img5 from '../../assets/gallery/img5.JPG';
import img6 from '../../assets/gallery/img6.JPG';
import img7 from '../../assets/gallery/img7.JPG';
import img8 from '../../assets/gallery/img8.JPG';

function Gallery(props) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);
	return (
		<>
			{loading === false ? (
				<div className='page'>
					<Slideshow />
					<div>
						<img src={full1} alt='' className='gallery-img gallery-full'></img>
						<img src={full2} alt='' className='gallery-img gallery-full'></img>
					</div>
					<h2>Hair/Make-up</h2>
					<div>
						<img src={img1} alt='' className='gallery-img gallery-fix'></img>
						<img src={img2} alt='' className='gallery-img'></img>
						<img src={img3} alt='' className='gallery-img gallery-fix'></img>
						<img src={img4} alt='' className='gallery-img'></img>
						<img src={img5} alt='' className='gallery-img'></img>
						<img src={img6} alt='' className='gallery-img'></img>
						<img src={img7} alt='' className='gallery-img'></img>
						<img src={img8} alt='' className='gallery-img'></img>
					</div>
					<h2>Wigs</h2>
					<div className='gallery-wigs'>
						<img src={wig1} alt='' className='gallery-img'></img>
						<img src={wig1a} alt='' className='gallery-img'></img>
						<img src={wig2} alt='' className='gallery-img'></img>
						<img src={wig2a} alt='' className='gallery-img'></img>
						<img src={wig2b} alt='' className='gallery-img'></img>
						<img src={wig3} alt='' className='gallery-img'></img>
						<img src={wig3a} alt='' className='gallery-img'></img>
						<img src={wig4} alt='' className='gallery-img'></img>
						<img src={wig5} alt='' className='gallery-img'></img>
						<img src={wig6} alt='' className='gallery-img'></img>
						<img src={wig7} alt='' className='gallery-img'></img>
						<img src={wig8} alt='' className='gallery-img'></img>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Gallery;
