import React from 'react' ;
import './Logo.css' ;
import Tilt from 'react-tilt' ;
import brain from './brain.png' ;

const Logo = () => {
	return (
		<div className="log">
			<Tilt className="Tilt br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner"> <img src={brain} alt="logo" /> </div>
			</Tilt>
		</div>
		) ;
}

export default Logo ;