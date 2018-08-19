import React from 'react' ;

const Register = ({ onRouteChange }) => {
	return (
			<article className="w-100 w-50-m w-25-l mw6 mh3 center br3 ba b--black-50 shadow-5 mt2">
				<div className="pa4 black-80">
				  	<div className="measure ">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="center f2 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
					      </div>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
					      </div>
						    <div className= "flex justify-center mv3 ">
						        <input onClick = {() => onRouteChange('signin')} className="mh2 b ph3 pv2 input-reset br2 b--black bg-transparent ghost pointer f5 dib" type="submit" value="Sign Up"/>
						    </div>
					    </fieldset>
				  	</div>
				</div>			
			</article>
		) ;
}

export default Register ;

