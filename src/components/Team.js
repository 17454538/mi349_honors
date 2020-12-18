import React from 'react'
import TopFrame from './img/frame.png';
import BottomFrame from './img/frame-bottom.png';
import Blake from './img/blake.png';
import Davier from './img/davier.png';
import Rachel from './img/rachel.png';
import Diego from './img/diego.png';
import Zuhair from './img/zuhair.png';
import Sam from './img/sam.png';
import Andy from './img/andy.png';
import Lee from './img/lee.png';

const Team = () => {
    return (
        <div className = "container">
            <section id = "home-body">
                <img className = "frame-img" src = { TopFrame } alt = "Decorative frame"></img>
                
                <div id = "team-container"> 
                    <div className = "teammate">
                        <img className = "team-img" src = { Blake } alt = "Blake Portrait"></img>
                        <h1>Blake Kaufman</h1>
                        <p>Producer, programmer</p>
                    </div>
                    <div className = "teammate">
                        <img className = "team-img" src = { Davier } alt = "Da'Vier Portrait"></img>
                        <h1>Da'Vier Jackson</h1>
                        <p>Lead Designer, 2D Artist</p>
                    </div>
                    <div className = "teammate">
                        <img className = "team-img" src = { Rachel } alt = "Rachel Portrait"></img>
                        <h1>Rachel Allen</h1>
                        <p>Lead 2D Artist, animator</p>
                    </div>
                    <div className = "teammate">
                        <img className = "team-img" src = { Diego } alt = "Diego Portrait"></img>
                        <h1>Diego Vazquez</h1>
                        <p>3D Artist</p>
                    </div>
                    <div className = "teammate">
                        <img className = "team-img" src = { Zuhair } alt = "Zuhair Portrait"></img>
                        <h1>Zuhair Khan</h1>
                        <p>Designer, 2D Artist</p>
                    </div>
                    <div className = "teammate">
                        <img className = "team-img" src = { Sam } alt = "Sam Portrait"></img>
                        <h1>Samantha Johns</h1>
                        <p>2D Artist, effects artist</p>
                    </div>
                    <div className = "teammate">
                        <img className = "team-img" src = { Andy } alt = "Andy Portrait"></img>
                        <h1>Andy Zhang</h1>
                        <p>Gameplay programmer</p>
                    </div>
                    <div className = "teammate">
                        <img className = "team-img" src = { Lee } alt = "Lee Portrait"></img>
                        <h1>Lee Standen</h1>
                        <p>Systems programmer</p>
                    </div>
                </div>
                <p>Special thanks to: </p>
                <div className = "special-teammate"> 
                    <h1 className = "special-teammate-name">Gaby Bentdsen</h1>
                    <p>Composer, sound designer</p>
                </div>
                <div className = "special-teammate"> 
                    <h1 className = "special-teammate-name">Cole Harvey</h1>
                    <p>Voice actor</p>
                </div>
                <div className = "special-teammate"> 
                    <h1 className = "special-teammate-name">Tom Choi</h1>
                    <p>Programmer</p>
                </div>
                <img className = "frame-img" src = { BottomFrame } alt = "Decorative frame"></img>
            </section>
        </div>
    )
}

export default Team