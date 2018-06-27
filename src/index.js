import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,HashRouter,Switch,Redirect} from 'react-router-dom'
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(
    <HashRouter>
        <App>
            <Router>
                <Route exact path="/" component={App} />
            </Router>
        </App>
    </HashRouter>,
document.getElementById('app'));
