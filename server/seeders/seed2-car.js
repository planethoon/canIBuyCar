'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carList = [
      {
        brand: 'BENZ',
        name: 'Mybach GLS',
        type: '대형 SUV',
        price: 25660,
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
        brand: 'BENZ',
        name: 'The new Maybach',
        type: '대형 세단',
        price: 26060,
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
        brand: 'BENZ',
        name: 'S-Class',
        type: '대형 세단',
        price: 13460,
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
        brand: 'BENZ',
        name: 'GLS-Class',
        type: '대형 SUV',
        price: 13860,
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
        brand: 'BENZ',
        name: 'The New AMG GT',
        type: '스포츠카',
        price: 17960,
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
        brand: 'BENZ',
        name: 'G-Class',
        type: '대형 SUV',
        price: 16060,
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
        brand: 'BENZ',
        name: 'GLA-Class',
        type: '소형 SUV',
        price: 5260,
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
        brand: 'BENZ',
        name: 'AMG GT',
        type: '스포츠카',
        price: 13660,
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
        brand: 'BENZ',
        name: 'E-Class',
        type: '준대형 세단',
        price: 6920,
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
        brand: 'BENZ',
        name: 'CLS-Class',
        type: '준대형 세단',
        price: 8770,
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
        brand: 'BENZ',
        name: 'CLA-Class',
        type: '준준형 세단',
        price: 5450,
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
        brand: 'BENZ',
        name: 'The new S-Class',
        type: '준대형 세단',
        price: 13760,
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
        brand: 'BENZ',
        name: 'C-Class',
        type: '중형 세단',
        price: 5080,
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
        brand: 'BENZ',
        name: 'A-Class',
        type: '준중형 세단',
        price: 3940,
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
        brand: 'BENZ',
        name: 'GLE-Class',
        type: '대형 SUV',
        price: 9970,
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
        brand: 'BENZ',
        name: 'GLC-Class',
        type: '중형 SUV',
        price: 6900,
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
        brand: 'BENZ',
        name: 'GLB-Class',
        type: '소형 SUV',
        price: 5270,
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
        brand: 'BENZ',
        name: 'The New E-Class',
        type: '준대형 세단',
        price: 6450,
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
        brand: 'AUDI',
        name: 'R8',
        type: '스포츠카',
        price: 25569,
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
        brand: 'AUDI',
        name: 'A8',
        type: '대형 세단',
        price: 13696,
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
        brand: 'AUDI',
        name: 'A7',
        type: '준대형 세단',
        price: 8924,
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
        brand: 'AUDI',
        name: 'A6',
        type: '준대형 세단',
        price: 6457,
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
        brand: 'AUDI',
        name: 'A5',
        type: '중형 세단',
        price: 5701,
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
        brand: 'AUDI',
        name: 'A4',
        type: '중형 세단',
        price: 4936,
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
        brand: 'AUDI',
        name: 'e-tron',
        type: '대형 SUV',
        price: 9506,
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
        brand: 'AUDI',
        name: 'Q8',
        type: '대형 SUV',
        price: 10244,
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
        brand: 'AUDI',
        name: 'Q7',
        type: '대형 SUV',
        price: 9129,
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
        brand: 'AUDI',
        name: 'Q5',
        type: '중형 SUV',
        price: 6410,
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
        brand: '제네시스',
        name: 'g90',
        type: '대형 세단',
        price: 15757,
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
        brand: '제네시스',
        name: 'g80',
        type: '준대형 세단',
        price: 8281,
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
        brand: '제네시스',
        name: 'gv60',
        type: '소형 SUV',
        price: 6975,
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
        brand: '제네시스',
        name: 'gv80',
        type: '대형 SUV',
        price: 7284,
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
        brand: '제네시스',
        name: 'gv70',
        type: '중형 SUV',
        price: 6038,
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
        brand: '제네시스',
        name: 'g70',
        type: '중형 세단',
        price: 5105,
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
        brand: '포르쉐',
        name: '파나메라',
        type: '스포츠카',
        price: 29520,
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
        brand: '포르쉐',
        name: '911',
        type: '스포츠카',
        price: 29390,
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
        brand: '포르쉐',
        name: '타이칸',
        type: '스포츠카',
        price: 23760,
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
        brand: '포르쉐',
        name: '카이엔',
        type: '대형 SUV',
        price: 23410,
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
        brand: '포르쉐',
        name: '박스터',
        type: '스포츠카',
        price: 13310,
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
        brand: '포르쉐',
        name: '카이멘',
        type: '스포츠카',
        price: 11690,
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
        brand: '포르쉐',
        name: '마칸',
        type: '대형 SUV',
        price: 10190,
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
        brand: '캐딜락',
        name: '에스컬레이드',
        type: '대형 SUV',
        price: 15357,
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
        brand: '캐딜락',
        name: 'xt6',
        type: '대형 SUV',
        price: 8391,
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
        brand: '캐딜락',
        name: 'xt5',
        type: '대형 SUV',
        price: 7582,
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
        brand: '캐딜락',
        name: 'ct5',
        type: '준대형 세단',
        price: 5921,
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
        brand: '캐딜락',
        name: 'xt4',
        type: '중형 SUV',
        price: 5531,
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
        brand: '캐딜락',
        name: 'ct4',
        type: '중형 세단',
        price: 4935,
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
        brand: '기아',
        name: '소렌토',
        type: '중형 SUV',
        price: 2985,
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
        brand: '기아',
        name: '스포티지',
        type: '중형 SUV',
        price: 2442,
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
        brand: '기아',
        name: '카니발',
        type: '대형 MPV',
        price: 3180,
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
        brand: '기아',
        name: 'k8',
        type: '준대형 세단',
        price: 2755,
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
        brand: '기아',
        name: 'k5',
        type: '중형 세단',
        price: 2100,
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
        brand: '기아',
        name: 'ev6',
        type: '중형 Suv',
        price: 4630,
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
        brand: '기아',
        name: '셀토스',
        type: '소형 SUV',
        price: 1944,
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
        brand: '기아',
        name: 'k3',
        type: '준중형 세단',
        price: 1738,
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
        brand: '기아',
        name: '스팅어',
        type: '중형 세단',
        price: 3853,
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
        brand: '기아',
        name: '모닝',
        type: '경차',
        price: 1175,
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
        brand: 'BMW',
        name: '2Series',
        type: '준중형 세단',
        price: 4200,
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
        brand: 'BMW',
        name: '3Series',
        type: '중형 세단',
        price: 5170,
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
        brand: 'BMW',
        name: '4Series',
        type: '중형 세단',
        price: 5930,
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
        brand: 'BMW',
        name: '5Series',
        type: '준대형 세단',
        price: 6410,
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
        brand: 'BMW',
        name: '6Series',
        type: '준대형 세단',
        price: 8210,
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
        brand: 'BMW',
        name: '7Series',
        type: '대형 세단',
        price: 13870,
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
        brand: 'BMW',
        name: 'x3',
        type: '중형 SUV',
        price: 6410,
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
        brand: 'BMW',
        name: 'x5',
        type: '대형 SUV',
        price: 10140,
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
        brand: 'BMW',
        name: 'x7',
        type: '대형 SUV',
        price: 12630,
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
        brand: 'BMW',
        name: 'm5',
        type: '스포츠카',
        price: 16180,
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
        brand: 'BMW',
        name: 'm3',
        type: '스포츠카',
        price: 12170,
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
        brand: 'BMW',
        name: 'm8',
        type: '스포츠카',
        price: 23670,
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
        brand: 'TESLA',
        name: 'modelS',
        type: '준대형 세단',
        price: 1199,
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
        brand: 'TESLA',
        name: 'model3',
        type: '준중형 세단',
        price: 5479,
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
        brand: 'TESLA',
        name: 'modelX',
        type: '대형 SUV',
        price: 1299,
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
        brand: 'TESLA',
        name: 'modelY',
        type: '중형 SUV',
        price: 5999,
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
        brand: 'HYUNDAI',
        name: '아반떼',
        type: '준중형 세단',
        price: 1570,
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
        brand: 'HYUNDAI',
        name: '팰리세이드',
        type: '대형 SUV',
        price: 3606,
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
        brand: 'HYUNDAI',
        name: '그랜저',
        type: '준대형 세단',
        price: 2731,
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
        brand: 'HYUNDAI',
        name: '소나타',
        type: '중형 세단',
        price: 2150,
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
        brand: 'HYUNDAI',
        name: '산타페',
        type: '중형 SUV',
        price: 2975,
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
        brand: 'HYUNDAI',
        name: '투싼',
        type: '중형 SUV',
        price: 2435,
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
        brand: 'HYUNDAI',
        name: '캐스퍼',
        type: '경차',
        price: 1385,
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
        brand: 'HYUNDAI',
        name: '베뉴',
        type: '소형 SUV',
        price: 1662,
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
        brand: 'HYUNDAI',
        name: '코나',
        type: '소형 SUV',
        price: 1962,
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
        brand: 'HYUNDAI',
        name: '아이오닉5',
        type: '중형 SUV',
        price: 4695,
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
        brand: 'RENAULTSAMSUNG',
        name: 'XM3',
        type: '소형 SUV',
        price: 2641,
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
        brand: 'RENAULTSAMSUNG',
        name: 'SM6',
        type: '중형 세단',
        price: 3387,
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
        brand: 'RENAULTSAMSUNG',
        name: 'QM5',
        type: '중형 SUV',
        price: 3320,
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
        brand: 'RENAULTSAMSUNG',
        name: 'QM6',
        type: '중형 SUV',
        price: 3908,
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
        brand: 'RENAULTSAMSUNG',
        name: 'SM5',
        type: '중형 세단',
        price: 2155,
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
        brand: 'RENAULTSAMSUNG',
        name: 'SM3 Z.E.',
        type: '중형 세단',
        price: 4090,
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
        brand: 'RENAULTSAMSUNG',
        name: 'SM7',
        type: '대형 세단',
        price: 3302,
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

    const users = await queryInterface.sequelize.query(`SELECT id FROM Users;`)
    const car = await queryInterface.sequelize.query(`SELECT id FROM Cars WHERE brand='TESLA';`)
    const usersRows = users[0]
    const carRows = car[0]

    const userCar = []
    for(let i = 0; i < usersRows.length; i++) {
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
      }
      userCar.push(result)
    }
    await queryInterface.bulkInsert('Users_cars', userCar)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cars', null, {});
  },
};