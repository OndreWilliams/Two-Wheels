'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
          name: 'Canyon Spectral CF8',
          imageUrl: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1619827120/two%20wheels/full_2021_spectral-cf-8_awii1l.png',
          description: 'The Spectral CF 8 is a blast to ride on any trail, but it truly comes to life when the track gets steep and technical. Stable at speed, agile in tight corners and fully-kitted out with high-quality components, this bike was built to go big.',
          price: 4599,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        name: 'Canyon Torque 5',
        imageUrl: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1619827504/two%20wheels/full_2021_torque-5_jlaljf.png',
        description: 'Challenging backcountry trails. Bike park jump lines. Big mountain adventures. The Torque 5 is a versatile gravity rig that does it all – enduro, downhill, freeride, and more.',
        price: 2599,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Canyon STCHD 360',
        imageUrl: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1619827115/two%20wheels/full_2021_stitched-360_yvmk0v.png',
        description: 'Smashing laps at the pump track or learning new tricks out on the dirt jumps, the Stitched 360 was made for the session. Ridden by some of the best freeriders in the world, it’s ready for whatever you can throw at it.',
        price: 1199,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jeffsy CORE 2',
        imageUrl: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1619827496/two%20wheels/01_JEFFSY_27_AL_ixjhn7.png',
        description: "Far out or nothing - with JEFFSY we have realized our very own definition of trail riding. JEFFSY is the YT among all mountain bikes, it's like your best friend for new top performances: together you climb the higher mountains!",
        price: 3999,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Decoy Base 29',
        imageUrl: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1619827493/two%20wheels/03_DECOY29_AL_Base_aqvn7o.png',
        description: "The DECOY 29 BASE delivers solid E-MTB performance with impressive specs, a high-end carbon frame with aluminum triangle, and the distinctive look of a YT. Its easy-to-adjust suspension and durable components make for long lasting good times.",
        price: 6399,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tues Comp',
        imageUrl: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1619827490/two%20wheels/03_TUES27_CF_Comp_vbdpjd.png',
        description: "From Rampage to the World Cup, the TUES dominates the world’s toughest tracks. This incredibly fast bike is the right choice for racing through rough trails and big jumps. World class performance speaks for itself.",
        price: 5099,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});

  }
};
