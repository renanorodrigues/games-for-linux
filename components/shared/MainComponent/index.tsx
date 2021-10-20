import React from 'react';
import Header from '../Header/PainelHeader';
import Footer from '../Footer/PainelFooter';

const MainComponent: React.FC = ({ children }) => {
  return(
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />
      <div className="container flex-fill">
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default MainComponent;