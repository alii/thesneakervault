import styled from 'styled-components';
import theme from '../assets/theme';

const Spinner = styled.div`
  position: fixed;

  left: 0;
  top: 0;

  height: 100vh;
  width: 100vw;

  &::after {
    position: absolute;

    top: 50%;
    left: 50%;

    height: 40px;
    width: 40px;

    content: '';

    border: 4px solid ${theme.palette.red};
    border-left: 3px solid transparent;

    border-radius: 50%;
    animation: 3s spin linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(405deg);
    }
  }
`;

export default Spinner;
