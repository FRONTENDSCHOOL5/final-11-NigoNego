import styled from 'styled-components';

const StyleSplashPage = styled.main`
  body {
    margin: 0;
    perspective: 1000px;
  }

  .red.lego {
    animation-delay: 0s;
  }
  .red.lego > .left {
    background: #f6685e;
  }
  .red.lego > .right {
    background: #d32f2f;
  }
  .red.lego > .container-top > .top {
    background: #f44336;
  }
  .red.lego > .container-top > .top > .dot {
    background: #f6685e;
    filter: drop-shadow(5px 5px 0px #c32727);
  }

  .blue.lego {
    animation-delay: 1.4s;
  }
  .blue.lego > .left {
    background: #6ab7ff;
  }
  .blue.lego > .right {
    background: #1565c0;
  }
  .blue.lego > .container-top > .top {
    background: #1e88e5;
  }
  .blue.lego > .container-top > .top > .dot {
    background: #6ab7ff;
    filter: drop-shadow(5px 5px 0px #124b7f);
  }

  .yellow.lego {
    animation-delay: 2.8s;
  }
  .yellow.lego > .left {
    background: #ffe54c;
  }
  .yellow.lego > .right {
    background: #c6a700;
  }
  .yellow.lego > .container-top > .top {
    background: #fdd835;
  }
  .yellow.lego > .container-top > .top > .dot {
    background: #ffe54c;
    filter: drop-shadow(5px 5px 0px #b38f00);
  }

  .lego {
    width: 150px;
    height: 150px;
    position: fixed;
    left: calc(50vw - 75px);
    top: calc(50vh - 100px);
    animation: loading 4.2s infinite ease;
    opacity: 0;
  }
  .lego > .left {
    width: 102px;
    height: 35px;
    position: absolute;
    transform: rotateY(60deg) rotate(10deg) rotateX(6deg);
    bottom: 15px;
    border-radius: 5px 0 5px 5px;
  }
  .lego > .right {
    width: 102px;
    height: 35px;
    position: absolute;
    transform: rotateY(-60deg) rotate(-10deg) rotateX(5deg);
    bottom: 15px;
    right: 0;
    border-radius: 0 5px 5px 5px;
  }
  .lego .container-top {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 75px;
    height: 75px;
    transform: rotateZ(45deg);
    bottom: 16px;
  }
  .lego .container-top .top {
    width: 68px;
    height: 69px;
    position: absolute;
    transform: rotateY(42deg) rotateZ(-17deg) rotateX(-43deg);
    border-radius: 5px 0 0 0;
  }
  .lego .container-top .top .dot {
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 100%;
  }
  .lego .container-top .top .dot.d-n1 {
    left: 7px;
    top: 7px;
  }
  .lego .container-top .top .dot.d-n2 {
    right: 10px;
    top: 7px;
  }
  .lego .container-top .top .dot.d-n3 {
    right: 10px;
    bottom: 10px;
  }
  .lego .container-top .top .dot.d-n4 {
    left: 7px;
    bottom: 10px;
  }

  @keyframes loading {
    0% {
      transform: translate(0, -50px);
      opacity: 0;
      z-index: 10;
    }
    10% {
      opacity: 1;
    }
    40% {
      transform: translate(0, 0);
      z-index: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 100px);
      opacity: 0;
    }
  }

  @-webkit-keyframes loading {
    0% {
      transform: translate(0, -50px);
      opacity: 0;
      z-index: 10;
    }
    10% {
      opacity: 1;
    }
    40% {
      transform: translate(0, 0);
      z-index: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 100px);
      opacity: 0;
    }
  }

  @-moz-keyframes loading {
    0% {
      transform: translate(0, -50px);
      opacity: 0;
      z-index: 10;
    }
    40% {
      transform: translate(0, 0);
      opacity: 1;
      z-index: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 100px);
      opacity: 0;
    }
  }
`;

export default StyleSplashPage;
