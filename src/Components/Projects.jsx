import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';

const mapStateToProps = state => ({
  ...state
})


class Projects extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    return(
      <div className="projects"><a name="projects">Projects</a></div>
      
   );
  }
 }
 

export default connect(mapStateToProps)(Projects);