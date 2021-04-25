import React from 'react'

import { Card, Typography, Form, Input, InputNumber, Button, Alert } from 'antd'
import axios from 'axios'

import Swal from 'sweetalert2/dist/sweetalert2.all.min'
import 'sweetalert2/dist/sweetalert2.min'
import { Redirect } from 'react-router-dom'
class ProcessComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataBooking: [],
            patients: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const bookingID = this.props.match.params.id
        let response = await axios.get('/booking/id', { params: { bookingID } })
        this.setState({ dataBooking: response.data })
        this.setState({ patients: response.data[0]['patients'] })
    
    }

    render() {

       

        const onFinish = (values) => {

            if (values != null) {

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You want to confirm the report!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                }).then((result) => {
                    if (result.isConfirmed) {

                        const data = {
                            'bookingID': this.props.match.params.id,
                            'staffID': localStorage.getItem('staffID'),
                            'patentID': this.state.patients[0]?._id,
                            'header': values.reports.reportHeader,
                            'detail': values.reports.reportDetail
                        }
                        axios.post('/report', data)
                            .then(res => {
                                window.location = '/doctor/dispense/' + res.data;
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }
                })



            }


        };


        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 8,
            },
        };

        const { Title, Paragraph, Text, Link } = Typography;

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


        return (
            <>
                <div className="touch">

                    <Card className="card" style={{ marginBottom: 15 }}>
                        <Typography>
                            <Paragraph>
                                <Alert
                                    message={
                                        <>
                                            Booking id : {this.state.dataBooking[0]?._id}
                                        </>
                                    }
                                    description={
                                        <>
                                            รายระเอียด : {this.state.dataBooking[0]?.detail}
                                        </>
                                    }
                                    type="warning"
                                />
                                <br></br>
                                <Alert
                                    message={
                                        <>
                                            <h5>ประวัติ</h5>
                                        </>
                                    }
                                    description={
                                        <>
                                            <p>ชื่อ : {this.state.patients[0]?.name}</p>
                                            <p>วันเกิด : {this.state.patients[0]?.dob}</p>
                                            <p>อายุ : {this.state.patients[0]?.dob}</p>
                                        </>
                                    }
                                    type="info"
                                />
                            </Paragraph>
                        </Typography>

                        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

                            <Form.Item
                                name={['reports', 'reportHeader']}
                                label="Subject"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item name={['reports', 'reportDetail']} label="report detail"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
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
            </>
        )
    }
}

export default ProcessComponent