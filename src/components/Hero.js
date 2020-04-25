import React from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';

const StyledHero = styled.div`
  min-height: 30vh;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;

  color: ${theme.palette.safe.red};
  background: ${theme.palette.red};
`;

const Hero = ({ title = 'Hello!', paragraph = "This is a Hero. It's used to display small amounts of content!" }) => (
  <StyledHero>
    <h1>{title}</h1>
    <p>{paragraph}</p>
  </StyledHero>
);

export default Hero;
