import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = state => ({
  ...state
})

class App extends Component {
  updateStore = (event) => {
    this.props.dispatch({type:"UPDATE_STORE", name:event.target.name, value:event.target.value})
   }
  render() {
    var currentPage = this.props.simpleReducer.showPage
   return (
    <div className="App">
     <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">Welcome to React</h1>
     <button onClick={this.updateStore} name="showPage" value="Portfolio">Portfolio</button>
     <button onClick={this.updateStore} name="showPage" value="CV">CV</button>
     <button onClick={this.updateStore} name="test2" value="sthewer">sthewer</button>
     <button onClick={this.updateStore} name="test2" value="zuwier">zuwier</button>
     <pre>
 {
  JSON.stringify(this.props)
 }
</pre>

     </header>
     <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload
     </p>
    </div>
   );
  }
 }
 

export default connect(mapStateToProps)(App);
