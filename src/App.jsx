import React, { useState } from 'react'
import Blog from './components/Blog'
import Create from './components/Create'
import Content from './components/Content'

export const Context = React.createContext();

const App = () => {

  const [blogItems, setBlogItems] = useState({});



  return (
    <>
      {/* <Blog /> */}
      {/* <Create /> */}
      {/* <Content /> */}
    </>
  )
}

export default App
