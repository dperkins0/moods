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
          background: linear-gradient(
              rgba(100, 100, 100, 0.05),
              rgba(100, 100, 100, 0.05)
            ),
            url(${BladeRunner}) no-repeat center center fixed;
          background-size: cover;
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
