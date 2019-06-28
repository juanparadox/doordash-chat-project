import React from 'react';
import { connect } from 'react-redux';
import { Layout, Comment, Avatar, Spin, PageHeader, Empty } from 'antd';

import './styles.scss';
import { NewMessageTextArea } from './NewMessageTextArea';
import { Messages } from './Messages';
import { postMessage } from '../../actions/messageActions';

const { Content } = Layout;

class Room extends React.PureComponent {
    state = {
        message: null
    }

    /** Handles message change */
    handleMessageChange = ({ target: { value } }) => {
        this.setState({ message: value });
    };

    /** Handles the submission of a new message */
    handleMessageSubmission = () => {
        this.setState({ message: null });
        this.props.postMessage(
            this.props.roomDetail.id,
            {
                message: this.state.message,
                name: this.props.username
            }
        );
    }

    render() {
        const { roomDetail, messages, isRoomDetailLoading, isPostMessageLoading } = this.props;
        console.log(this.props);
        if (!roomDetail && !messages) {
            return (
                <Content className="room">
                    <Empty description="Please select a chat room to begin!" className="__empty" />
                </Content>
            );
        }
        return (
            <Content className="room">
                <Spin spinning={isRoomDetailLoading}>
                    <PageHeader title={roomDetail ? roomDetail.name : 'Room Title'} subTitle={roomDetail ? roomDetail.users.join() : ''} />
                </Spin>
                {messages && messages.length && <Messages messages={messages} />}
                <Comment
                    avatar={
                        <Avatar
                            icon="user"
                            alt={this.props.username}
                        />
                    }
                    content={
                        <NewMessageTextArea
                            onChange={this.handleMessageChange}
                            onSubmit={this.handleMessageSubmission}
                            submitting={isPostMessageLoading}
                            value={this.state.message}
                        />
                    }
                    className="__textarea"
                />
            </Content>
        )
    }
}

const mapStateToProps = state => ({
    username: state.username.payload,
    roomDetail: state.roomDetail.payload,
    messages: state.messages.payload,
    isRoomDetailLoading: state.roomDetail.isLoading,
    isPostMessageLoading: state.message.isLoading
});

const mapDispatchToProps = {
    postMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);