import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import About from './routes/about';
import Mission from './routes/mission';
import WhiteLabel from './routes/white-label';
import VirtualBusinessLicenses from './routes/virtual-business-licenses';
import MarketingAndAdvertising from './routes/marketing-and-advertising';

import Navigation from './Navigation';
import Footer from './Footer';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/mission" element={<Mission />} />
        <Route exact path="/whitelabel" element={<WhiteLabel />} />
        <Route exact path="/virtual_business_licenses" element={<VirtualBusinessLicenses />} />
        <Route exact path="/marketing_and_advertisement" element={<MarketingAndAdvertising />} />
      </Routes>
    </BrowserRouter>
    <Footer />

  </React.StrictMode>
)
