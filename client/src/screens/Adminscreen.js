import React from 'react'
import { Tabs } from 'antd';
import Bookings from '../components/Bookings';
import Rooms from '../components/Rooms';

const { TabPane } = Tabs;

function Adminscreen() {
    return (
        <div className='mt-3 ml-3 mr-3 bs'>
            <h2 className='text-center' style={{fontSize:'30px'}}><b>Admin Panel</b></h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Bookings" key="1">
                    <Bookings/>
                </TabPane>
                <TabPane tab="Rooms" key="2">
                    <Rooms/>
                </TabPane>
                <TabPane tab="Add Room" key="3">
                    <h1>Add Room</h1>
                </TabPane>
                <TabPane tab="Users" key="4">
                    <h1>Users</h1>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Adminscreen