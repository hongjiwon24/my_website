import styled from "styled-components";
import React from "react";

const ScrollWrapper = React.forwardRef(({ children }, ref) => {
  return (
    <OuterWrapper>
      <InnerScroll ref={ref}>{children}</InnerScroll>
    </OuterWrapper>
  );
});

export default ScrollWrapper;

// 화면 전체를 채우는 컨테이너
const OuterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

// 실제 스크롤이 일어나는 부분
const InnerScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  & > section {
    scroll-snap-align: start;
    min-height: 100vh;
  }
`;
