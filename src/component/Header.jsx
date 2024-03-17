import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
   <>
   <AppBar position='sticky'>
    <Toolbar>
        <Typography sx={{textAlign:"center", fontWeight:"bold"}}>Weather Search Application</Typography>
    </Toolbar>
   </AppBar>
   </>
  )
}

export default Header