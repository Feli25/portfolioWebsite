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
          <div className="title">
            <h2>Experience</h2>
          </div>
          <article>
              <div className='text'>
							<div className='verticalText'>Work Experience</div>
              <p>
                &nbsp;&nbsp;Currently I am full time employed, working on <span className='hightLight'>Full Stack</span> Projects in <span className='hightLight'>React</span>, <span className='hightLight'>Node</span> and <span className='hightLight'>SQL</span>.
								<br/> 
                I have gained extensive experience with applications and the development process in a fast changing environment with real-life products,
								developed multiple user interfaces and complex logics in backend and frontend.
                <br/>
								Besides developing I have been able to take over <span className='hightLight'>Project Managment</span> tasks and hiring new members for our team. 
                I have been doing <span className='hightLight'>code reviews</span> for all of my team members and been architectural lead in a few of our biggest projects.
                </p>
              </div>
							<br/>
              <div className='text'>
								<div className='verticalText'>Side Projects</div>
                <p>
                &nbsp;&nbsp;As you can see in the next section, I am also constantly looking for challenges when working on side projects. 
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