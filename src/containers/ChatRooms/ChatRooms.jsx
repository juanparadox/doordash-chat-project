import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Avatar, Typography, Spin } from 'antd';

import './styles.scss';
import { getRooms } from '../../actions/roomsActions';
import { getRoom } from '../../actions/roomActions';
import Room from './Room';

const { Sider } = Layout;
const { Title } = Typography;

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
        return <Spin/>
    }

    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <div className="username">
                        <Avatar icon="user" style={{ marginRight: '12px' }} size="small"/>
                        <Title level={4}>{this.props.username}</Title>
                    </div>
                    {this.renderRooms()}
                </Sider>
                <Room/>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    username: state.username.payload,
    rooms: state.rooms.payload
});

const mapDispatchToProps = {
    getRooms,
    getRoom
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRooms);