import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Bookings = () => {

    const [bookings, setbookings] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await (await axios.get('/api/bookings/getallbookings')).data
                setbookings(data);
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
            <div className="col-md-10">

                <h1>Bookings</h1>
                {loading && (<Loader/>)}
                {bookings.length && (<h1>There are total {bookings.length} bookings</h1>) }

            </div>
        </div>
    </>
  )
}

export default Bookings