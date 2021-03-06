import styled from "styled-components"
import { motion } from "framer-motion"

// Gallery
export const HomeGallerySection = styled(motion.div)`
  position: relative;
  height: 120vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
  width: 100vw;
  background-color: rgb(255, 248, 237);
  cursor: default;
  overflow: hidden;
  &.mobile {
    height: 200vh;
    padding-top: 15vh;
    padding-bottom: 5vh;
  }
`

export const GalleryCategory = styled(motion.div)`
  width: 100%;
  height: 100%;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    h1 {
      font-size: calc(0.7rem + 6vw);
      font-weight: 500;
      font-family: "Butler ", "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
      margin: 0;
      text-align: center;
      white-space: nowrap;
      z-index: 2;
    }
  }
  .floatingBackground,
  .floatingFoodie {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    top: -30%;
    left: 0;
    width: 70%;
    z-index: 1;
    opacity: 1;
  }

  .floatingFoodie {
    top: -10%;
    width: 50%;
    left: auto;
    right: 0%;
  }

  &.mobile {
    position: relative;
    display: flex;
    align-items: flex-end;
    flex-direction: column-reverse;
    height: 25%;
    .content {
      width: 100%;
      height: 20%;
      display: flex;
      align-items: flex-start;
    }
    .imageWrapper {
      width: 100%;
      height: 80%;
      position: relative;
    }
    .floatingBackground {
      top: 0%;
      width: 75%;
    }
    .floatingFoodie {
      width: 55%;
      right: -5%;
      top: 50%;
    }
  }
`
