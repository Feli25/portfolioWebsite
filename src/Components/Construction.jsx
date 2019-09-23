import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.css';
import image from '../Globals/linkedin.png'

const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
   return (
    <div className="construction">
      <h1>WELCOME</h1>
      <h5>And thank you for visiting my website</h5>
      <p>This page is currently still under construction, something amazing will appear here soon.</p>
      <p>Meanwhile, you can check out my Linked In!</p>
      <button className="constructionButton" onClick={()=>window.location.href="https://www.linkedin.com/in/felicitas-deutges-429682173/"}><img src={image} alt="Linked In" className="constructionImage"/>Click here</button>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(App);
