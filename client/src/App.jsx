import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import AsideButtons from './components/common/AsideButtons'
import MailModal from './components/common/MailModal';
import ScrollWrapper from './components/common/ScrollWrapper'
import Home from './pages/Home'

function App() {
  const scrollRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setScrollTop(el.scrollTop);
    };

    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrollTop={scrollTop} scrollRef={scrollRef} />
      <AsideButtons scrollRef={scrollRef} />
      <ScrollWrapper ref={scrollRef}>
        <Home />
        {/* <Footer /> */}
      </ScrollWrapper>
      
    </>
  )
}

export default App;
