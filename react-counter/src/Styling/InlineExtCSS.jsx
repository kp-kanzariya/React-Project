import React from 'react'
import './style.css'


function InlineExtCSS() {
  return (
    <div>
          <h2 style={{ backgroundColor: "red" }}>This is Inline Style</h2>
          <p className='para'>This is External Style</p>
    </div>
  )
}

export default InlineExtCSS;
