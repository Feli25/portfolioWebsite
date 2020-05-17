import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';

const mapStateToProps = state => ({
  ...state
})


class Experience extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <section id="experience">
          <div class="title">
            <h2>Experience</h2>
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
                <p>
                <h3>Intro 2</h3>
                Turpis nunc eget lorem dolor sed viverra. Eu lobortis elementum nibh tellus molestie nunc non.
                Placerat vestibulum lectus mauris ultrices eros in cursus. Vitae congue eu consequat ac felis donec et odio pellentesque.
                Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit.
                Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
                Eu consequat ac felis donec et odio pellentesque. Tincidunt arcu non sodales neque sodales ut.
                Sit amet venenatis urna cursus eget nunc scelerisque.
                </p>
              </div>
            </article>
        </section>
   );
  }
 }
 

export default connect(mapStateToProps)(Experience);