const express = require("express");
const router = express.Router();
const Booking = require('../models/booking');
router.post("/bookroom",async(req,res)=>{
    const {room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays} = req.body

    try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays,
            transactionid : '1234'
        })

        const booking = await newbooking.save()
        res.send("Room booked succesfully")
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

module.exports = router