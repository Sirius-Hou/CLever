import {React} from 'react';
import { Footer, Blog, Possibility, Features, Clever, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './mainPage.css';

const MainPage = () => {
  return (
    <div className="MainPage">
      <Navbar />
        <div className="gradient_bg">
            <Header />
        </div>
        <Brand />
        <Clever />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default MainPage