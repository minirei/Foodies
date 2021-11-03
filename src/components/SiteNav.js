import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import PropTypes from "prop-types"

// Styles
import { Container, Flex } from "../styles/globalStyles"
import { Menu, Logo } from "../styles/headerStyles"
import {
  SiteNavSection,
  NavHeader,
  NavContent,
  Heading,
  NavBottom,
  Icon,
} from "../styles/navStyles"
import { StaticImage } from "gatsby-plugin-image"

const SiteNav = ({ toggleMenu, setToggleMenu, accordian }) => {
  const controls = useAnimation()

  const logoAnimation = {
    initial: {
      opacity: accordian ? 0 : 1,
    },
    triggered: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      opacity: accordian ? 0 : 1,
    },
  }
  const navAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }
  const topLeftLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const topRightLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const bottomLeftLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.1,
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const bottomRightLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const horizontalLineAnimation = {
    initial: {
      x: "-100%",
    },
    triggered: {
      x: 0,
      transition: {
        delay: 0.4,
        duration: 1.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  // Triggers menu animation when opened AND turns scrolling off
  useEffect(() => {
    if (toggleMenu) {
      controls.start("triggered")
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [controls, toggleMenu])

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <>
            <NavHeader>
              <Logo
                variants={logoAnimation}
                animate={controls}
                initial="initial"
                exit="exit"
              >
                <h1>FOODIES</h1>
              </Logo>
              <Menu
                className={`${accordian && "scrolled"} `}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <div className="wrapper">
                  <svg
                    className="circleAround"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className="path"
                      cx="25"
                      cy="25"
                      r="30"
                      stroke="black"
                      stroke-width="1"
                      fill="none"
                    ></circle>
                  </svg>
                  <button>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </Menu>
            </NavHeader>
            <SiteNavSection
              variants={navAnimation}
              animate={controls}
              initial="initial"
              exit="exit"
            >
              <Flex vertical center>
                <NavContent>
                  <div className="main">
                    <motion.span
                      className="line"
                      variants={topLeftLineAnimation}
                      animate={controls}
                      initial="initial"
                      exit="exit"
                    />
                    <Heading large>About</Heading>
                    <Heading large>FAQs</Heading>
                    <Heading large>Guide</Heading>
                    <Heading large>Mint</Heading>
                  </div>
                  <div className="roadmap">
                    <motion.span
                      className="line"
                      variants={topRightLineAnimation}
                      animate={controls}
                      initial="initial"
                      exit="exit"
                    />
                    <Heading large>Roadmap</Heading>
                    <Heading>Foodie Parties</Heading>
                    <Heading>Foodie Kitchen</Heading>
                    <Heading>Supply Drop</Heading>
                    <Heading>Foodie Wars</Heading>
                  </div>
                  <motion.span
                    className="horizontalLine"
                    variants={horizontalLineAnimation}
                    animate={controls}
                    initial="initial"
                    exit="exit"
                  />
                </NavContent>
                <NavBottom>
                  <div className="leftInfo">
                    <div className="imageWrapper">
                      <StaticImage
                        className="image"
                        src="../assets/images/cardano-logo.png"
                        alt="cardano logo"
                      />
                    </div>
                    <p>Powered by Cardano</p>
                  </div>
                  <div className="wrapper">
                    <div className="info">
                      <div className="infoWrapper">
                        <h3>Follow Us. No Filter.</h3>
                        <p>
                          POLICY ID:
                          7eb7cf060a9740b63de68afb1c0fde7f74f2895c981573259046ae3f
                        </p>
                      </div>
                    </div>
                    <div className="socials">
                      <Flex>
                        <Icon>
                          <div className="svgWrapper">
                            {/* <span className="line"></span> */}
                            <a
                              href="https://twitter.com/Foodies_CNFT"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fillRule="evenodd"
                              >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />{" "}
                              </svg>
                            </a>
                          </div>
                        </Icon>
                        <Icon className>
                          <div className="svgWrapper">
                            <motion.span
                              className="line short"
                              variants={bottomLeftLineAnimation}
                              animate={controls}
                              initial="initial"
                              exit="exit"
                            />
                            <a
                              href="https://discord.gg/9Qttw23Zs2"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 71 55"
                                fillRule="evenodd"
                              >
                                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                              </svg>
                            </a>
                          </div>
                        </Icon>
                        <Icon>
                          <div className="svgWrapper">
                            <motion.span
                              className="line short"
                              variants={bottomRightLineAnimation}
                              animate={controls}
                              initial="initial"
                              exit="exit"
                            />
                            <a
                              href="https://www.instagram.com/foodies.nft/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fillRule="evenodd"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
                              </svg>
                            </a>
                          </div>
                        </Icon>
                      </Flex>
                    </div>
                  </div>
                </NavBottom>
              </Flex>
            </SiteNavSection>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

SiteNav.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  accordian: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
}

export default SiteNav
