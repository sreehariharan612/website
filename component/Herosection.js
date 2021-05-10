import React from 'react'
import {Button} from './Button'
import './Herosection.css';
import '../App.css'

function Herosection() {
    return (
        <div className="hero-container">
            <video src={require('../videos/video-1.mp4').default} autoPlay muted loop/>
            <h1> EXPLORE THE ADVENTURE</h1>
            <p>why you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">LET'S START</Button>
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">VISIT PLACES<i className="far fa-play-circle"/></Button>
            </div>
        </div>
    )
}

export default Herosection
