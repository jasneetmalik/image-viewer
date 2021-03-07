import React, {Component} from 'react';
import Home from './screens/home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/login/Login';
class Controller extends Component {
    render() {
        return(
            <Router>
            <div>
                <Route exact path='/' render={({history}, props) => <Login {...props} history={history}/>} />
                <Route exact path='/home' render={({history}, props) => <Home {...props} history={history}/>} />
            
            </div>
            </Router>
        )
    }
}
export default Controller;