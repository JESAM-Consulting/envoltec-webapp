import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from '../Home'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

export default function Routes() {
  return (
    <div>

      {/* <Home /> */}
      {/* <Blog /> */}
      {/* <BlogList /> */}
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Footer />
      </Router>
    </div>
  )
}
