import React from 'react';

import { BrowserRouter, Navigate, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills isAuthenticated={false} />} />
            <Route path="/about">
              <Route path="/" element={<About />} />
              <Route path=":id" element={<AboutDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

const Home = () => (
  <div>
    <Menu />

    <p>Ini Home</p>
  </div>
)

const About = () => (
  <div>
    <Menu />

    <p>Ini About</p>

    <Outlet />

    <ul>
      <li><Link to="ari">Ari</Link></li>
      <li><Link to="nate">Nate</Link></li>
    </ul>
  </div>
)

const AboutDetail = () => {
  let { id } = useParams()

  return (
    <div>
      <Menu />

      <p>Ini Detail about -> {id} </p>

      <Link to="/about">Back</Link>
    </div>
  )
}

const Skills = ({ isAuthenticated }) => (
  <div>
    <Menu />

    {isAuthenticated && <Navigate to="/" />}

    <p>Ini Skills, harusnya tampil nih saat akses /skill, cuman gara-gara component Navigate di atas, otomatis di redirect ke home</p>
  </div>
)

const Menu = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/about">About</Link>
  </nav>
)

export default App;
