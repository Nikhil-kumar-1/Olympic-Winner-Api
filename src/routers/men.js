const express = require("express");
const router =  new express.Router();

const MensRanking = require("../models/mens");


//we will handle post req
router.post("/mens", async(req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
      const result =   addingMensRecords.save();
      res.status(201).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
});

//For a get a data and show on port 8080;
router.get("/mens", async (req, res) => {
    try {
        const mensRecords = await MensRanking.find({}).sort({"ranking":1}); // Fetch all records
        res.status(200).send(mensRecords); // Sending fetched records as response
    } catch (e) {
        res.status(500).send(e.message); // Sending an error response with the error message
    }});

    //To find a specific person by using id
    router.get("/mens/:id", async (req, res) => {
        try {
            const _id =req.params.id; //Above mens/:id and params.id should be same
            const getMens = await MensRanking.findById({_id}); // Fetch all records
            res.status(200).send(getMens); // Sending fetched records as response
        } catch (e) {
            res.status(500).send(e.message); // Sending an error response with the error message
        }});
//Manually update not all data any specific one by using patch
        router.patch("/mens/:id", async (req, res) => {
            try {
                const _id =req.params.id; //Above mens/:id and params.id should be same
                const updateMens = await MensRanking.findByIdAndUpdate(_id,req.body, {
                    new:true
                }); // Fetch all records
                res.status(200).send(updateMens); // Sending fetched records as response
            } catch (e) {
                res.status(500).send(e.message); // Sending an error response with the error message
            }});

   
//Delete request

router.delete("/mens/:id", async (req, res) => {
    try {
        const _id =req.params.id; //Above mens/:id and params.id should be same
        const updateMens = await MensRanking.findByIdAndDelete(_id,req.body); // Fetch all records
        res.status(200).send(updateMens); // Sending fetched records as response
    } catch (e) {
        res.status(500).send(e.message); // Sending an error response with the error message
    }});

    module.exports = router;