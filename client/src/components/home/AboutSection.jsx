import styled from 'styled-components';

export default function AboutSection() {
  return (
    <section>
      <Title>ABOUT ME</Title>
      <ContentWrapper>
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
        <InfoItem><span>생년월일</span>1999.07.16</InfoItem>
        <InfoItem><span>학력</span>안산디자인문화고등학교 졸업</InfoItem>
        <InfoItem><span>직업훈련이력</span>2025.1 - 2025.08 안산 이젠 아카데미 UI/UX 생성형AI 프론트엔드</InfoItem>
        <InfoItem><span>팀 프로젝트</span>이젠 아카데미 팀프로젝트 진행</InfoItem>
        <InfoItem><span>자격증</span>컴퓨터그래픽스운용기능사</InfoItem>
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
    </section>
  );
}


const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 54px;
  flex-wrap: wrap;
`

const ProfileArea = styled.div`
  flex: 1.4;
`

const ProfileImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 3px;
`

const IntroArea = styled.div`
  flex: 2;
`

const Name = styled.h3`
  font-size: 22px;
  margin-bottom: 19px;
  color: #222;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const AccentDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #7BBFC8;
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
`

const IntroText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;
`

// 인포 그룹
const InfoList = styled.ul`
  margin-bottom: 20px;
  padding: 12px 0;
`

const InfoItem = styled.li`
  font-size: 15px;
  line-height: 1.8;
  color: #333;
  padding: 8px 0;

  span {
    font-weight: bold;
    margin-right: 12px;
    display: inline-block;
    width: 100px;
    color: #000;
  }
`

// 키워드 그룹
const KeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
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
`

