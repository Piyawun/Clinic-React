import React from 'react'

import { Row, Col, Button, Card } from 'antd'

import DoctorQue from '../table/DoctorQue'

const DoctorComponent = ({ history }) => {


    return (
        <>
            {/* <Button style={{ margin: "10px" }} type="primary" shape="round" size="large" >เพิ่มผู้ป่วย </Button> */}

            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="touch">
                        <Card className="card" title="จำนวนคิว" bordered={true}>
                            <DoctorQue />
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}


export default DoctorComponent;
