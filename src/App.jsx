// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Button, Container, Heading, HStack} from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import BlogItem from "@/components/BlogItem.jsx";
import BlogListing from "@/components/BlogListing.jsx";
import {Outlet} from "react-router";


function App() {
  // const [count, setCount] = useState(0)

  return (
      <Container>
          <Heading p="10" size="4xl">Blog</Heading>
          {/*<BlogListing/>*/}
          <Outlet />
      </Container>
  )
}

export default App
