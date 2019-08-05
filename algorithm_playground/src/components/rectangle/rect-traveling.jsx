import styled, { keyframes } from 'styled-components';
 


function UpdateKeyframes(x1,y1,x2,y2)  {
  const RectKeyFrames = keyframes`
  0% {
    top: ${y1}px; left: ${x1}px;
  }
  100% {
    top: ${y2}px; left: ${x2}px;
  }
  `
  return RectKeyFrames;
} 

export const Rect = styled.div`
  display: inline-block;
  background: green;
  width: ${props => (props.w)}px;
  height: ${props => (props.h)}px;
  position: relative;
  border-radius: 5%;
  border-style: solid;
  border-width: thin;
  animation-name: ${props => UpdateKeyframes(props.x1, props.y1, props.x2, props.y2)};
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`
 
export default Rect