import React from 'react';
import styled from 'styled-components';

export default function DetailModal({ onClose, data }) {
  const { heading, video, tech, type, detail } = data;
  const { duration, members } = detail || {};

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{heading}</Title>
          <Dot />
        </Header>

        <Preview>
          <Video controls>
            <source src={video} type="video/mp4" />
            브라우저가 video 태그를 지원하지 않습니다.
          </Video>
        </Preview>

        <InfoList>
          <InfoItem>
            <LabelRow>
              <Dot />
              <Label>기술 스택</Label>
            </LabelRow>
            <Content>{tech.join(' · ')}</Content>
          </InfoItem>

          <InfoItem>
            <LabelRow>
              <Dot />
              <Label>프로젝트 구분</Label>
            </LabelRow>
            <Content>{type}</Content>
          </InfoItem>

          {duration && (
            <InfoItem>
              <LabelRow>
                <Dot />
                <Label>진행 일정</Label>
              </LabelRow>
              <Content>{duration}</Content>
            </InfoItem>
          )}

          {members && members.length > 0 && (
            <InfoItem>
              <LabelRow>
                <Dot />
                <Label>프로젝트 팀 구성 및 역할</Label>
              </LabelRow>
              <Content>
                {members.map((member, index) => (
                  <div key={index}>
                    <strong>
                      {index === 0 ? '＊[팀장] ' : '[팀원] '}
                      {member.name}
                    </strong>
                    <br />
                    {member.role}
                    <br />
                    <br />
                  </div>
                ))}
              </Content>
            </InfoItem>
          )}
        </InfoList>
      </ModalBox>
    </Overlay>
  );
}

// Styled Components
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  width: 600px;
  max-width: 90%;
  max-height: 90vh; /* 💡 화면 90% 이상 넘지 않게 제한 */
  overflow-y: auto;  /* 💡 세로 스크롤 추가 */
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

💡 /* 스크롤바 안 보이게 하고 싶다면 아래 줄 추가 (선택사항) */
    scrollbar-width: none;

    &::-webkit-scrollbar {
    display: none;
    }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #5dc3d0;
  border-radius: 50%;
  display: inline-block;
`;

const Preview = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const Video = styled.video`
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  margin-bottom: 1.5rem;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
`;

const Label = styled.span`
  font-weight: 600;
`;

const Content = styled.p`
  margin: 0;
  padding-left: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;

  strong {
    display: inline-block;
    margin-bottom: 0.3rem;
  }
`;
