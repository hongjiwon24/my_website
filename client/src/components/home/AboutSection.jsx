import styled from 'styled-components';

export default function AboutSection() {
  return (
    <Section>
      <Title>ABOUT ME</Title>
      <hr />
      <ContentWrapper>
          <MobileIntroText>
            “안녕하세요! 사용자 중심의 UI/UX를 고민하는 프론트엔드 개발자 홍지원입니다. <br />
            누구나 직관적으로 사용할 수 있는 웹 서비스를 만들기 위해 끊임없이 배우고 도전합니다.”
          </MobileIntroText>
        <ProfileArea>
          <ProfileImage src="/images/profile.jpg" alt="프로필 사진" />
        </ProfileArea>

        <IntroArea>
          <Name>HONG JIWON <AccentDot /></Name>
          <IntroText>
            “안녕하세요! 사용자 중심의 UI/UX를 고민하는 프론트엔드 개발자 홍지원입니다. <br />
            누구나 직관적으로 사용할 수 있는 웹 서비스를 만들기 위해 끊임없이 배우고 도전합니다.”
          </IntroText>

        <InfoList>
          <InfoItem>
            <span className="label">생년월일</span>
            <span className="content">1999.07.16</span>
          </InfoItem>
          <InfoItem>
            <span className="label">학력</span>
            <span className="content">안산디자인문화고등학교 졸업</span>
          </InfoItem>
          <InfoItem>
            <span className="label">직업훈련이력</span>
            <span className="content">2025.1 - 2025.08 안산 이젠 아카데미 UI/UX 생성형AI 프론트엔드</span>
          </InfoItem>
          <InfoItem>
            <span className="label">팀 프로젝트</span>
            <span className="content">이젠 아카데미 팀프로젝트 진행</span>
          </InfoItem>
          <InfoItem>
            <span className="label">자격증</span>
            <span className="content">컴퓨터그래픽스운용기능사</span>
          </InfoItem>
        </InfoList>


        <KeywordList>
        <KeywordItem className="active">ENFJ</KeywordItem>
        <KeywordItem>책임감 있는</KeywordItem>
        <KeywordItem>성실한</KeywordItem>
        <KeywordItem>따뜻한</KeywordItem>
        <KeywordItem>긍정적인</KeywordItem>
        <KeywordItem>리더십</KeywordItem>
        </KeywordList>
        </IntroArea>
      </ContentWrapper>
    </Section>
  );
}


const Section = styled.div`
  margin: 0 auto;
  padding: 158px 0 0 0;
  width: 1010px;
  min-height: 100vh;

  @media (max-width: 768px) {
    width: 86%;
    padding-top: 50px;
  }
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 19px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 54px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`

const ProfileArea = styled.div`
  flex: 1.4;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ProfileImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 3px;

  @media (max-width: 768px) {
    display: none;
    height: 300px;
  }
`

const IntroArea = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Name = styled.h3`
  font-size: 20px;
  margin-bottom: 19px;
  color: #222;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const AccentDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #7BBFC8;
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileIntroText = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 15px;
    margin-bottom: 19px;
    color: #333;
  }
`

const IntroText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 19px;
  color: #333;

  @media (max-width: 768px) {
    display: none;
  }
`

// 인포 그룹
const InfoList = styled.ul`
  margin-bottom: 27px;
  padding: 12px 0;

  @media (max-width: 768px) {
    background-color: #ccc;
    padding: 20px 24px;
    border-radius: 10px;
  }
`

const InfoItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
  font-size: 15px;
  line-height: 1.6;
  color: #333;

  .label {
    width: 100px;
    font-weight: bold;
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    flex-direction: column;
  
  }

  .content {
    flex: 1;
    word-break: keep-all;
    min-width: 0;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;


// 키워드 그룹
const KeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 17px;

  @media (max-width: 768px) {
   gap: 10px
  }
`

const KeywordItem = styled.li`
  padding: 8px 37px;
  border-radius: 20px;
  font-size: 15px;
  border: 1px dashed #B0B6B9;
  color: #B0B6B9;
  font-weight: bold;
  transition: all 0.1s ease;

  &:hover,
  &.active {
    background-color: #7BBFC8;
    color: white;
    border-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

