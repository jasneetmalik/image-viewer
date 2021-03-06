import React, {Component} from 'react';
import Home from './screens/home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {
    render() {
        return(
            <Router>
            <div>
                <Route exact path='/' component={Home} />
            </div>
            </Router>
        )
    }
}
export default Controller;