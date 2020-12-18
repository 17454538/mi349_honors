import React from 'react'
import TopFrame from './img/frame.png';
import BottomFrame from './img/frame-bottom.png';
import TweetEmbed from 'react-tweet-embed';

const Tweets = () => {
    return (
        <div className = "container">
            <section id = "home-body">
                <img className = "frame-img" src = { TopFrame } alt = "Decorative frame"></img>
                <h1> Tweets from @QuothGame</h1>
                <div id = "team-container">
                    <div className = 'teammate'><TweetEmbed id='1339984696520957952' options={{theme: 'dark' }}/></div>
                    <div className = 'teammate'><TweetEmbed id='1339985169726496772' options={{theme: 'dark' }}/></div>
                    <div className = 'teammate'><TweetEmbed id='1339986798433488897' options={{theme: 'dark' }}/></div>
                </div>


                <br/>
                <img className = "frame-img" src = { BottomFrame } alt = "Decorative frame"></img>
            </section>
        </div>
    )
}

export default Tweets