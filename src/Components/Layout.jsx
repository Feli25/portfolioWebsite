import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.css';
import Construction from './Construction';

const mapStateToProps = state => ({
  ...state
})

class Layout extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
  }
  render() {
    var currentPage = this.props.simpleReducer.showPage
   return (
    <div className="Layout">
      {currentPage === "construction" && <Construction/>}
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(Layout);
