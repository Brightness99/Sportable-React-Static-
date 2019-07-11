import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import Header from 'containers/Header'
import Footer from 'containers/Footer'

import "react-responsive-carousel/lib/styles/carousel.min.css"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'assets/styles/index.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Dynamic path="dynamic" />
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  )
}

export default App
