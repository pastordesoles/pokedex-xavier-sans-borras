import styled from "styled-components";

const LoaderStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    width: 150px;
    height: 150px;
    position: absolute;
    animation: rotate 1s linear infinite;
    z-index: 3;
    top: 50%;
  }
  .loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 55px;
    border-radius: 50%;
    border: 5px solid #2b1c2f;
    animation: prixClipFix 2s linear infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;

export default LoaderStyle;
