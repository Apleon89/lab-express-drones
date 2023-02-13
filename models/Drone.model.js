// Iteration #1

const { Schema, model } = require('mongoose');

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const DroneModel = model('Drones', droneSchema)

module.exports = DroneModel