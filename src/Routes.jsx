import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './containers/Login/Login';
import ChatRooms from './containers/ChatRooms/ChatRooms';

export class Routes extends React.PureComponent {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/chat-rooms" component={ChatRooms} />
                    <Route component={Login} />
                </Switch>
            </Router>
        )
    }
}