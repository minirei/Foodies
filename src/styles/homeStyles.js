import styled from "styled-components"
import { motion } from "framer-motion"

// Landing Section
export const BackgroundSection = styled(motion.div)`
  position: relative;
  .wrapper {
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
  }
`

export const TimerSection = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  .timer {
    width: 27%;
    text-align: center;
    font-size: calc(0.6rem + 0.6vw);
    font-weight: 500;
    letter-spacing: 0.1rem;
    display: flex;
    justify-content: space-between;
    .box {
      width: 5.5vw;
      height: 5.5vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: rgb(255, 248, 237, 0.6);
      border-radius: 20%;
      .digit {
        font-size: calc(1.6rem + 1.5vw);
        font-weight: 600;
      }
      &.second {
        background-color: rgb(241, 202, 137, 0.6);
      }
    }
  }

  .launchWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: rgb(241, 202, 137, 0.85);
    border-radius: 7%;
    padding: 1rem;
    p {
      font-size: calc(1rem + 1vw);
      line-height: calc(1rem + 1.6vw);
      font-weight: 600;
      margin: 1rem;
    }
    .firstLine {
      p {
        /* font-size: calc(1.8rem + 1vw); */
        font-weight: 700;
      }
    }
    .secondLine {
      p {
        font-weight: 400;
      }
      strong {
        font-weight: 600;
      }
    }
    .thirdLine {
      p {
        font-weight: 400;
      }
      em {
        font-weight: 600;
      }
    }
    .forthLine {
      max-width: 100%;
      p {
        word-wrap: break-word;
        font-size: 500;
      }
      .svgWrapper {
        svg {
          cursor: pointer;
          width: 5%;
          height: 5%;
        }
        margin-bottom: 0.5rem;
      }
    }
  }

  &.mobile {
    top: -10%;

    .timer {
      width: 80%;
      .box {
        width: 17vw;
        height: 17vw;
      }
    }
    .launchWrapper {
      width: 90%;
      padding: 0.5rem;
      .svgWrapper {
        svg {
          width: 10%;
          height: 10%;
        }
      }
    }
  }
`

// About Section
export const HomeAboutSection = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  padding-top: 10vh;
  padding-bottom: 10vh;
  cursor: default;
  background-color: rgb(255, 248, 237);
  overflow: hidden;
`
export const HomeAboutContent = styled(motion.div)`
  width: 55%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    padding-bottom: 1rem;
  }
  a {
    font-weight: 600;
    color: inherit;
  }

  .link {
    position: relative;
    :before {
      left: 0;
      bottom: 10%;
      content: "";
      height: 2px;
      background: rgb(40, 10, 11);
      position: absolute;
      transform: scaleX(0);
      will-change: transform;
      transform-origin: right;
      width: 100%;
      transition: transform 0.4s ease-out, background 500ms linear;
    }

    :hover {
      :before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`
export const HomeAboutImage = styled.div`
  width: 35%;
  overflow: visible;
  position: relative;

  .outerWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .imageWrapper {
    width: 140%;
    position: relative;
  }
  .mask {
    background-color: rgb(255, 248, 237);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
