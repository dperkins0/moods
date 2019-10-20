import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import Background from './Background'
import styled from '@emotion/styled'

const MoodsLink = styled.a({
  fontSize: '72px',
  color: 'white',
  fontVariant: 'small-caps'
})

const LinkWrapper = styled.div({})

const PageContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const App = () => {
  return (
    <PageContainer>
      <Background />
    </PageContainer>
  )
}

const mountNode = document.getElementById('root')

ReactDOM.render(<App />, mountNode)
