import React, { Component } from 'react';
import Signout from './comps/Signout.js' ;
import Signin from './comps/Signin/Sign.js' ;
import Logo from './comps/Logo.js' ;
import Rank from './comps/Rank.js' ;
import Register from './comps/Registration/Register.js'
import ImgUrl from './comps/ImgUrl.js' ;
import Particles from 'react-particles-js';
import conf from './conf.js' ;
import Clarifai from 'clarifai' ;
import Image from './comps/Image/Image.js' ;

const app = new Clarifai.App( { apiKey: 'd02a5e896fff4268b32239283970c7c6' } );

const initState = {
      input : '' ,
      imageUrl : '' ,
      box: {} ,
      route : 'signin' ,
      user : {
        id : '', 
        name : '', 
        email : '',
        entries : 0 ,
        joined : ''
      } ,
} ;

class App extends Component {
  constructor()
  {
    super() ;
    this.state =  initState ;
  }

  loadUser = (info) => {
    this.setState({user :{
      id : info.id, 
      name : info.name, 
      email : info.email,
      entries : info.entries,
      joined : info.joined 
    }}) ;
  }

  onChange = (event) => {
    // For Debugging only   console.log(event.target.value) ;
    this.setState({input : event.target.value}) ;
  }
  
  calcFaceBox = (data) => {
    const image = document.getElementById("inputimage") ;
    const w = Number(image.width) ;
    const h = Number(image.height) ;
    console.log(w, h) ;
    return  {
      lC : data.left_col * w ,
      tR : data.top_row * h ,
      rC : w - (data.right_col * w) ,
      bR : h - (data.bottom_row * h) , 
    } ;
  }
  
  drawFaceBox = (box) => {
    this.setState({box : box}) ;
    console.log('State Set') ;
  }

  onSubmit = () => {
    //let i = 0 ;
    console.log("Detecting..") ;
    this.setState({imageUrl : this.state.input}) ;
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then( (response) => {
      if (response)
      { console.log("Detected..!\n") ;
        fetch('https://magic-brain-api.herokuapp.com/image' , {
          method : 'put',
          headers : { 'Content-Type' : 'application/json'} ,
          body : JSON.stringify({
            id : this.state.user.id ,
          })
        })
         .then(res => res.json()) 
         .then(data => {
          this.setState(Object.assign(this.state.user, { entries : data} )) 
          } )
         .catch(err => console.log(err)) ;
      }
      //let j = response.outputs[0].data.regions.length ;
      //for ( i = 0 ; i < j ; ++i )
      //{
       let loc = this.calcFaceBox( response.outputs[0].data.regions[0].region_info.bounding_box ) ;
        this.drawFaceBox(loc) ;
      //}
    } )
    .catch(err => {
      console.log("Haww...Error\n") ;
      console.log(err) ;
    } ) ;
  }

  onRouteChange = (route) => {
    if ( route === 'signin' )
      this.setState(initState) ;
    this.setState({route : route}) ;
  }

  render() {
    if (this.state.route === 'signin')
    {  return (
        <div className="App">
          <Particles className = 'particle' params={conf}/>
          <Logo />
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        </div> 
        );
    }
    else if (this.state.route === 'home') 
    {  return (
        <div className="App">
          <Particles className = 'particle' params={conf}/>
          <Signout onRouteChange={this.onRouteChange}/>
          <Logo />
          <Rank name = {this.state.user.name} entries = {this.state.user.entries} />
          <ImgUrl onChange={this.onChange} onSubmit={this.onSubmit}/>
          <Image box={this.state.box} imageUrl={this.state.imageUrl} /> 
        </div> 
        ) ;
    } 
    else if (this.state.route === 'register')
    {  return (
          <div className="App">
            <Particles className = 'particle' params={conf}/>
            <Logo />
            <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          </div>
          ) ;
    } 
  } 
}

export default App;
