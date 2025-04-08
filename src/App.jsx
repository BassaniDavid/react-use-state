import { useState } from 'react'
import Header from './components/header'
import Main from './components/Main'
import languages from './languages'

function App() {


  return (
    <>
      <Header></Header>
      <Main data={languages}></Main>
    </>
  )
}

export default App
