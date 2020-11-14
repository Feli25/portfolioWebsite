import React, {Component} from 'react';
import { connect } from 'react-redux';
// import testimage from '../globals/whiteLines.jpg';

const mapStateToProps = state => ({
  ...state
})


class Work extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <div class="work" id="work">
        <h2 class="section-title">Projects I have done</h2>
        <div class="projectbox" style={{backgroundImage: "url('../globals/whiteLines.jpg')"}}>
          {/* <img src={testimage} alt="test"/> */}
          <h5>titel</h5>
          <a>See more</a>
        </div>
      </div>
   );
  }
 }
 

export default connect(mapStateToProps)(Work);