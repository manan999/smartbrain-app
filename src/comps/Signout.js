import React from 'react' ;

import './Signout.css' ;

const Signout = ({onRouteChange}) => {
	return (
		<nav>	
			<p onClick ={() => onRouteChange('signin')} className="link dim"> Sign Out </p> 
		</nav>
		) ;
}

export default Signout ;