import React from 'react' ;
import './imgurl.css' ;
import './Signup.css' ;

const ImgUrl = ( { onChange, onSubmit } ) => {
	return (
		<div >
			<p className ="big"> This magic brain will detect faces in your pictures.. </p>
			<div className = "centre">
				<div className = "inner centre">
					<input className ="img-ip" type = "text" onChange ={onChange} />
					<button className = "img-ip-btn link" onClick ={onSubmit} > Detect </button> 
				</div>			
			</div>
		</div>
		) ;
}

export default ImgUrl ;