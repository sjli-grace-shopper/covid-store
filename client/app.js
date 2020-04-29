import React from 'react'
import Divider from '@material-ui/core/divider'

import {Navbar, TopBar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="container">
      <TopBar />
      <Divider />
      <Navbar />
      <Divider />
      <Routes />
    </div>
  )
}

export default App
