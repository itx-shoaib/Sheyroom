import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Users = () => {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get('/api/users/getallusers')).data
                setusers(data);
                setloading(false);
            } catch (error) {
                console.log(error);
                setloading(false);
                seterror(true);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-md-12">

                    <h1>Users</h1>
                    {loading && (<Loader />)}
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">User Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">isAdmin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {bookings.length && (bookings.map(booking => {
                                return <tr>
                                    <td scope="row">{booking._id}</td>
                                    <td>{booking.userid}</td>
                                    <td>{booking.room}</td>
                                    <td>{booking.fromdate}</td>
                                    <td>{booking.todate}</td>
                                    <td>{booking.status}</td>
                                </tr>
                            }))} */}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default Users