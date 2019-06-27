import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './containers/Login/Login';
import { ChatRooms } from './containers/ChatRooms/ChatRooms';

export class Routes extends React.PureComponent {

    render() {
        return (
            <Router>
                <Route component={Login} />
                <Route path="/chat-rooms" component={ChatRooms} />
            </Router>
        )
    }
}