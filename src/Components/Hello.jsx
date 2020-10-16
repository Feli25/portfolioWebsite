import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../stylesheets/hello.scss'
import logo from '../globals/LogoRaw.png'

const mapStateToProps = state => ({
  ...state
})


class Hello extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <section id="hello" className="hello">
        <div className="logo">
          <img alt="" src={logo} />
        </div>
        <h1>Hello, <br/>
          I'm Feli <br/>
          A full stack <br/>
          Web Developer</h1>
        <a href="#contact">Say hello</a>
      </section>
   );
  }
 }
 

export default connect(mapStateToProps)(Hello);