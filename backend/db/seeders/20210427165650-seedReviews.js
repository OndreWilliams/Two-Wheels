'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          content: "Incredible bike, fantastic value for money! Love the colour and finish on the frame. Very impressed with the shipping. It’s a 10/10 for me!!",
          rating: 5,
          userId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Very happy with the bike although I did expect run flat tyres already to be on it and maybe some peddles but other than that very happy with it",
          rating: 5,
          userId: 2,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Very nice bike! Im very happy and I can’t wait for summer 😆",
          rating: 5,
          userId: 3,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "I am really pleased with my MTB that I ordered from Canyon I would recommend them to everyone.",
          rating: 5,
          userId: 4,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "No doubts about the quality and reliability of the bike and components, it is a fun and agile bike",
          rating: 4,
          userId: 5,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Amazing bike, good value. mine had some paint damage on the frame and fork, but overall very nice.",
          rating: 5,
          userId: 6,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "I love my new bike",
          rating: 5,
          userId: 7,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "This bike absolutely loves to fly!",
          rating: 5,
          userId: 8,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Solid components for the money",
          rating: 4,
          userId: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Great bike with an amazing paint job!",
          rating: 5,
          userId: 2,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Well worth the money",
          rating: 4,
          userId: 3,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
