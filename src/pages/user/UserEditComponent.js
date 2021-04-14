import React from 'react';

import { Card } from 'antd'
import {
    useParams, Switch,
    Route,
    Link,
} from 'react-router-dom';
import { Form, Input, InputNumber, Button } from 'antd';

import axios from 'axios'

class UserEditComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            staff: []
        }

    }

    componentDidMount() {
        this.getData();
    }

    getData() {

        const staffID = this.props.match.params.id
        const json = JSON.stringify({ staffID })
        const x = axios.get('/user/id', { params: { staffID } })
            .then(res => {
                this.state.staff = res.data
            }).catch(err => {
                console.error(err)
            })



    }


    render() {

        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 8,
            },
        };
        /* eslint-disable no-template-curly-in-string */

        const validateMessages = {
            required: '${label} is required!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };
        /* eslint-enable no-template-curly-in-string */

        const onFinish = (values) => {
            console.log(values);
        };





        return (
            <div className="touch">
                <Card title="Edit" className="card" bordered={true}>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            name={['user', 'name']}
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}

                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'age']}
                            label="Age"
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    max: 99,
                                },
                            ]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name={['user', 'website']} label="Website">
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'introduction']} label="Introduction">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default UserEditComponent;