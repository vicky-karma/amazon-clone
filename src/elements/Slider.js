import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../elements/Slider.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = () => {
  return (
    <div>
        <Carousel  className='item' indicators={false}>
            <Carousel.Item className='items'>  
               <div className='div-item'>
               <span>
               <h5>cooking aplliances</h5>
                    <img src='/images/c1.jpg' alt=''></img>
                </span>
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c2.jpg' alt=''></img>
                </span>
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c3.jpg' alt=''></img>
                </span >
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c4.jpg' alt=''></img>
                </span>
               </div>
            </Carousel.Item >
            <Carousel.Item>
               <div className='div-item'>
               <span >
               <h5>cooking aplliances</h5>
                    <img src='/images/c5.jpg' alt=''></img>
                </span>
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c6.jpg' alt=''></img>
                </span>
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c7.jpg' alt=''></img>
                </span >
                <span>
                <h5>cooking aplliances</h5>
                    <img src='/images/c8.jpg' alt=''></img>
                </span>
               </div>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Slider
