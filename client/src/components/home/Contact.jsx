import styled from 'styled-components';
import Footer from '../common/Footer'

export default function PortfolioSection() {
  return (
    <>
    <Section id="contact">
      <Title>CONTACT</Title>
      <SubText>확인하는대로 최대한 빠르게 회신드리겠습니다.</SubText>

      <Content>
        <ContactBlock>
          <Label>
            <Dot /> E-mail
          </Label>
          <Email>zhdzhdzhd24@gmail.com</Email>
        </ContactBlock>

        <ContactBlock>
          <Label>
            <Dot /> kakaotalk
          </Label>
          <Email>zhdzhdzhd24@gmail.com</Email>
        </ContactBlock>
      </Content>
    </Section>
    <Footer />
    </>
  );
}

const Section = styled.section`
  margin: 0 auto;
  padding: 158px 0 120px;
  width: 1010px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const SubText = styled.p`
  font-size: 15px;
  color: #444;
  margin-bottom: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContactBlock = styled.div``;

const Label = styled.p`
  font-weight: bold;
  font-size: 19px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  color: #222;
`;

const Dot = styled.span`
  width: 7px;
  height: 7px;
  background-color: #7BBFC8;
  border-radius: 50%;
  display: inline-block;
`;

const Email = styled.p`
  padding-left: 14px;
  font-size: 14px;
  color: #222;
`;
