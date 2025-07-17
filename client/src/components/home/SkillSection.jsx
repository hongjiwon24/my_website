import { useState } from 'react';
import styled from 'styled-components';
import SkillAccordion from "../SkillAccordion";

export default function SkillSection() {
  const [openIndex, setOpenIndex] = useState(0); // 0: 프론트엔드 열림

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
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
            {['html', 'css', 'js', 'jquery', 'react', 'vue'].map(name => (
              <IconGroup key={name}>
                <IconImage src={`/icons/${name}.svg`} alt={name} />
              </IconGroup>
            ))}
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
            {['figma.svg', 'ai.png', 'ps.png'].map(name => (
              <IconGroup key={name}>
                <IconImage src={`/icons/${name}`} alt={name} />
              </IconGroup>
            ))}
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
            {['vs.png', ].map(name => (
              <IconGroup key={name}>
                <IconImage src={`/icons/${name}`} alt={name} />
              </IconGroup>
            ))}
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
            {[ 'git.svg', ].map(name => (
              <IconGroup key={name}>
                <IconImage src={`/icons/${name}`} alt={name} />
              </IconGroup>
            ))}
          </Icons>
        </SkillList>
      </SkillAccordion>
    </Section>
  );
}

// ---------------- Styled Components ----------------

const Section = styled.div`
  margin: 0 auto;
  padding: 158px 0 0 0;
  width: 1010px;
  min-height: 100vh;

  @media (max-width: 768px) {
    width: 86%;
    padding-top: 100px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const SkillList = styled.ul`
  margin: 0;
  padding: 14px 0 20px 0;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  li {
    margin-bottom: 0.4rem;
    list-style: none;
    padding: 14px 0 2px 0;

    @media (max-width: 768px) {
      padding: 5px 0 2px 0;
      margin-bottom: 0;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;

  @media (max-width: 768px) {
   margin-top: 18px;
  }
`;

const IconGroup = styled.div`
  padding: 8px;
  border: 1px solid #AFB6BA;
  border-radius: 6px;
  background-color: white;
`;

const IconImage = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;
