import React from 'react';
import { Layout, Button, Input } from 'antd';
import { withRouter } from 'react-router';

const { Header, Content, Sider } = Layout;

function Login({history}) {
    function handleCreateUsername() {
        history.push('/chat-rooms');
    }
    return (
        <Layout>
            <Content>
                <Input></Input>
                <Button onClick={handleCreateUsername}>Test</Button>
            </Content>
        </Layout>
    )
}

export default withRouter(Login);