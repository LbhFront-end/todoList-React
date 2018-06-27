import '../styles/App.css';

import React from 'react';
import {Index} from '../components/index/index.js'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <Index/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
