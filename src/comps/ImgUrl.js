import React from 'react' ;
import './imgurl.css' ;
import './Signup.css' ;

const ImgUrl = ( { onChange, onSubmit } ) => {
	return (
		<div >
			<p className ="big"> This magic brain will detect faces in your pictures.. </p>
			<div className = "centre">
				<div className = "inner centre">
					<input className ="img-ip" type = "text" onChange ={onChange} placeholder="Enter Image URL" />
					<button className = "img-ip-btn link" onClick ={onSubmit} > Detect&nbsp; </button> 
				</div>			
			</div>
		</div>
		) ;
}

export default ImgUrl ;