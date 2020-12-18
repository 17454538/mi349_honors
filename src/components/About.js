import React from 'react'
import TopFrame from './img/frame.png';
import BottomFrame from './img/frame-bottom.png';

const About = () => {
    return (
        <div className = "container">
            <section className = "home-body">
                <img className = "frame-img" src = { TopFrame } alt = "Decorative frame"></img>

                <p><em>Quoth the Raven</em> is a point-and-click puzzle game where you play as Edgar Allan Poe’s mischievous pet raven. Wreak havoc through the streets of 1800s Baltimore in order to provide inspiration for Poe’s stories!</p>
                <p>Quoth was developed by a small team of students in the Game Design Minor at Michigan State University. It was initally concieved in the rapid prototyping class MI455 and developed by a team of four, before being selected as one of five games to go forward into the next class, MI497, where it was developed for a full semester by a team of eight, with outside music and sound help from a music program student.</p>
                <p>This semester, we are offering all five games produced in MI497 for sale as part of bundle on itch.io. For a minimum of $5, you can gain access to all five games. All proceeds are split between MSU's GameDev club, SpartaSoft, and the Detroit Covid Relief Fund. You can view the bundle here: </p>
                <iframe title = "Quoth Itchio" frameborder="0" src="https://itch.io/embed/831371?bg_color=404040&amp;fg_color=dadada" width="552" height="167"><a href="https://chrom-ium.itch.io/quoth-the-raven">Quoth the Raven by chrom-ium, NacreMoon</a></iframe>
                <br/>
                <img className = "frame-img" src = { BottomFrame } alt = "Decorative frame"></img>
            </section>
        </div>
    )
}

export default About