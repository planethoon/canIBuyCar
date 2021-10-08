'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const testUser = [
      {
        email: 'testA@gmail.com',
        username: 'testA',
        password: '1234',
        createdAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
      },
      {
        email: 'testB@gmail.com',
        username: 'testB',
        password: '1234',
        createdAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
      },
      {
        email: 'testC@gmail.com',
        username: 'testC',
        password: '1234',
        createdAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
      },
    ];
    await queryInterface.bulkInsert('Users', testUser, {});

    const comments = [
      {
        text: 'abcdefg',
        createdAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
        updatedAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
      },
      {
        text: 'hijklmn',
        createdAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
        updatedAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
      },
      {
        text: 'opqrstuv',
        createdAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
        updatedAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
      }
    ]
    await queryInterface.bulkInsert('Comments', comments, {})

    const users = await queryInterface.sequelize.query(`SELECT id FROM Users;`)
    const comment = await queryInterface.sequelize.query(`SELECT id FROM Comments;`)
    const usersRows = users[0]
    const commentRows = comment[0]

    const userComment = []
    for(let i = 0; i < usersRows.length; i++) {
      let result = {
        userId: usersRows[i].id,
        commentId: commentRows[i].id,
        createdAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
        updatedAt: new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
      }
      userComment.push(result)
    }
    await queryInterface.bulkInsert('Users_comments', userComment)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
    await queryInterface.bulkDelete('Comments', null, {})
    await queryInterface.bulkDelete('Users_comments', null, {})
  },
};
