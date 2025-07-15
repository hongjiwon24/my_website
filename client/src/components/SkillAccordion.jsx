// SkillAccordion.jsx
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function SkillAccordion({ title, color = '#eaf4f8', children, isOpen, onToggle }) {
  return (
    <AccordionSection>
      <AccordionWrapper>
        <AccordionHeader $color={color} onClick={onToggle}>
          <Title>{title}<AccentDot /></Title>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </AccordionHeader>
        {isOpen && <AccordionContent>{children}</AccordionContent>}
      </AccordionWrapper>
    </AccordionSection>
  );
}

const AccordionSection = styled.div`
  overflow: hidden;
`;

const AccordionWrapper = styled.div`
  width: 100%;
`;

const AccordionHeader = styled.div`
  color: #2D2D2D;
  border-bottom: 1px solid #2D2D2D;
  padding: 14px 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
`;

const Title = styled.h2`
  font-size: 26px;
  margin: 0;
  flex: 1;
  font-weight: normal;
  padding: 7px 0;
`;

const AccentDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #7BBFC8;
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
`;

const AccordionContent = styled.div`
  padding: 16px 18px;
  line-height: 1.6;
  font-size: 14px;
  color: #333;
`;
