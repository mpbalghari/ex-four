import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainProps from './props/MainProps';
import "./App.css"
function App() {
  return (
    <>
      <div className='container pb-4 pt-3'>
        <h3 className='pb-2'>Props and Basic TypeScript</h3>
        <MainProps />
      </div>
    </>
  )
}

export default App