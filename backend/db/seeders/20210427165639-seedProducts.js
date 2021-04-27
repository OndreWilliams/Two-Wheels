'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [
        {
          name: 'Canyon Spectral CF8',
          imageUrl: 'https://drive.google.com/file/d/1oFbXUHWeFFV2c35AwJ9s5lSFsKvjHU9K/view?usp=sharing',
          description: 'The Spectral CF 8 is a blast to ride on any trail, but it truly comes to life when the track gets steep and technical. Stable at speed, agile in tight corners and fully-kitted out with high-quality components, this bike was built to go big.',
          price: 4599,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        name: 'Canyon Torque 5',
        imageUrl: 'https://drive.google.com/file/d/10SEK0Q5NYB6fZJKxFFpAtoERVPERDORq/view?usp=sharing',
        description: 'Challenging backcountry trails. Bike park jump lines. Big mountain adventures. The Torque 5 is a versatile gravity rig that does it all – enduro, downhill, freeride, and more.',
        price: 2599,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Canyon STCHD 360',
        imageUrl: 'https://drive.google.com/file/d/1HxQLLUDay-i7Vme6tIqKCEqiPUlk_OOX/view?usp=sharing',
        description: 'Smashing laps at the pump track or learning new tricks out on the dirt jumps, the Stitched 360 was made for the session. Ridden by some of the best freeriders in the world, it’s ready for whatever you can throw at it.',
        price: 1199,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jeffsy CORE 2',
        imageUrl: 'https://drive.google.com/file/d/1tT09aFETN3qqPZUZe9G1cU26_vM38WXn/view?usp=sharing',
        description: "Far out or nothing - with JEFFSY we have realized our very own definition of trail riding. JEFFSY is the YT among all mountain bikes, it's like your best friend for new top performances: together you climb the higher mountains!",
        price: 3999,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Decoy Base 29',
        imageUrl: 'https://drive.google.com/file/d/1Dy5tzDtQ15ayqVWt5vZ89tJawnuuw_d_/view?usp=sharing',
        description: "The DECOY 29 BASE delivers solid E-MTB performance with impressive specs, a high-end carbon frame with aluminum triangle, and the distinctive look of a YT. Its easy-to-adjust suspension and durable components make for long lasting good times.",
        price: 6399,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tues Comp',
        imageUrl: 'https://drive.google.com/file/d/12HjHwWFWvc_eO22WpIifw9NLA2pvRuLy/view?usp=sharing',
        description: "From Rampage to the World Cup, the TUES dominates the world’s toughest tracks. This incredibly fast bike is the right choice for racing through rough trails and big jumps. World class performance speaks for itself.",
        price: 5099,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OHLINS RXF36 M.2 FORK',
        imageUrl: 'https://drive.google.com/file/d/1DIpNFG0ahEuV-sVKQ1_OwF0Eid7nPjTm/view?usp=sharing',
        description: "Suspension has come a long way since the first suspension forks. With an upgraded fork, you'll be able to conquer the terrain with confidence and handle any situation. The fork is designed for aggressive trail, all-mountain, and enduro riding.",
        price: 1250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MARZOCCHI BOMBER Z1',
        imageUrl: 'https://drive.google.com/file/d/1REOB5OPW9PuNDqK2gtHHh_5sw49wS_K2/view?usp=sharing',
        description: "The Z1 returns and is better than ever. The original Z1 sparked the freeride revolution with its long travel and ultra-plush action, it unapologetically prioritized grip and ride quality over just about everything else.",
        price: 729,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SPANK SPOON FLAT PEDALS',
        imageUrl: 'https://drive.google.com/file/d/10DJwm_jrWU3sEcwUdAG3HmUHKFCP4j5K/view?usp=sharing',
        description: "Spank's alloy Spoon pedals are strong, light, and come in a few sizes to best fit varying foot sizes. They feature 20 steel pins for a great grip, and a cold forged chromoly steel axle to assure reliability.",
        price: 95,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ODI RUFFIAN LOCK ON GRIPS',
        imageUrl: 'https://drive.google.com/file/d/1b3OoOznwGWCzH-UByjybMhIRBR1KaksW/view?usp=sharing',
        description: "The Ruffian is a low-profile knurled grip perfect for those looking for extra control through rough sections. The fine control offered by the fantastically grippy rubber compound feels great under gloves, or with bare hands.",
        price: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RACE FACE GRIPPLER 33MM LOCK ON GRIPS',
        imageUrl: 'https://drive.google.com/file/d/1Yg_GlTnzh1_ienBAAyB9NKD8MqOoYCaC/view?usp=sharing',
        description: "The Race Face Grippler Lock On Grips are hard hitting and tacky grips. With a Race Face logo design that makes a perfect gripping surface, the Grippler makes for smooth, steady handling.",
        price: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '7IDP M1 HELMET',
        imageUrl: 'https://drive.google.com/file/d/1jAxOTQNOx6hKNIHlfcASqUsWvq8ww6bT/view?usp=sharing',
        description: "Aggressive riding means you should have aggressive protection. If you are shreddin' the trails and spending the day at the bike park, you should have a full-face helmet for maximum protection. The 7IDP M1 Helmet provides lightweight full-face protection.",
        price: 110,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Products', null, {});

  }
};
