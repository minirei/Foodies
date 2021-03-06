import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const SiteNavSection = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  overflow: hidden;
  background-color: rgb(242, 155, 155);
  .line {
    &.short {
      height: 100%;
    }
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 1px;
    display: block;
    background: black !important;
  }
  .horizontalLine {
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    display: block;
    background: black !important;
  }
`

export const SiteNavMobile = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: rgb(242, 155, 155);
  z-index: 100;
  padding-top: 10vh;
  padding-bottom: 20vh;
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
  }
  .socialsCaption {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    p {
      color: rgb(255, 248, 237);
      width: 100%;
      font-size: 1rem;
      text-align: center;
      margin: 0;
    }
  }
  .socials {
    width: 100%;
    height: 25%;
    .line {
      &.short {
        height: 100%;
      }
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 1px;
      display: block;
      background-color: black;
    }
    .horizontalLine {
      position: absolute;
      width: 80%;
      transform-origin: center;
      height: 1px;
      bottom: 0;
      display: block;
      background-color: black;
      &.top {
        top: 0;
        bottom: auto;
        width: 100%;
      }
      &.bottom {
        width: 100%;
      }
    }
  }
`

export const NavHeader = styled.div`
  position: fixed;
  height: 10vh;
  width: 100%;
  z-index: 101;
`

export const NavContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-left: 25vw;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;

  .main {
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 130px;
    position: relative;
  }

  .roadmap {
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 130px;
    position: relative;
  }
`

export const Heading = styled.h1`
  font-size: calc(2.2rem + 1.2vw);
  color: rgb(40, 10, 11);
  font-weight: 400;
  letter-spacing: 0.1rem;
  font-family: "Butler ", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: calc(4.6rem + 1vw);
  margin: 0;
  margin-left: 50px;
  display: inline-block;

  ${props =>
    props.hover &&
    css`
      position: relative;
      :before {
        left: 0;
        bottom: 5%;
        content: "";
        height: 3px;
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
    `}

  ${props =>
    props.large &&
    css`
      font-weight: 500;
    `}

  ${props =>
    props.unavailable &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  ${props =>
    props.mobile &&
    css`
      padding: 0;
      margin: 0;
      font-size: calc(1.2rem + 1vw);
      line-height: calc(2.4rem + 1vw);
    `}
`

export const NavBottom = styled.div`
  position: relative;
  width: 100%;
  height: 15vw;

  &.footer {
    height: 35%;
    mix-blend-mode: difference;
    background: rgb(255, 248, 237);
    color: auto;
  }
  .leftInfo {
    position: absolute;
    height: 100%;
    width: 25vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    user-select: none;

    .cardanoWrapper {
      height: 100%;
      max-height: 100%;
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;

      .cardanoSVG {
        height: 75%;
        object-fit: contain;
        user-select: none;
      }
    }
    p {
      text-align: center;
      font-size: 1.3rem;
      margin: 0;
      padding-bottom: 1rem;
    }
  }
  .wrapper {
    padding-left: 25vw;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    overflow: hidden;
    .info {
      grid-column: 1/2;
      height: 100%;
      overflow: hidden;
    }
    .infoWrapper {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      position: relative;
      overflow: hidden;
    }
    h3 {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
      font-family: "Butler ", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
    }
    p {
      text-align: center;
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
    }
  }

  .socials {
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
`
export const Icon = styled.div`
  height: 100%;
  width: 100%;
  /* border: 1px solid black; */
  overflow: hidden;
  .svgWrapper {
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  a {
    height: 40%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    transform-origin: center !important;
  }
`
