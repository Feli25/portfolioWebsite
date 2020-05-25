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
      <div className="experience"><a name="experience">Experience</a></div>
      
   );
  }
 }
 

export default connect(mapStateToProps)(Experience);