import { Tabs } from 'antd';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
const { TabPane } = Tabs;

function Profilescreen() {
    const user = JSON.parse(localStorage.getItem('currentuser'));

    useEffect(() => {
        if(!user){
            window.location.href='/login'
        }
    }, [])
    
    return (
        <div className='ml-3 mt-3'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Profile" key="1">
                    <h1>My Profile</h1>
                    <br />
                    <h1>Name : {user.name}</h1>
                    <h1>Email : {user.email}</h1>
                    <h1>isAdmin : {user.isAdmin ? 'Yes' : 'No'}</h1>
                </TabPane>
                <TabPane tab="Booking" key="2">
                    <MyBookings/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Profilescreen

export function MyBookings(){
    const user = JSON.parse(localStorage.getItem('currentuser'));
    useEffect( () => {
        async function fetchData() {
            
            try {
                const rooms = await (await axios.post('/api/bookings/getbookingsbyuserid/',{userid : user._id})).data
                console.log(rooms)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    },[])
    
    return(
        <div>
            <h1>My Bookings</h1>
        </div>
    )
}