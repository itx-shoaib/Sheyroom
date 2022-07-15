import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Addroom = () => {
    const [name, setname] = useState([])
    const [rentperday, setrentperday] = useState([])
    const [maxcount, setmaxcount] = useState([])
    const [description, setdescription] = useState([])
    const [phonenumber, setphonenumber] = useState([])
    const [type, settype] = useState([])
    const [imageurl1, setimageurl1] = useState([])
    const [imageurl2, setimageurl2] = useState([])
    const [imageurl3, setimageurl3] = useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const data = await (await axios.get('/api/bookings/getallbookings')).data
    //             setbookings(data);
    //             setloading(false);
    //         } catch (error) {
    //             console.log(error);
    //             setloading(false);
    //             seterror(true);
    //         }
    //     }
    //     fetchData();
    // }, [])

    function addRoom() {
        const newRoom = {
            name,
            rentperday,
            maxcount,
            description,
            phonenumber,
            type,
            imageurls:[imageurl1,imageurl2,imageurl3]
        }

        console.log(newRoom);
    }

    return (
        <>
            <div className="row">
                    <h1>Add Room</h1>
                    {/* {loading && (<Loader />)} */}

                <div className="col-md-5">

                    <input type="text" classaName="form-control"  placeholder="Room name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" classaName="form-control"  placeholder="Rent per day" value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}} />
                    <input type="text" classaName="form-control"  placeholder="Max count" value={maxcount} onChange={(e)=>{setmaxcount(e.target.value)}}/>
                    <input type="text" classaName="form-control"  placeholder="Description" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
                    <input type="text" classaName="form-control"  placeholder="Phone number" value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}} />

                </div>
                <div className="col-md-5">

                    <input type="text" classaName="form-control"  placeholder="Type" value={type} onChange={(e)=>{settype(e.target.value)}} />
                    <input type="text" classaName="form-control"  placeholder="Image Url 1" value={imageurl1} onChange={(e)=>{setimageurl1(e.target.value)}} />
                    <input type="text" classaName="form-control"  placeholder="Image url 2" value={imageurl2} onChange={(e)=>{setimageurl2(e.target.value)}} />
                    <input type="text" classaName="form-control"  placeholder="Image Url 3" value={imageurl3} onChange={(e)=>{setimageurl3(e.target.value)}} />

                    <div className="text-right">
                        <button className="btn btn-primary" onClick={addRoom}>Add Room</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Addroom