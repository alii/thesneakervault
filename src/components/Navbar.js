import styled from 'styled-components';
import theme from '../assets/theme';

export default styled.div`
  padding: 20px 60px;
  position: sticky;
  top: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  background: ${theme.alpha.background(0.5)};
  backdrop-filter: blur(4px);

  h3 {
    cursor: pointer;
    flex: 1;

    flex-basis: 60%;

    &:hover {
      color: ${theme.palette.red};
    }
  }
`;
