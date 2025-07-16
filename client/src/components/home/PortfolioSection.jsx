// src/components/home/ProjectTabs.jsx
import styled from 'styled-components';
import React, { useState } from 'react';
import DetailModal from '../common/DetailModal';
import tabData from '../../data/PortfolioData';

export default function ProjectTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const active = tabData[activeIndex];

  return (
    <Section>
      <ProjectSection>
        <Title>PORTFOLIO</Title>
        <TabMenu>
          {tabData.map((tab, index) => (
            <TabItem
              key={index}
              $active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              {tab.title}
            </TabItem>
          ))}
        </TabMenu>
      
        <ContentWrapper>
          <MockupImage src={active.image} alt={`${active.title} 사이트 목업 이미지`} />

          <TabContent>
            <Heading>{active.heading}</Heading>
            <Description>{active.desc}</Description>
            <DetailList>
              <DetailItem>
                <LabelRow>
                  <AccentDot />
                  <LabelText>기술 스택</LabelText>
                </LabelRow>
                <DetailDescription>{active.tech.join(' · ')}</DetailDescription>
              </DetailItem>
              <DetailItem>
                <LabelRow>
                  <AccentDot />
                  <LabelText>프로젝트 구분</LabelText>
                </LabelRow>
                <DetailDescription>{active.type}</DetailDescription>
              </DetailItem>
            </DetailList>
            <ButtonGroup>
              <DetailButton onClick={() => setIsModalOpen(true)}>상세보기</DetailButton>
              <VisitButton as="a" href={active.link || '#'} target="_blank" rel="noopener noreferrer">
                사이트 방문하기
              </VisitButton>
            </ButtonGroup>
          </TabContent>
        </ContentWrapper>

        {isModalOpen && (
          <DetailModal
            onClose={() => setIsModalOpen(false)}
            data={active}
          />
        )}
      </ProjectSection>
    </Section>
  );
}

// Styled Components

const Section = styled.div`
  margin: 0 auto;
  padding: 158px 0 0 0;
  width: 1010px;
  height: 100vh;
`

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const TabMenu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const TabItem = styled.li`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? '#222' : '#aaa')};
  border-bottom: 2px solid ${({ $active }) => ($active ? '#222' : 'transparent')};
  padding-bottom: 0.3rem;
  transition: color 0.2s ease, border-bottom-color 0.2s ease;

  &:hover {
    color: #222;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2.7rem;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MockupImage = styled.img`
  width: 50%;
  max-width: 500px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TabContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1.5rem;
  }
`;

const Heading = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 27px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 27px;
  line-height: 1.2;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 35px;
`;

const DetailItem = styled.li`
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 0.8rem;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const LabelText = styled.span`
  font-weight: bold;
  font-size: 0.95rem;
  margin-left: 0.5rem;
`;

const AccentDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #7BBFC8;
  border-radius: 50%;
  display: inline-block;
`;

const DetailDescription = styled.p`
  padding-left: 1rem;
  line-height: 1.5;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  padding: 0;
`;

const DetailButton = styled.button`
  padding: 12px 40px;
  background-color: #277FB5;
  border: none;
  color: #fafafa;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #135781ff;
  }
`;

const VisitButton = styled.button`
  padding: 12px 40px;
  background-color: #277FB5;
  border: none;
  color: #fafafa;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #135781ff;
    color: #fafafa;
  }
`;
