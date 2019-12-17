import React from 'react';
import RouterView from "./Children/router/config"
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Router>
          <RouterView/>
        </Router>
    </div>
  );
}

export default App;
