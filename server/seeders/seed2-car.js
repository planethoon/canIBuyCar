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
      },

      {
        brand: 'AUDI',
        name: 'R8',
        type: '스포츠카',
        price: 25569,
        img: 'https://autoimg.danawa.com/gallery/4029/20210201_R8_ex%20(6).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'A8',
        type: '대형 세단',
        price: 13696,
        img: 'https://autoimg.danawa.com/gallery/3719/20191128_A8L%20(45).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'A7',
        type: '준대형 세단',
        price: 8924,
        img: 'https://autoimg.danawa.com/gallery/3537/RS7_20210729%20(10).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'A6',
        type: '준대형 세단',
        price: 6457,
        img: 'https://autoimg.danawa.com/gallery/3713/RS6_20210729%20(48).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'A5',
        type: '중형 세단',
        price: 5701,
        img: 'https://autoimg.danawa.com/gallery/3900/210708_20210701%20(53).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'A4',
        type: '중형 세단',
        price: 4936,
        img: 'https://autoimg.danawa.com/gallery/3899/A195675_medium.jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'e-tron',
        type: '대형 SUV',
        price: 9506,
        img: 'https://autoimg.danawa.com/gallery/3667/20190125_e-tron%20(32).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'Q8',
        type: '대형 SUV',
        price: 10244,
        img: 'https://autoimg.danawa.com/gallery/3715/20210611_RSQ8%20(63).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'Q7',
        type: '대형 SUV',
        price: 9129,
        img: 'https://autoimg.danawa.com/gallery/3739/20200515_Q7%20(9).jpg?resize=1200:*',
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
        brand: 'AUDI',
        name: 'Q5',
        type: '중형 SUV',
        price: 6410,
        img: 'https://autoimg.danawa.com/gallery/4074/210610_ex%20(18).jpg?resize=1200:*',
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
        brand: 'GENESIS',
        name: 'g90',
        type: '대형 세단',
        price: 15757,
        img: 'https://autoimg.danawa.com/gallery/3602/20200626_G90-(1-2).jpg?resize=1200:*',
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
        brand: 'GENESIS',
        name: 'g80',
        type: '준대형 세단',
        price: 8281,
        img: 'https://autoimg.danawa.com/gallery/3656/20210611_g80ev%20(5).jpg?resize=1200:*',
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
        brand: 'GENESIS',
        name: 'gv60',
        type: '소형 SUV',
        price: 6975,
        img: 'https://autoimg.danawa.com/gallery/4015/20210916_4015%20(1).jpg?resize=1200:*',
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
        brand: 'GENESIS',
        name: 'gv80',
        type: '대형 SUV',
        price: 7284,
        img: 'https://autoimg.danawa.com/gallery/3657/200115_GV80-(2).jpg?resize=1200:*',
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
        brand: 'GENESIS',
        name: 'gv70',
        type: '중형 SUV',
        price: 6038,
        img: 'https://autoimg.danawa.com/gallery/3849/gv70_20201208%20(3).jpg?resize=1200:*',
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
        brand: 'GENESIS',
        name: 'g70',
        type: '중형 세단',
        price: 5105,
        img: 'https://autoimg.danawa.com/gallery/3995/4.jpg?resize=1200:*',
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
        brand: 'PORSCHE',
        name: '파나메라',
        type: '스포츠카',
        price: 29520,
        img: 'https://autoimg.danawa.com/gallery/3989/20200827_panamera%20(4).jpg?resize=1200:*',
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
        brand: 'PORSCHE',
        name: '911',
        type: '스포츠카',
        price: 29390,
        img: 'https://autoimg.danawa.com/gallery/3666/20200618_911_edition%20(6).jpg?resize=1200:*',
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
        brand: 'PORSCHE',
        name: '타이칸',
        type: '스포츠카',
        price: 23760,
        img: 'https://autoimg.danawa.com/gallery/3724/20191111_taycan_4s-(5).jpg?resize=1200:*',
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
        brand: 'PORSCHE',
        name: '카이엔',
        type: '대형 SUV',
        price: 23410,
        img: 'https://autoimg.danawa.com/gallery/3521/20190131_cayenne%20(4).jpg?resize=1200:*',
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
        brand: 'PORSCHE',
        name: '박스터',
        type: '스포츠카',
        price: 13310,
        img: 'https://autoimg.danawa.com/gallery/3336/20180419%20(3).jpg?resize=1200:*',
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
        brand: 'PORSCHE',
        name: '카이멘',
        type: '스포츠카',
        price: 11690,
        img: 'https://autoimg.danawa.com/gallery/3361/20180419%20(3).jpg?resize=1200:*',
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
        brand: 'PORSCHE',
        name: '마칸',
        type: '대형 SUV',
        price: 10190,
        img: 'https://autoimg.danawa.com/gallery/3626/20190830%20(4).jpg?resize=1200:*',
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
        brand: 'CADILLAC',
        name: '에스컬레이드',
        type: '대형 SUV',
        price: 15357,
        img: 'https://autoimg.danawa.com/gallery/3850/202106%20(1).JPG?resize=1200:*',
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
        brand: 'CADILLAC',
        name: 'xt6',
        type: '대형 SUV',
        price: 8391,
        img: 'https://autoimg.danawa.com/gallery/3860/20200317%20(1).jpg?resize=1200:*',
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
        brand: 'CADILLAC',
        name: 'xt5',
        type: '대형 SUV',
        price: 7582,
        img: 'https://autoimg.danawa.com/gallery/3866/20200401%20(2).jpg?resize=1200:*',
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
        brand: 'CADILLAC',
        name: 'ct5',
        type: '준대형 세단',
        price: 5921,
        img: 'https://autoimg.danawa.com/gallery/3709/20190419%20(1).jpg?resize=1200:*',
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
        brand: 'CADILLAC',
        name: 'xt4',
        type: '중형 SUV',
        price: 5531,
        img: 'https://autoimg.danawa.com/gallery/4036/210321%20(11).jpg?resize=1200:*',
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
        brand: 'CADILLAC',
        name: 'ct4',
        type: '중형 세단',
        price: 4935,
        img: 'https://autoimg.danawa.com/gallery/3774/20190916%20(12).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: '소렌토',
        type: '중형 SUV',
        price: 2985,
        img: 'https://autoimg.danawa.com/gallery/3837/20210701%20(1).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: '스포티지',
        type: '중형 SUV',
        price: 2442,
        img: 'https://autoimg.danawa.com/gallery/4069/20210818%20(1).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: '카니발',
        type: '대형 MPV',
        price: 3180,
        img: 'https://autoimg.danawa.com/gallery/3910/20210712%20(1).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: 'k8',
        type: '준대형 세단',
        price: 2755,
        img: 'https://autoimg.danawa.com/gallery/4017/20210930_4017%20(21).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: 'k5',
        type: '중형 세단',
        price: 2100,
        img: 'https://autoimg.danawa.com/gallery/3742/20210624%20(1).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: 'ev6',
        type: '중형 Suv',
        price: 4630,
        img: 'https://autoimg.danawa.com/gallery/4022/20210604%20(41).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: '셀토스',
        type: '소형 SUV',
        price: 1944,
        img: 'https://autoimg.danawa.com/gallery/3699/20190626%20(1).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: 'k3',
        type: '준중형 세단',
        price: 1738,
        img: 'https://autoimg.danawa.com/gallery/4057/20210414%20(1).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: '스팅어',
        type: '중형 세단',
        price: 3853,
        img: 'https://autoimg.danawa.com/gallery/3985/20210906%20(1).jpg?resize=1200:*',
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
        brand: 'KIA',
        name: '모닝',
        type: '경차',
        price: 1175,
        img: 'https://autoimg.danawa.com/gallery/3871/20200513%20(4).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: '2시리즈',
        type: '준중형 세단',
        price: 4200,
        img: 'https://autoimg.danawa.com/gallery/3803/20210707%20(1).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: '3시리즈',
        type: '중형 세단',
        price: 5170,
        img: 'https://autoimg.danawa.com/gallery/3520/20201209%20(2).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: '4시리즈',
        type: '중형 세단',
        price: 5930,
        img: 'https://autoimg.danawa.com/gallery/3905/20210609%20(1).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: '5시리즈',
        type: '준대형 세단',
        price: 6410,
        img: 'https://autoimg.danawa.com/gallery/3901/20201019%20(2).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: '6시리즈',
        type: '준대형 세단',
        price: 8210,
        img: 'https://autoimg.danawa.com/gallery/3902/20201019%20(3).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: '7시리즈',
        type: '대형 세단',
        price: 13870,
        img: 'https://autoimg.danawa.com/gallery/3663/20210420%20(2).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: 'x3',
        type: '중형 SUV',
        price: 6410,
        img: 'https://autoimg.danawa.com/gallery/3499/20200812%20(9).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: 'x5',
        type: '대형 SUV',
        price: 10140,
        img: 'https://autoimg.danawa.com/gallery/3577/20210714%20(4).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: 'x7',
        type: '대형 SUV',
        price: 12630,
        img: 'https://autoimg.danawa.com/gallery/3665/20210714%20(1).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: 'm5',
        type: '스포츠카',
        price: 16180,
        img: 'https://autoimg.danawa.com/gallery/3914/20210419%20(2).jpg?resize=1200:*',
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
        brand: 'BMW',
        name: 'm3',
        type: '스포츠카',
        price: 12170,
        img: 'https://autoimg.danawa.com/gallery/3998/20210420.jpg?resize=1200:*',
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
        brand: 'BMW',
        name: 'm8',
        type: '스포츠카',
        price: 23670,
        img: 'https://autoimg.danawa.com/gallery/3800/20191113%20(1).jpg?resize=1200:*',
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
        brand: 'TESLA',
        name: 'modelS',
        type: '준대형 세단',
        price: 1199,
        img: 'https://autoimg.danawa.com/gallery/4043/20210312%20(2).jpg?resize=1200:*',
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
        brand: 'TESLA',
        name: 'model3',
        type: '준중형 세단',
        price: 5479,
        img: 'https://autoimg.danawa.com/gallery/3408/20160826(1).jpg?resize=1200:*',
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
        brand: 'TESLA',
        name: 'modelX',
        type: '대형 SUV',
        price: 1299,
        img: 'https://autoimg.danawa.com/gallery/4027/20210312%20(14).jpg?resize=1200:*',
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
        brand: 'TESLA',
        name: 'modelY',
        type: '중형 SUV',
        price: 5999,
        img: 'https://autoimg.danawa.com/gallery/3687/20190327%20(5).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '아반떼',
        type: '준중형 세단',
        price: 1570,
        img: 'https://autoimg.danawa.com/gallery/3821/200813_avante_hybrid-(2).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '팰리세이드',
        type: '대형 SUV',
        price: 3606,
        img: 'https://autoimg.danawa.com/gallery/3563/200506_palisade1.jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '그랜저',
        type: '준대형 세단',
        price: 2731,
        img: 'https://autoimg.danawa.com/gallery/3737/20210512_grandeur%20(4).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '소나타',
        type: '중형 세단',
        price: 2150,
        img: 'https://autoimg.danawa.com/gallery/3652/20210421%20(4).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '산타페',
        type: '중형 SUV',
        price: 2975,
        img: 'https://autoimg.danawa.com/gallery/3853/satafeHEV_210701%20(3).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '투싼',
        type: '중형 SUV',
        price: 2435,
        img: 'https://autoimg.danawa.com/gallery/3820/20200916_tucson_ex-(10).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '캐스퍼',
        type: '경차',
        price: 1385,
        img: 'https://autoimg.danawa.com/gallery/4086/210901_casper%20(1).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '베뉴',
        type: '소형 SUV',
        price: 1662,
        img: 'https://autoimg.danawa.com/gallery/3654/20201022_venue%20(3).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '코나',
        type: '소형 SUV',
        price: 1962,
        img: 'https://autoimg.danawa.com/gallery/3988/200902_kona%20(1).jpg?resize=1200:*',
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
        brand: 'HYUNDAI',
        name: '아이오닉5',
        type: '중형 SUV',
        price: 4695,
        img: 'https://autoimg.danawa.com/gallery/4013/210226_ioniq5.jpg?resize=1200:*',
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
        brand: 'RENAULTSAMSUNG',
        name: 'XM3',
        type: '소형 SUV',
        price: 2641,
        img: 'https://autoimg.danawa.com/gallery/3701/20190408%20(3).jpg?resize=1200:*',
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
        brand: 'RENAULTSAMSUNG',
        name: 'SM6',
        type: '중형 세단',
        price: 3387,
        img: 'https://autoimg.danawa.com/gallery/3979/20200716%20(5).jpg?resize=1200:*',
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
        brand: 'RENAULTSAMSUNG',
        name: 'QM6',
        type: '중형 SUV',
        price: 3908,
        img: 'https://autoimg.danawa.com/gallery/4008/20201106%20(21).jpg?resize=1200:*',
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
        brand: 'MASERATI',
        name: '르반떼',
        type: '준대형 SUV',
        price: 23910,
        img: '#',
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
        brand: 'MASERATI',
        name: '기블리',
        type: '준대형 세단',
        price: 18050,
        img: '#',
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
        brand: 'MASERATI',
        name: '콰트로포르테',
        type: '대형 세단',
        price: 24000,
        img: '#',
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
        brand: 'MASERATI',
        name: '콰트로포르테 GTS',
        type: '대형 세단',
        price: 24550,
        img: '#',
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
        brand: 'MASERATI',
        name: '그란투리스모 스포트',
        type: '대형 쿠페',
        price: 23630,
        img: '#',
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
        brand: 'MASERATI',
        name: '그란투리스모',
        type: '스포츠 쿠페',
        price: 21770,
        img: '#',
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
        brand: 'MASERATI',
        name: '그란카브리오',
        type: '스포츠 쿠페',
        price: 25090,
        img: '#',
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
        brand: 'BENTLEY',
        name: '벤테이가',
        type: '대형 SUV',
        price: 27800,
        img: '#',
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
        brand: 'BENTLEY',
        name: '벤테이가 F/L',
        type: '대형 SUV',
        price: 30900,
        img: '#',
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
        brand: 'BENTLEY',
        name: '플라잉스퍼',
        type: '대형 세단',
        price: 32300,
        img: '#',
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
        brand: 'BENTLEY',
        name: '뮬란',
        type: '대형 세단',
        price: 50500,
        img: '#',
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
        brand: 'BENTLEY',
        name: '컨티넨탈 세단',
        type: '대형 세단',
        price: 30600,
        img: '#',
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
        brand: 'BENTLEY',
        name: '컨티넨탈 GT3-R 쿠페',
        type: '대형 쿠페',
        price: 38300,
        img: '#',
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
        brand: 'BENTLEY',
        name: '컨티넨탈 쿠페',
        type: '대형 쿠페',
        price: 29000,
        img: '#',
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
        brand: 'BENTLEY',
        name: '컨티넨탈 컨버터블',
        type: '대형 컨버터블',
        price: 31200,
        img: '#',
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

    await queryInterface.bulkInsert('Cars', carList, {});

    const users = await queryInterface.sequelize.query(`SELECT id FROM Users;`);
    const car = await queryInterface.sequelize.query(
      `SELECT id FROM Cars WHERE brand='TESLA';`
    );
    const usersRows = users[0];
    const carRows = car[0];

    const userCar = [];
    for (let i = 0; i < usersRows.length; i++) {
      let result = {
        userId: usersRows[i].id,
        carId: carRows[i].id,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, ' ')
          .replace(/\..+/, ''),
      };
      userCar.push(result);
    }
    await queryInterface.bulkInsert('Users_cars', userCar);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};
