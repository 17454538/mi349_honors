import React from 'react'
import TopFrame from './img/frame.png';
import BottomFrame from './img/frame-bottom.png';
import Banner from './img/banner.png';

const Home = () => {
    return (
        <div className = "container">

            <img src = {Banner} alt = "Banner" id = "banner-img"></img>
            <section id = "home-body">
                <img className = "frame-img" src = {TopFrame} alt = "Decorative frame"></img>
                <h1>Quoth the Raven</h1>
                <p><em>Quoth the Raven</em> is a point-and-click puzzle game where you play as Edgar Allan Poe’s mischievous pet raven. Wreak havoc through the streets of 1800s Baltimore in order to provide inspiration for Poe’s stories!</p>
                <p>You can purchase the game <a href = "https://itch.io/b/741/msu-gamedev-charity-bundle">HERE</a></p>
                <p>You can play an older demo of the game HERE: </p>
                <iframe id = "demo" title = "Quoth Demo" src="https://widgets.gamejolt.com/package/v1?key=jHY8jmVL" frameborder="0" width="500" height="245"></iframe>
                <br/>
                <img className = "frame-img" src = {BottomFrame} alt = "Decorative frame"></img>
            </section>

        </div>
    )
}

export default Home