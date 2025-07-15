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
  height: 300px;
  padding: 60px 0;
  scroll-snap-align: none !important;
`;

const FooterWrapper = styled.footer`
  margin-top: auto;
  padding: 40px 20px;
  background-color: #f9f9f9;
  color: #888;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;
