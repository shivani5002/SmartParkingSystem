const express = require('express');
const router = express.Router();
const ParkingSlot = require('./ParkingSlot');  // Adjust the path as necessary


router.get('/', (req, res) => {
  res.send('Parking system route hit!');
});

router.get('/parkingslots/:floorNumber', async (req, res) => {
  console.log('Received request for parking slots');
  console.log('Vehicle type:', req.query.vehicleType);
  try {
    const floorNumber = req.params.floorNumber;
    const vehicleType = req.query.vehicleType;

    const slotSize =
      vehicleType === 'Bike' ? 'Small' : vehicleType === 'Car' ? 'Medium' : 'Large';

    const parkingSlots = await ParkingSlot.find({ floorNumber, slotSize });

    if (parkingSlots.length === 0) {
      console.log('No parking slots found for the given criteria');
      return res
        .status(404)
        .json({ message: 'No parking slots available for the given criteria' });
    }

    console.log('Retrieved parkingSlots:', parkingSlots);
    res.json(parkingSlots);
  } catch (err) {
    if (err.name === 'MongoError') {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error', message: err.message });
    }
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch parking slots', message: err.message });
  }
}
);


module.exports = router;