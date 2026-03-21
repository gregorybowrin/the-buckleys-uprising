import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TheEvent from './pages/TheEvent';
import TheLegacy from './pages/TheLegacy';
import Timeline from './pages/Timeline';
import Memorial from './pages/Memorial';
import WomenOfUprising from './pages/Women';
import Trials from './pages/Trials';
import StrikeMap from './pages/Map';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <Router>
      <div className="app">
        <AudioPlayer />
        {/* Fixed St. Kitts Flag Overlay */}
        <img
          src="/stkitts-nevis-flag.png"
          alt="St. Kitts Flag"
          className="fixed-flag-overlay"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/the-event" element={<TheEvent />} />
          <Route path="/women" element={<WomenOfUprising />} />
          <Route path="/map" element={<StrikeMap />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/trials" element={<Trials />} />
          <Route path="/legacy" element={<TheLegacy />} />
          <Route path="/memorial" element={<Memorial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
