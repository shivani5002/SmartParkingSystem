const mongoose = require('mongoose');

const parkingSlotSchema = new mongoose.Schema({
  slotId: String,
  floorNumber: Number,
  latitude: Number,
  longitude: Number,
  building: String,
  zone: String,
  row: Number,
  column: Number,
  proximityToLandmarks: String,
  slotType: String,
  slotSize: String,
  orientation: String,
  status: String,
  booked: Boolean,
  available: Boolean,
  hourlyRate: Number,
});

const ParkingSlot = mongoose.model('ParkingSlot', parkingSlotSchema);

module.exports = ParkingSlot;