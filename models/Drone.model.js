// Iteration #1

const { Schema, model } = require('mongoose');

const droneModel = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const DroneModel = model('Drones', droneModel)

module.exports = DroneModel