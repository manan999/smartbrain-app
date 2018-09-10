import React from 'react' ;

class Signin extends React.Component {
	constructor(props)
	{
		super(props) ;
		this.state = {
			Email : '' ,
			Password : '' ,
		} ;
	}

	onEmailChange = (event) => {
		this.setState({Email : event.target.value}) ;
	}

	onPasswordChange = (event) => {
		this.setState({Password : event.target.value}) ;
	}

	onSignInSubmit = () => {
		fetch('https://magic-brain-api.herokuapp.com/signin', {
			method : 'post',
			headers : { 'Content-Type' : 'application/json'} ,
			body : JSON.stringify({
				email : this.state.Email ,
				password : this.state.Password , 
			}),
		})
		.then(res => res.json())
		.then(user => {
			if (user.id)
			{	this.props.loadUser(user)
				this.props.onRouteChange('home') ;
			}			
		}) ;
	}

	render (){
		const {onRouteChange} = this.props ;
		return ( 
			<article className="w-100 w-50-m w-25-l mw6 mh3 center br3 ba b--black-50 shadow-5 mt2">
				<div className="pa4 black-80">
				  	<div className="measure ">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="center f2 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input required="true" onChange= {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input required="true" onChange= {this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
					      </div>
					      {/*<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>*/}
					    
						    <div className= "flex justify-center mv3 ">
						        <input onClick = {this.onSignInSubmit} className="mh2 b ph3 pv2 input-reset br2 b--black bg-transparent ghost pointer f5 dib" type="submit" value="Sign in"/>
						    	<p onClick = {() => onRouteChange('register')} className="b mh2 f5 link black dib br2 bw1 ba b--black ghost pointer ph3 pv2">Register</p>
						    </div>
						    {/*<div className="lh-copy ">
						      
						      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
						    </div>*/}
					    </fieldset>
				  	</div>
				</div>			
			</article>
		 );
	} ;	
}

export default Signin ;


