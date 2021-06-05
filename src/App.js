import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PageTransition } from '@steveeeie/react-page-transition'

import Header from './components/Header'
import Apropos from './pages/Apropos'
import CV from './pages/CV'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

import './assets/styles/_normalize.css'

export default function App() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => {
          return (
            <>
              <Header />
              <PageTransition preset="cubeToTop" transitionKey={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Apropos} />
                  <Route exact path="/cv" component={CV} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/skills" component={Skills} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </PageTransition>
            </>
          )
        }}
      />
    </BrowserRouter>
  )
}
