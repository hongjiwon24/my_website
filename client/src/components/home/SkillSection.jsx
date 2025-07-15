import { useState } from 'react';
import styled from 'styled-components';
import SkillAccordion from "../SkillAccordion";

export default function SkillSection() {
  const [openIndex, setOpenIndex] = useState(0); // 0: 프론트엔드 열림

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index)); // 같은 거 클릭 시 닫힘
  };

  return (
    <Section>
      <Title>SKILL</Title>

      <SkillAccordion
        title="Front-End"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <SkillList>
          <li>- HTML/CSS, JavaScript, jQuery 사용 가능</li>
          <li>- SCSS 문법과 BEM 네이밍 컨벤션을 활용</li>
          <li>- React, Storybook 사용 경험 있음</li>
          <Icons>
            <IconImage src="/icons/html.svg" alt="html" />
            <IconImage src="/icons/css.svg" alt="css" />
            <IconImage src="/icons/js.svg" alt="js" />
            <IconImage src="/icons/jquery.svg" alt="jquery" />
            <IconImage src="/icons/react.svg" alt="react" />
            <IconImage src="/icons/vue.svg" alt="vue" />
          </Icons>
        </SkillList>
      </SkillAccordion>

      <SkillAccordion
        title="Design"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <SkillList>
          <li>- Photoshop, Illustrator 사용 가능</li>
          <li>- Figma로 UX/UI 설계 및 프로토타입 제작 가능</li>
          <Icons>
            <IconImage src="/icons/figma.svg" alt="figma" />
            <IconImage src="/icons/ai.png" alt="illustrator" />
            <IconImage src="/icons/ps.png" alt="photoshop" />
          </Icons>
        </SkillList>
      </SkillAccordion>

      <SkillAccordion
        title="Tools"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <SkillList>
          <li>- Visual Studio Code, Git, GitHub 사용</li>
          <Icons>
            <IconImage src="/icons/vscode.png" alt="vscode" />
            <IconImage src="/icons/github.png" alt="github" />
            <IconImage src="/icons/git.png" alt="git" />
            <IconImage src="/icons/terminal.png" alt="terminal" />
          </Icons>
        </SkillList>
      </SkillAccordion>

      <SkillAccordion
        title="Office"
        isOpen={openIndex === 3}
        onToggle={() => handleToggle(3)}
      >
        <SkillList>
          <li>- git으로 파일 협업</li>
          <li>- Figma로 UX/UI 설계 및 프로토타입 제작 가능</li>
          <Icons>
            <IconImage src="/icons/vscode.png" alt="vscode" />
            <IconImage src="/icons/github.png" alt="github" />
          </Icons>
        </SkillList>
      </SkillAccordion>
    </Section>
  );
}

// ---------------- Styled Components ----------------

const Section = styled.section``;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const SkillList = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.6;

  li {
    margin-bottom: 0.4rem;
    list-style: disc;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const IconImage = styled.img`
  width: 55px;
  height: 55px;
  object-fit: contain;
  margin-right: 10px;
  padding: 4px;
  border: 1px solid #AFB6BA;
  border-radius: 6px;
  background-color: white;
`;
