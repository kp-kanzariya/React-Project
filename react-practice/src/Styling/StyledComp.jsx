import React from 'react'
import InlineExtCSS from './InlineExtCSS'
import BootsrapStyle from './BootsrapStyle'
import StyledStyle from './StyledStyle'
// import TailwindStyle from '../TailwindStyle'

function StyledComp() {
  return (
    <div>
          <InlineExtCSS />
          <BootsrapStyle />

          <StyledStyle />
          
    </div>
  )
}

export default StyledComp
