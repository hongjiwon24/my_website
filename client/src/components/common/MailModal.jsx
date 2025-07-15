import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function MailModal({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    code: '',
    subject: '',
    message: '',
  });

  const [codeSent, setCodeSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

const startTimer = () => {
  if (intervalId || isVerified) return; // 인증 완료된 경우 시작 금지

  setTimer(180); // 3분
  const id = setInterval(() => {
    setTimer((prev) => {
      if (prev <= 1) {
        clearInterval(id);
        setIntervalId(null);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
  setIntervalId(id);
};

const handleSendCode = async () => {
  if (!form.email || isVerified) return;

  try {
    await axios.post(
      '/api/send-code',
      { email: form.email },
      { withCredentials: true }
    );
    setCodeSent(true);
    startTimer();
    console.log('인증번호 전송됨');
  } catch (err) {
    alert('인증번호 전송 실패');
  }
};


// 시간 포맷 함수
const formatTime = (seconds) => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
};

// 인증번호 타이머 만료시
const handleConfirmCode = async () => {
  if (timer === 0) {
    alert('인증 시간이 만료되었습니다.');
    return;
  }

  try {
    const res = await axios.post(
      'http://localhost:5000/api/verify-code',
      {
        email: form.email,
        code: form.code,
      },
      { withCredentials: true }
    );

    if (res.data.success) {
      setIsVerified(true);
      clearInterval(intervalId);
      setIntervalId(null);
      setTimer(0);
      alert('인증 성공!');
    } else {
      alert('인증번호가 올바르지 않습니다.');
    }
  } catch (err) {
    alert('인증 실패. 다시 시도해주세요.');
  }
};


const isConfirmDisabled = !codeSent || timer === 0 || isVerified;

// 전송 버튼 활성 조건
const isFormValid = Object.values(form).every((v) => v.trim() !== '') && isVerified;

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 전송
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/send-mail',
        form,
        { withCredentials: true }
      );

      if (res.data.success) {
        alert('메일이 성공적으로 전송되었습니다!');
        onClose();
      } else {
        alert('메일 전송 실패');
      }
    } catch (err) {
      console.error('메일 전송 실패:', err);
      alert('메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };
  

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <Title>메일 보내기</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <SubText>전송하기 버튼을 누르면 업무용 이메일로 발송됩니다.</SubText>

        <Input name="name" onChange={handleChange} value={form.name} type="text" placeholder="이름 *" />
        <Input name="company" onChange={handleChange} value={form.company} type="text" placeholder="회사명/소속 *" />

        <Row style={{ alignItems: 'flex-end', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', width: '100%', gap: '8px' }}>
            <Input
            name="email"
            onChange={handleChange}
            value={form.email}
            type="email"
            placeholder="답장 받을 메일 주소 *"
            style={{ flex: 1 }}
            />
            <SendBtn
              onClick={handleSendCode}
              disabled={!form.email || timer > 0 || isVerified}
              $active={form.email && timer === 0 && !isVerified}
            >
            인증번호 전송
            </SendBtn>
        </div>

        {/* 타이머 텍스트 */}
        {timer > 0 && (
            <TimerText>{formatTime(timer)}</TimerText>
        )}
        </Row>

        <Row>
            <Input
            name="code"
            onChange={handleChange}
            value={form.code}
            type="text"
            placeholder="인증번호 *"
            // ✅ 이 줄 삭제 또는 false로 설정
            // disabled={timer === 0}
            />
            <ConfirmBtn
            onClick={handleConfirmCode}
            disabled={isConfirmDisabled}
            $active={!isConfirmDisabled}
            >
            인증번호 확인
            </ConfirmBtn>

        </Row>

        <Input name="subject" onChange={handleChange} value={form.subject} type="text" placeholder="제목 *" />
        <TextArea name="message" onChange={handleChange} value={form.message} placeholder="내용 입력 *" />

        <SubmitButton
        onClick={handleSubmit}
        disabled={!isFormValid}
        $active={isFormValid}
        >
        전송하기
        </SubmitButton>
      </ModalContent>
    </ModalWrapper>
  );
}


const ModalWrapper = styled.div`
  position: absolute;
  bottom: 162px;
  right: 260px;
  width: 460px;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 45px 40px;
  z-index: 999;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const CloseButton = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const SubText = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0 0 12px;
`;

// 정보 입력 칸
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// 내용 입력 칸
const TextArea = styled.textarea`
  padding: 10px;
  height: 132px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
`;

// 인증번호 전송하기 버튼
const SendBtn = styled.button`
  white-space: nowrap;
  padding: 10px;
  font-size: 12px;
  background-color: ${({ $active }) => ($active ? '#277FB5' : '#ddd')};
  color: ${({ $active }) => ($active ? '#fafafa' : '#868B91')};
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

// 인증번호 확인 버튼
const ConfirmBtn = styled(SendBtn)``;

const SubmitButton = styled.button`
  background-color: ${({ $active }) => ($active ? '#277FB5' : '#ddd')};
  color: ${({ $active }) => ($active ? '#fafafa' : '#868B91')};
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    background-color: ${({ $active }) => ($active ? '#196391' : '#ddd')};
  }
`;


// 인증번호 타이머
const TimerText = styled.span`
  font-size: 12px;
  color: #888;
  align-self: flex-end;
  padding-right: 106px;
`;
