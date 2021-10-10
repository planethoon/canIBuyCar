'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carList = [
      {
        brand: 'BENZ',
        name: 'Mybach GLS',
        type: '대형 SUV',
        price: 25660,
        img: 'https://autoimg.danawa.com/gallery/3823/20210930_3823%20(1).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'The new Maybach',
        type: '대형 세단',
        price: 26060,
        img: 'https://autoimg.danawa.com/gallery/4011/20210930_4011%20(3).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'S-Class',
        type: '대형 세단',
        price: 13460,
        img: 'https://autoimg.danawa.com/gallery/3511/003.jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'GLS-Class',
        type: '대형 SUV',
        price: 13860,
        img: 'https://autoimg.danawa.com/gallery/3693/20200219%20(8).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'The New AMG GT',
        type: '스포츠카',
        price: 17960,
        img: 'https://autoimg.danawa.com/gallery/3982/20210901%20(1).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'G-Class',
        type: '대형 SUV',
        price: 16060,
        img: 'https://autoimg.danawa.com/gallery/3753/20190816%20(1).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'GLA-Class',
        type: '소형 SUV',
        price: 5260,
        img: 'https://autoimg.danawa.com/gallery/3832/20200429%20(27).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'AMG GT',
        type: '스포츠카',
        price: 13660,
        img: 'https://autoimg.danawa.com/gallery/3211/20201111%20(6).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'E-Class',
        type: '준대형 세단',
        price: 6920,
        img: 'https://autoimg.danawa.com/gallery/3331/18C0338_003.jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'CLS-Class',
        type: '준대형 세단',
        price: 8770,
        img: 'https://autoimg.danawa.com/gallery/3582/18C0160_041.jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'CLA-Class',
        type: '준준형 세단',
        price: 5450,
        img: 'https://autoimg.danawa.com/gallery/3704/20201027%20(1).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'The new S-Class',
        type: '준대형 세단',
        price: 13760,
        img: 'https://autoimg.danawa.com/gallery/3992/20210806%20(2).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'C-Class',
        type: '중형 세단',
        price: 5080,
        img: 'https://autoimg.danawa.com/gallery/3636/20181120%20(2).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'A-Class',
        type: '준중형 세단',
        price: 3940,
        img: 'https://autoimg.danawa.com/gallery/3691/20190328_B_3.jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'GLE-Class',
        type: '대형 SUV',
        price: 9970,
        img: 'https://autoimg.danawa.com/gallery/3693/20200219%20(5).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'GLC-Class',
        type: '중형 SUV',
        price: 6900,
        img: 'https://autoimg.danawa.com/gallery/3707/20190418_a_4.jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'GLB-Class',
        type: '소형 SUV',
        price: 5270,
        img: 'https://autoimg.danawa.com/gallery/3733/20191127%20(53).jpg?resize=1200:*',
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
        brand: 'BENZ',
        name: 'The New E-Class',
        type: '준대형 세단',
        price: 6450,
        img: 'https://autoimg.danawa.com/gallery/3757/20200304%20(32).jpg?resize=1200:*',
        createdAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
      }
    ];

    await queryInterface.bulkInsert('Cars', carList, {});
  }
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
