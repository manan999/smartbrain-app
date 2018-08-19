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

class App extends Component {
  constructor()
  {
    super() ;
    this.state = {
      input : '' ,
      imageUrl : '' ,
      box: {} ,
      route : 'signin' ,
    }
  }

  onChange = (event) => {
    console.log(event.target.value) ;
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
    console.log("Detecting..") ;
    this.setState({imageUrl : this.state.input}) ;
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then( (response) => {
      console.log("Detected..!\n") ;
      let loc = this.calcFaceBox( response.outputs[0].data.regions[0].region_info.bounding_box ) ;
      this.drawFaceBox(loc) ;
    } )
    .catch(err => {
      console.log("Haww...Error\n") ;
      console.log(err) ;
    } ) ;
  }

  onRouteChange = (route) => {
      this.setState({route : route}) ;
  }

  render() {
    if (this.state.route === 'signin')
    {  return (
        <div className="App">
          <Particles className = 'particle' params={conf}/>
          <Logo />
          <Signin onRouteChange={this.onRouteChange}/>
        </div> 
        );
    }
    else if (this.state.route === 'home') 
    {  return (
        <div className="App">
          <Particles className = 'particle' params={conf}/>
          <Signout onRouteChange={this.onRouteChange}/>
          <Logo />
          <Rank />
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
            <Register onRouteChange={this.onRouteChange}/>
          </div>
          ) ;
    } 
  } 
}

export default App;
