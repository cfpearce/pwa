// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import About from "./About";
// import Home from "./Home";
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));

const App: React.FC = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home`</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Suspense>
);

export default App;
