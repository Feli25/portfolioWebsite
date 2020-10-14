import React, {Component} from 'react';
import { connect } from 'react-redux';

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
                <h3>Work Experience</h3>
                Currently I am full time employed, working on Full Stack Projects in React, Node and SQL. 
                I have gained extensive experience with applications and the development process in a fast changing environment with real-life products, developed multiple user interfaces and complex logics in backend and frontend.
                Besides developing I have been able to take over Project Managment tasks and hiring new members for our team. 
                I have been doing code reviews for all of my team members and been architectural lead in a few of our biggest projects.
                </p>
              </div>
              <div>
                <p>
                <h3>Side Projects</h3>
                As you can see in the next section, I am also constantly looking for challenges when working on side projects. 
                By creating fun and real projects I can learn new technologies or deepen my understanding for technologies I already know.
                The list of side projects is constantly growing.
                </p>
              </div>
            </article>
        </section>
   );
  }
 }
 

export default connect(mapStateToProps)(Experience);