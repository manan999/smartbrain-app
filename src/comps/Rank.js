import React from 'react' ;

const Rank = ({name, entries}) => {
	return (
		<div> 
			<div className ="up">
				{name}, your Detections are... 
			</div>
			<div className="rank">
				#{entries}
			</div>
		</div>
		) ;
}

export default Rank ;