import React from 'react';
import styled from 'styled-components';

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: var(--background);
`;

const Particle = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  animation-name: move;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  border-radius: 100%;
  background-blend-mode: screen, luminosity, saturation, darken, color-dodge, color;
  filter: blur(100px);
  opacity: 7%;

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  ${Array.from({ length: 10 }, (_, i) => `
    &:nth-child(${i + 1}) {
      animation-duration: ${Math.random() * 300 + 50}s;
      animation-delay: ${Math.random() * -35000}s;
      transform-origin: ${Math.random() * 40 - 20}vw ${Math.random() * 40 - 20}vh;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      background: linear-gradient(90deg, rgba(63,67,251,1) 0%, rgba(210,70,252,1) 100%);
      mix-blend-mode: lighten;
    }
  `).join('')}
`;

const ParticleBackground = () => {
  return (
    <ParticleContainer>
      {Array.from({ length: 18 }, (_, i) => (
        <Particle key={i} />
      ))}
    </ParticleContainer>
  );
};

export default ParticleBackground;
