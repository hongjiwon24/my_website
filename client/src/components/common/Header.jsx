import { useEffect, useState } from 'react'
import styled from 'styled-components'


export default function Header({ scrollTop, scrollRef }) {
  const [activeMenu, setActiveMenu] = useState('about');
  const [isClickScrolling, setIsClickScrolling] = useState(false);
  const showHeader = scrollTop > 700;

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el && scrollRef.current) {
      const headerHeight = 80;
      const y = el.offsetTop - headerHeight;

      scrollRef.current.scrollTo({ top: y, behavior: 'smooth' });
      setActiveMenu(id);
    }
  };

  useEffect(() => {
    const sectionIds = ['about', 'skill', 'portfolio', 'contact'];
    const headerHeight = 80;

    for (let id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        const offset = headerHeight + 30;

        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveMenu(id);
          break;
        }
      }
    }
  }, [scrollTop]);

  return (
    <StyledHeader $show={showHeader}>
      <Container>
        <Title onClick={() => {
          if (scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveMenu('about');
          }
        }}>
          로고
        </Title>

        <List>
          {['about', 'skill', 'portfolio', 'contact'].map((id) => (
            <ListItem
              key={id}
              onClick={() => handleScroll(id)}
              className={activeMenu === id ? 'active' : ''}
            >
              {id.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Container>
    </StyledHeader>
  );
}


const StyledHeader = styled.header`
  position: fixed;
  background-color: #fafafa;
  border-bottom: 1px solid #EBF1F2;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: 17px 0;
  display: flex;
  justify-content: space-between;

  /* 숨김 효과 */
  transform: ${({ $show }) => ($show ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
  transition: transform 0.4s ease, opacity 0.4s ease;
`;


const Container = styled.div`
  width: 1010px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 308px;
  }
`

const Title = styled.h1`
  cursor: pointer;
  font-size: 23px;
  color: #277FB5;
`

const List = styled.ul`
  padding: 0;
  display: flex;
  justify-content: flex-end;
  gap: 53px;

  @media (max-width: 768px) {
    gap: 14px;
  }
`

const ListItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  color: #B1B1B1;
  position: relative;
  transition: color 0.3s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -21px;
    height: 4px;
    width: 0;
    background-color: #277FB5;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #277FB5;
  }

  &.active {
    color: #277FB5;
    font-weight: bold;
  }

  &.active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

