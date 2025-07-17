// src/components/home/TitleSection.jsx
import styled from 'styled-components'

export default function TitleSection() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section>
      <Title>Web Publisher</Title>
      <Image src="/images/title.png" alt="타이틀 이미지" />
      <List>
        <ListItem onClick={() => handleScroll('about')}>ABOUT</ListItem>
        <ListItem onClick={() => handleScroll('skill')}>SKILL</ListItem>
        <ListItem onClick={() => handleScroll('portfolio')}>PORTFOLIO</ListItem>
        <ListItem onClick={() => handleScroll('contact')}>CONTACT</ListItem>
      </List>
    </Section>
  );
}

const Section = styled.section`
  margin: 0 auto;
  width: 1010px;
  min-height: 100vh;
  padding-top: 127px;
  
  @media (max-width: 768px) {
    width: 86%;
    padding-top: 50px;
  }
`

const Title = styled.h1`
  font-size: 23px;
  color: #277FB5;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 27px;
  }
`

const Image = styled.img`
  width: 100%;
  heigh: 400px;
  border-radius: 3px;
`

const List = styled.ul`
  margin: 12px 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 65px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 37px;
    margin-top: 29px;
    align-items: center;
  }
`

const ListItem = styled.li`
  cursor: pointer;
  font-size: 18px;

  &:hover{
    color: #277FB5;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`