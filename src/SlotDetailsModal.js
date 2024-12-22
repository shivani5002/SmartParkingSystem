import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export const SlotDetailsModal = ({ show, onHide, slot }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Slot Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Proximity to Landmarks: {slot.Proximity_to_landmarks}</p>
        <p>Price: ${slot.price}</p>
        <p>Building: {slot.building}</p>
        <p>Zone: {slot.zone}</p>
        <p>Row: {slot.row}</p>
        <p>Column: {slot.column}</p>
        <p>Slot Type: {slot.slotType}</p>
        <p>Slot Size: {slot.slotSize}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

