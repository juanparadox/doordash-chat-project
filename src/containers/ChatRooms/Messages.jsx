import React from 'react';
import { List, Comment, Avatar } from 'antd';

export const Messages = ({ messages }) => (
    <List
        className="messages"
        dataSource={messages}
        itemLayout="horizontal"
        renderItem={({ name, message }) =>
            <Comment
                author={name}
                content={message}
                avatar={
                    <Avatar
                        icon="user"
                    />
                }
            />
        }
    />
);