const express = require('express');
const router = express.Router();
const DroneModel = require("../models/Drone.model.js")

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try{
    const response = await DroneModel.find()
    // console.log(response)
    res.render("drones/list.hbs", {
      allDrones: response
    })

  }catch (err){
    next(err)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  
  const { name, propellers, maxSpeed} = req.body
  try {
    const newDrone = await DroneModel.create({
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed
    })
    res.redirect('/drones')
  }
  catch (err) {
    res.redirect('/drones/create')
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
