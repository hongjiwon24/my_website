// components/AsideButtons.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import MailModal from './MailModal';

export default function AsideButtons({ scrollRef }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToTop = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev); // 토글: 열려있으면 닫히고, 닫혀있으면 열림
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <AsideWrapper>
      <MailButton onClick={toggleModal} title="메일 보내기"><img src="/icons/mail.svg" alt="메일 보내기" /></MailButton>
      <TopButton onClick={scrollToTop} title="맨 위로">↑</TopButton>
    </AsideWrapper>

      {isModalOpen && <MailModal onClose={closeModal} />}
    </>
  );
}


const AsideWrapper = styled.aside`
  position: fixed;
  bottom: 52px;
  right: 184px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 100;

  @media (max-width: 768px) {
    bottom: 22px;
    right: 22px;
  }
`;

const MailButton = styled.button`
  width: 64px;
  height: 64px;
  background: #64A2C8;
  border-radius: 50%;
  color: #64A2C8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #196391ff;
    color: #fafafa;
  }

  @media (max-width: 768px) {
    width: 58px;
    height: 58px;
  }
`;

const TopButton = styled.button`
  width: 64px;
  height: 64px;
  border: 1px solid #64A2C8;
  background: #fafafa;
  border-radius: 50%;
  font-size: 15px;
  color: #64A2C8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid #196391ff;
    color: #196391ff;
  }
    
  @media (max-width: 768px) {
    width: 58px;
    height: 58px;
  }
`;
