import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
// import more components
export default (
    <HashRouter>
     <div>
      <Route path='/' component={Home} />
     </div>
    </HashRouter>
);
