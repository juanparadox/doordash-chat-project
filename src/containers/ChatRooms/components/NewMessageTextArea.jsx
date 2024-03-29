import React from 'react';
import { Form, Button, Input } from 'antd';

const { TextArea } = Input;

export const NewMessageTextArea = ({ onChange, onSubmit, submitting, value }) => (
    <Form>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Message
        </Button>
        </Form.Item>
    </Form>
);