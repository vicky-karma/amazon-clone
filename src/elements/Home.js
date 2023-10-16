import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <div className='div'>
        <Carousel indicators={false} interval={5000}>
            <Carousel.Item style={{height:'250px'}}>
                <img className='d-block w-100' src='/images/carousel1.jpg' alt='1' />
            </Carousel.Item >
            <Carousel.Item style={{height:'250px'}} >
                <img src='/images/carousel2.jpg' className='d-block w-100' alt=''/>
            </Carousel.Item>
            <Carousel.Item style={{height:'250px'}}>
                <img className='d-block w-100' src='/images/carousel3.jpg' alt='1' />
            </Carousel.Item >
            <Carousel.Item style={{height:'250px'}} >
                <img src='/images/carousel4.jpg' className='d-block w-100' alt=''/>
            </Carousel.Item>n
            <Carousel.Item style={{height:'250px'}}>
                <img className='d-block w-100' src='/images/carousel5.jpg' alt='1' />
            </Carousel.Item >
        </Carousel>
    </div>
  )
}

export default Home
