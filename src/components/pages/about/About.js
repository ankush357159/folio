import React from 'react'
import { Box } from '@mui/material'
import WhoAmI from './WhoAmI'

const About = () => {
  return (
    <Box sx={{ position: "relative" }}>
    <WhoAmI sx={{ position: "absolute" }} />
  
  </Box>
  )
}

export default About