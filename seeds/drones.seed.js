// Iteration #1
require('../db/index.js')

const { default: mongoose } = require('mongoose');
const DroneModel = require('../models/Drone.model.js')

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

const insertData = async () => {

    try {
        const response = await DroneModel.create(drones)
        console.log('Drones added')
        mongoose.connection.close()
    }
    catch (err) {
        console.log(err)
    }
}

insertData()

