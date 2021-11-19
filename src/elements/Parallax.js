import React, { useState, useRef, useLayoutEffect } from "react"
import {
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion"
import PropTypes from "prop-types"

// Styles
import { ParallaxStyle } from "../styles/elementStyles"

const Parallax = ({ children, offset = 50 }) => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef()

  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + offset

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      )
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [ref])

  return (
    <ParallaxStyle ref={ref} style={{ y }}>
      {children}
    </ParallaxStyle>
  )
}

Parallax.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.number,
}

export default Parallax
