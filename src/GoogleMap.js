import React from 'react';

export function GoogleMap() {
  return (
    // <div>
    //   <h2>Google Maps API</h2>
    //   <iframe
    //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60875.450169101015!2d78.30298524830619!3d17.521082799015776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d0059937b73%3A0xbd8eadbb3d600367!2sBeeramguda%20Blasters%20Ground%20-%20Naveen!5e0!3m2!1sen!2sin!4v1732941430436!5m2!1sen!2sin"
    //     width="600"
    //     height="450"
    //     style={{ border: 0 }}
    //     allowFullScreen
    //     loading="lazy"
    //     referrerPolicy="no-referrer-when-downgrade"
    //   />
    // </div>
    <div>
    <h2>Google Maps API</h2>
    <iframe
      src="https://www.google.com/maps/embed/v1/directions?origin=Beeramguda&destination=Hyderabad&mode=driving"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  );
}