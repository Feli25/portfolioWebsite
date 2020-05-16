import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../Global.scss';
import Construction from './Construction';
import HomePage from './HomePage'

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
     <React.Fragment>
        {currentPage === "construction" && 
          <div className="Layout">
            <Construction/>
          </div>
        }
        {currentPage === "home" && <HomePage/>}
      </React.Fragment>
   );
  }
 }
 

export default connect(mapStateToProps)(Layout);
