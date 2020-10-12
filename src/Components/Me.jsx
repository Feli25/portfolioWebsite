import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
import feliPic from '../Globals/meComplete.jpg';

const mapStateToProps = state => ({
  ...state
})


class Me extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <section id="me">
          <div  class="title">
            <h2>About me</h2>
          </div>
          <article>
              <div>
                <p>
                <h3>Hello!</h3>
                My name is Felicitas Deutges, and I am a Berlin based Fullstack Web Developer. 
                I primarily user JavaScript, with React and Node.js, and SQL. But picking up new frameworks or technologies is not a problem.<br/>
                I enjoy building everything, from small business sites to rich interactive web apps. If you are a business seaking a web presence or an employer looking to hire, you can get in touch with me <a href="#contact">here</a>.
                </p>
              </div>
              <div>
                <img src={feliPic} width='90%' alt=""/>
              </div>
          </article>
        </section>
   );
  }
 }
 

export default connect(mapStateToProps)(Me);