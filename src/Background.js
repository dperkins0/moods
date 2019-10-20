import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import BladeRunner from './BR.gif'

const Background = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        html {
          height: 100%;
          width: 100%;
          background: url(${BladeRunner});
          background-clip: border-box;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          font-family: 'Sorts Mill Gaudy', serif;
          overflow-x: hidden;
        }
        body {
          height: 100%;
          width: 100%;
        }
        #root {
          height: 100%;
          width: 100%;
        }
      `}
    />
  )
}
export default Background
