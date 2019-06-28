import React from 'react';
import { connect } from 'react-redux';
import { Layout, Button, Input, Row, Col } from 'antd';
import { withRouter } from 'react-router';

import { createUsername } from '../../actions/usernameActions';

import './styles.scss';

const { Header, Content, Sider } = Layout;

class Login extends React.PureComponent {
    state = {
        username: null
    }

    /** Handle username input change */
    handleUsernameChange = ({ target: { value } }) => {
        this.setState({username: value});
    }
    /** Handles the creation of a username via button */
    handleCreateUsername = () => {
        this.props.createUsername(this.state.username);
        this.props.history.push('/chat-rooms');
    }

    render() {
        return (
            <Layout className="login">
                <Row>
                    <Col span={8} offset={8}>
                        <Input
                            size="large"
                            placeholder="Type your username..."
                            className="__input"
                            onChange={this.handleUsernameChange}
                        />
                        <Button
                            type="primary"
                            onClick={this.handleCreateUsername}
                            block
                            value={this.state.username}
                        >
                            Join the DoorDash Chat!
                        </Button>
                    </Col>
                </Row>
            </Layout>
        )
    }
}
const mapDispatchToProps = {
    createUsername
}
export default withRouter(connect(null, mapDispatchToProps)(Login));