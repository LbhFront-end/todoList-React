import '../styles/App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Index from '../components/Index/index.js'
import AddList from '../components/addList/index.js';

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path="/" component={Index} />
          <Route path="/AddList" component={AddList} />
        </div>
      </Router>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
