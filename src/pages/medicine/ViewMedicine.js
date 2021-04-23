import React from 'react'

import {Link} from 'react-router-dom'
import { Card, Table,Button,Space } from "antd";
import axios from 'axios';


class ViewMedicine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            medicine: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        axios.get('/medicine').then(res => {
            console.log(res)
            const data = res.data.map(row => ({
                key: row._id,
                medID: row._id,
                name: row.name,
                amount: row.amount,
                lot_num: row.lot_num,
                EXP: row.EXP,
                MFG: row.MFG,
                price: row.price
            }))
            this.setState({ medicine: data })
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
    }

    render() {

        const columns = [
            {
                title: '#',
                dataIndex: 'medID',
                key: 'medID',
                style: { textAlign: 'center' }
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                style: { textAlign: 'center' }
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                style: { textAlign: 'center' }
            },
            {
                title: 'Lot_num',
                dataIndex: 'lot_num',
                key: 'lot_num',
                style: { textAlign: 'center' }
            },
            {
                title: 'MFG',
                dataIndex: 'MFG',
                key: 'MFG',
                style: { textAlign: 'center' }
            },
            {
                title: 'EXP',
                dataIndex: 'EXP',
                key: 'EXP',
                style: { textAlign: 'center' }
            },
            {
                title: 'PRICE',
                dataIndex: 'price',
                key: 'price',
                style: { textAlign: 'center' }
            }

        ]

        const data = this.state.medicine

        console.log(data)
        const state = {
            bottom: 'bottomCenter',
        };
        return (
            <div className="touch">
                <Card className="card" bordered={true} title="Medicines List">
                    <Table
                        columns={columns}
                        pagination={{ position: [state.bottom] }}
                        dataSource={data}
                    />


                </Card>

            </div>
        )
    }

}


export default ViewMedicine;