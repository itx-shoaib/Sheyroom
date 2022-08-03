// Importing
import axios from 'axios';

// All actions regarding to rooms
const getAllRooms=()=>dispatch=>{
    dispatch({type:'GET_ROOMS_REQUEST'})

    try {
        const response = axios.get('/api/rooms/getallrooms')
        console.log(response)
        dispatch({type:'GET_ROOMS_SUCCESS'})
    } catch (error) {
        dispatch({type:'GET_ROOMS_FAILED'})
    }
}