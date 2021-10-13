'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const text = [
      {
        year: 2,
        text: '알에서 태어나셨다면~~~? 사실 수 있었을 것 같아요~~~',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 32,
        text: '철기부터 열심히 모으셨다면 사실 수 있었네요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 194,
        text: '고구려 때부터 모았다면 사실 수 있었는데.... 아쉬워요....',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 260,
        text: '고이왕 때부터 돈을 고이 모아두었다면 사실 수 있어요! 꺄하!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 400,
        text: '광개토대왕님 옆에서 열심히 전쟁에 나가셨다면 이 차를 사실 수 있었어요~',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 416,
        text: '장수왕 시절부터 장수하시면서 모았다면 사실 수 있어요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 502,
        text: '지증왕 시절부터 지주셨다면 이 차를 사실 수 있어요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 612,
        text: '살수대첩에서 살아남은 당신! 이 차를 사실 자격이 충분합니다',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 640,
        text: '첨성대로 별을 볼 때부터 모았다면 사실 수 있었어요 :-)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 828,
        text: '청해진을 설치했을 때부터 저축을 했다면 바로 사실 수 있어요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 901,
        text: '혹시..... 궁예셨다면? 지금 바로 사실 수 있어요:-)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 918,
        text: '왕건이었다면 지금 사실 수 있으세요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 935,
        text: '신라가 멸망할 때부터 모았다면 사실 수 있었을 텐데, 너무 아쉬워요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 958,
        text: '과거제도 시작했던 시절부터 양반 신분으로 돈을 모으셨다면 사실 수 있어요ㅎㅎ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1019,
        text: '강감찬 장군과 함께 귀주대첩에 참여한 군인이 그때부터 모았으면 샀네요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1107,
        text: '윤관 장군이 여진 정벌할 때부터 적금 모았으면 지금쯤 타고다니시겠네요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1170,
        text: '당신이 무신정변에서 살아남아 그 때부터 모았으면 드림카는 당신의 것!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1236,
        text: '팔만대장경을 만들때부터 모았으면 지금쯤 이 차로 드라이브 중!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1372,
        text: '현존하는 최고의 금속활자본인 직지심체요절이 만들어질때 쯤부터 모았으면 살 수 있었어요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1392,
        text: '조선의 개국공신이 지금까지 매달 그만큼 모아왔으면 이 차 샀겠는데요?',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1446,
        text: '당신이 훈민정음 반포에 공이 있는 집현전 학자였고 매달 그만큼 모았다면 지금 그 차의 오너!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1592,
        text: '임진왜란에서 살아남아서 계속 저축했으면 살 수 있었어요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1796,
        text: '수원화성을 지어질 때 참가해서 성벽쌓아 매달 이렇게 모았으면 가능!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1884,
        text: '최초의 우체국 우정국 직원으로 출근해서 오늘까지 돈 모았으면 샀네요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1896,
        text: '독립신문이 편찬될 때부터 모았으면 살 수 있었는데 아쉽네요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1897,
        text: '대한제국이 선포 될 때부터 모았다면 당신이 그 차의 오너!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1919,
        text: '임시정부가 수립될 때부터 모았으면 살 수 있었어요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1936,
        text: '좀 더 일찍시작하지!, 손기정님이 베를린 올림픽 마라톤 우승할 때부터 모았으면 벌써 당신 차인데!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1950,
        text: '6.25전쟁으로 정신없는 와중에도 꾸준히 그만큼 매달 모을 수 있었다면 살 수 있었어요',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 1988,
        text: '서울올림픽을 보면서 "이제 드림카를 위해 돈모아볼까?" 라고 생각했다면 샀네요!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        year: 2002,
        text: '그깟 공놀이! 남들이 월드컵볼 때 매달 모아왔으면 이 차의 오너는 당신!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Results', text, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Results', null, {});
  },
};
