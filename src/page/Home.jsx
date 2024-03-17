import React, { useState } from 'react'
import {Box, styled} from "@mui/material"
import Form from '../component/Form'
import Info from '../component/Info'
import Header from '../component/Header'
const bg= '../../bg.jpg'
const BoxWrapper= styled(Box)({
    height:"100vh",
    display:"flex",
   alignItems:"center",
    width:"80%",
    margin:"0 auto",
    // backgroundColor:"greenyellow"
})
const Image= styled(Box)({
    background: `url(${bg})`,
    width:"30%",
    height:"80%",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    objectFit:"cover",
    borderRadius:"20px 0 0 20px"
})
const Home = () => {
    const [result, setResult] = useState({})
  return (
    <>
    <Header />
    <BoxWrapper className='box_home'>
        <Image className='img_home'></Image>
      
        <Box style={{ width: '70%', height: '80%' }} className="box_home_content">
                <Form setResult={setResult} />
                <Info result={result} />
            </Box>
    </BoxWrapper>
    </>
  )
}

export default Home