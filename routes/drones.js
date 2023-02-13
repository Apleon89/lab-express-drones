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

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const response = await DroneModel.findById(req.params.id)
    console.log(response)
    res.render("drones/update-form.hbs", {
      drone: response
    })
  }catch(err){
    next(err)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // console.log(req.body)
  const { name, propellers, maxSpeed } = req.body
  try{
    await DroneModel.findByIdAndUpdate(req.params.id,{
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed
    })
    res.redirect("/drones")
  } catch (err){
    res.redirect(`/drones/${req.params.id}/edit`)
    // next(err)
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
    try {
      await DroneModel.findByIdAndDelete(req.params.id)
      res.redirect('/drones')
    }
    catch (err) {
      next(err)
    }
});

module.exports = router;
