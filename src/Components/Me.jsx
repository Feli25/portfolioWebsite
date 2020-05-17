import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
import feliPic from '../Globals/meComplete.jpg';
// import feliPic from '../Globals/me.jpg';

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
                <h3>Intro</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Malesuada fames ac turpis egestas sed tempus urna et pharetra.
                At tempor commodo ullamcorper a lacus vestibulum sed arcu.
                Sed turpis tincidunt id aliquet risus feugiat.
                Quisque sagittis purus sit amet volutpat. Velit sed ullamcorper morbi tincidunt ornare massa.
                Sit amet massa vitae tortor. 
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