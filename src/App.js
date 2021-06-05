import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

import Header from './components/Header';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Portfolio from './pages/Portfolio';
import CV from './pages/CV';
import Contact from './pages/Contact';

import './assets/styles/_normalize.css';

export default function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <>
            <Header />
            <PageTransition
              preset="cubeToTop"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/apropos" component={Apropos} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/cv" component={CV} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </PageTransition>
            </>
          );
        }}
      />
    </BrowserRouter>
  );
}