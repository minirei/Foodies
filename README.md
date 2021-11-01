# Foodies

## To-Do

- adjust gallery section to follow stockdutchdesign's lookbook format
  - change background on diff hovers (FIND SOME COLOURS FIRST THO)
  - ref: https://www.youtube.com/watch?v=qvFLjZvz5Mw&t=903s
-  animate marquee
  - ref: https://www.youtube.com/watch?v=BtsVMvds3P0&t=343s
- implement roadmap slider showreel thing
- Implement global context to allow background-colour switching upon triggering certain events in the DOM (scrolling). I think this is achieved w/ framer motion & react-intersection-observer.
  - the colours are rgb(235,235,235), rgb(29,29,29), 
  - might not be necessary if i just change the background colour of the SECTION
- do up HERO image reveal
  - ref: https://www.youtube.com/watch?v=ySXy9BFu9LQ&t=199s&ab_channel=WrongAkram
<!-- - implement parallax scrolling over hero image like https://www.flyplatoon.com/ -->
- change the policy id

## Website - The Stack

Frontend: Gatsby

- images
  - `npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp`
- framer-motion
- styled-components
  - `npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components styled-normalize`
- gatsby-plugin-react-helmet react-helmet
- eslint-config-react-app (--save-dev)
- cloud functionality
  - npm install --save gatsby-plugin-gatsby-cloud

### Fonts

Sans-Serif

- Poppins - https://www.typewolf.com/poppins
  Serif
- Garamond

## USEFUL

- Add Token Policy - "Metadata
  We follow CIP-25, the NFT metadata standard on Cardano, which was created by SpaceBudz. Images are stored on IPFS and you find the image link to a SpaceBud inside the metadata."
  - https://github.com/cardano-foundation/CIPs/blob/master/CIP-0025/CIP-0025.md
