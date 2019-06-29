import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Typography, Skeleton, Alert } from 'antd';

import './styles.scss';
import { getRooms } from '../../actions/roomsActions';
import { getRoom } from '../../actions/roomActions';
import Room from './components/Room';
import SessionTimer from './components/SessionTimer';

const { Sider } = Layout;
const { Title, Text } = Typography;

class ChatRooms extends React.PureComponent {
    componentDidMount() {
        this.props.getRooms();
    }

    /** Handles room selection by loading the room */
    handleRoomSelection = (room) => {
        this.props.getRoom(room.key);
    }

    /** Renders the rooms list */
    renderRooms = () => {
        if (this.props.isRoomsLoading) {
            return <Skeleton className="__skeleton" active />
        }
        if (this.props.roomsHasError) {
            return <Alert message="There was an error loading the rooms list." type="error" className="__alert" />;
        }
        if (this.props.rooms) {
            return (
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[]}
                    defaultOpenKeys={[]}
                    style={{ borderRight: 0 }}
                >
                    {this.props.rooms.map(room =>
                        <Menu.Item key={room.id} onClick={this.handleRoomSelection}>{room.name}</Menu.Item>
                    )}
                </Menu>
            );
        }
        return <Skeleton className="__skeleton" active />
    }

    render() {
        return (
            <Layout style={{ height: '100%' }} className="chat-rooms">
                <Sider width={200} style={{ background: '#fff' }}>
                    <div className="username">
                        <Avatar icon="user" style={{ marginRight: '12px' }} size="small" />
                        <div>
                            <Title level={4}>{this.props.username}</Title>
                            <Text type="secondary">Online for <SessionTimer /></Text>
                        </div>
                    </div>
                    {this.renderRooms()}
                </Sider>
                <Room />
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    username: state.username.payload,
    rooms: state.rooms.payload,
    isRoomsLoading: state.rooms.isLoading,
    roomsHasError: state.rooms.hasError
});

const mapDispatchToProps = {
    getRooms,
    getRoom
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRooms);