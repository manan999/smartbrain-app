import React from 'react' ;
import './Image.css' ;

const Image = ({imageUrl, box}) => {
	return (
		<div className="centre disp">
			<div className="outer">
				<img id="inputimage" src={imageUrl} alt="Waiting.." width="auto" height ="400px" />
				<div className="bound-box" style={{top : box.tR, bottom: box.bR, left: box.lC, right : box.rC, }}> </div>
			</div>		
		</div>
		) ;
}

export default Image ;

