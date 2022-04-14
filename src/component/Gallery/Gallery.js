import React from 'react';
import './Gallery.css';
import wig1 from '../../assets/gallery/wig1.JPG'
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


function Gallery(props) {
    return (
			<div className='page'>
				<div>
					<img
						src={wig1}
						alt=''
						className='gallery-img'></img>
					<img
						src={wig1a}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
				</div>
				<div>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
				</div>
				<div>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
					<img
						// src={}
						alt=''
						className='gallery-img'></img>
				</div>
			</div>
		);
}

export default Gallery;