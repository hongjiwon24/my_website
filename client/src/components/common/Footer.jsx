// components/common/Footer.jsx
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterSection>
      <FooterWrapper>
        <FooterText>본 페이지는 상업적 목적이 아닌  개인 포트폴리오용으로 제작되었습니다.</FooterText>
        <FooterText>ⓒ Copyright Jiwon Hong. All rights reserved.</FooterText>
      </FooterWrapper>
    </FooterSection>
  );
}

// Footer 전용 Section
const FooterSection = styled.section`
  height: 200px;
  padding: 0;
  background-color: #415E70;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: none !important;
`;

const FooterWrapper = styled.footer`
  padding: 40px 20px;
  color: #bbc9d1ff;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;
