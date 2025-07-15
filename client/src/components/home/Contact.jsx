import styled from 'styled-components';

export default function PortfolioSection() {
  return (
    <section>
      <Title>CONTACT</Title>
      <Content>
      </Content>
    </section>
  );
}

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`

const Content = styled.div`
  display: flex;
  gap: 54px;
  flex-wrap: wrap;
`