import './style.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Team from './components/Team.js';
import Tweets from './components/Tweets.js';

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Navbar />
        <Route exact path="/" component = {Home} />
        <Route path="/about" component = {About} />
        <Route path="/team" component = {Team} />
        <Route path="/tweets" component = {Tweets} />
      </div>
    </BrowserRouter>
  );
}

export default App;
