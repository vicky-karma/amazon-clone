import React from 'react'
import '../elements/Navbar.css'
import {HiLocationMarker} from 'react-icons/hi'
import {BsSearch} from 'react-icons/bs'
import {FaAngleDown} from 'react-icons/fa'
import {CgShoppingCart} from 'react-icons/cg'
import {BiMenu} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Home from './Home'
import Hero from './Hero'
import Slider from './Slider'
import Footer from './Footer'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Navbar = () => {
    return (
        <>
        <div className='navbar1'>
            <div className='logo-box bord '>
                <img className='logo' src='/images/logo.jpg' alt=''/>
            </div>
            
            <div className='box1 bord'>
                <HiLocationMarker className='box1-logo'/>
                <div className='box1-box'>
                    <span>hello</span>
                    <p>select your address</p>
                </div>
            </div>

            <div className='box2'>
                <select>
                    <option>All</option>
                </select>
                <input placeholder='Search Amazon.in'></input>
                <div className='box2-iconbox'>
                    <BsSearch size={25}  className='box2-icon'/>
                </div>
            </div>

            <div className='box3 bord'>
                 <div>
                    <span>hello,sign in</span>
                    <p>accounts & lists</p>
                 </div>
                 <div className='box3-iconbox'>
                    <FaAngleDown/>
                 </div>
            </div>
            
            <div className='box4 bord'>
                <div>
                    <span>returns</span>
                    <p>&orders</p>
                </div>
            </div>

            <div className='box5 bord'>
                <div>
                    <CgShoppingCart size={40}/>
                </div>
                <sub>cart</sub>
            </div>

        </div>
        <div className='navbar2'>
            <div>
                <BiMenu className='bord' size={30} />
                <span>All</span>
            </div>
            <div className='list-div'>
                <Dropdown as={ButtonGroup} >
                    <Button style={{'background':'rgb(9,9,30)','border':'0'}} >Television</Button>
                    <Dropdown.Toggle split style={{'background':'rgb(9,9,30)','border':'0'}}  ></Dropdown.Toggle>
                    <Dropdown.Menu style={{'background':'rgb(9,9,30)','border':'0'}}>
                    <Dropdown.Item style={{'background':'rgb(9,9,30)','color':'white'}}>
                        <li className='d-li'><Link className='nav-link'>Sony </Link></li >
                        <li className='d-li'><Link className='nav-link'>Dell </Link></li>
                        <li className='d-li'><Link className='nav-link'>HP</Link></li>    
                    </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <li className='bord'><Link className='nav-link'>sell </Link></li >
                <li className='bord'><Link className='nav-link'>best seller </Link></li>
                <li className='bord'><Link className='nav-link'>deal</Link></li>
                <li className='bord'><Link className='nav-link'>item</Link></li>
                <li className='bord'><Link className='nav-link'>product</Link></li>
                <li className='bord'><Link className='nav-link '>image</Link></li >
                <li className='bord'><Link className='nav-link '>food</Link></li>
                <li className='bord'><Link className='nav-link '>groccery</Link></li>
                <li className='bord'><Link className='nav-link'>crocary</Link></li>
                <li className='bord'><Link className='nav-link '>releases</Link></li>
            </div>
            <div>
                <img src='/images/navimg.jpg' alt=''/>
            </div>
        </div>
        <Home/>
        <Hero/>
        <Slider/>
        <button className='button'>signin</button>
        <Footer/>
    </>
    )
}

export default Navbar
