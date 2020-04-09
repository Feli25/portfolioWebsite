import React, {Component} from 'react';
import './App.css';
// import Layout from './Components/Layout'
import HomePage from './Components/HomePage'
// import ExampleApp from './Components/ExampleApp'


class App extends Component {
  render() {
   return (
    <div className="App">
     {/* <Layout/> */}
     <HomePage/>
     {/* <ExampleApp/> */}
    </div>
   );
  }
 }
 

export default App;
