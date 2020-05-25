import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';

const mapStateToProps = state => ({
  ...state
})


class Skills extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <div className="skills"><a name="skills">Skills</a></div>
      
   );
  }
 }
 

export default connect(mapStateToProps)(Skills);