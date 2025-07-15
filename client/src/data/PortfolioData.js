const PortfolioData = [
  {
    title: '배우다',
    heading: '[WEB] 배우다 온라인 학습 플랫폼',
    desc: 'AI 기반 온라인 학습 서비스로, 추천 알고리즘을 통해 사용자 맞춤 강의를 제공합니다.',
    tech: ['React', 'Node.js', 'MongoDB', 'Illustrator'],
    type: '팀 프로젝트 (참여도 60%)',
    image: '/images/baeooda.png',
    video: '/videos/baeooda.mp4',
    detail: {
      duration: '총 30일',
      members: [
        {
          name: '홍지원',
          role: '사이트 디자인, 사이트 구현, 검색 기능 구현, 장바구니 기능 구현, 로컬스토리지 연동',
        },
        {
          name: '이주영',
          role: '사이트 구현, 로그인/회원가입 기능 구현, API 연결, DB(데이터베이스) 연동',
        },
      ],
    },
  },
  {
    title: '푸피',
    heading: '[WEB] 푸피 인형 커머스 플랫폼',
    desc: '육아 중이거나 유아 선물 구매를 고려하는 20~30대 여성을 타겟으로 한 유아 인형 웹사이트 프로젝트입니다.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Illustrator'],
    type: '개인 프로젝트 (참여도 100%)',
    image: '/images/pupi.png',
    video: '/videos/pupi.mp4',
    detail: {
      duration: '총 30일',
      members: [
        {
          name: '홍지원',
          role: '기획, 디자인, 퍼블리싱, Vue.js로 구현',
        },
      ],
    },
  },
  {
    title: '멜로아',
    heading: '[MOBILE] 멜로아 음원 다운로드 서비스',
    desc: '음원 검색, 다운로드, 감상이 가능한 콘텐츠 중심의 웹 서비스입니다.',
    tech: ['React', 'Firebase', 'Styled-components'],
    type: '개인 프로젝트 (참여도 100%)',
    image: '/images/phone.jpg',
    video: '/videos/meloa.mp4',
    detail: {
      duration: '총 30일',
      members: [
        {
          name: '홍지원',
          role: '음원 검색, 재생, 다운로드 기능 구현 및 Firebase 연동',
        },
                {
          name: '이한별',
          role: '사이트 구현, 로그인/회원가입 기능 구현, API 연결, DB(데이터베이스) 연동',
        },
                {
          name: '양해지',
          role: '사이트 구현, 로그인/회원가입 기능 구현, API 연결, DB(데이터베이스) 연동',
        },
        
      ],
    },
  },
];

export default PortfolioData;
