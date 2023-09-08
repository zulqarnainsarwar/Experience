import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Main from "./components/Main";
import DiscoverGame from "./components/DiscoverGame";
import EscapeGame from "./components/EscapeGame";
import FirstSlide from "./components/ExartaHQ/FirstSlide";
import SecondSlide from "./components/ExartaHQ/SecondSlide";
import GameZone from "./components/NewGames/GameZone";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/discover" element={<DiscoverGame />} />
          /secondslide
          <Route path="/firstslide" element={<FirstSlide />} />
          <Route path="/secondslide" element={<SecondSlide />} />
          <Route path="/escape" element={<EscapeGame />} />
          <Route path="/newgame" element={<GameZone />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
