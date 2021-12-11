import React, { useState } from 'react';
// import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';
import About from '../pages/Aboutme';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }  
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const styles= {
    bg:{
      background:  '#c3e4f1',
      height: '100%',
    },
    nav:{
      justifyContent: 'space-between',
    }
  }

  return (
    <div style={styles.bg}>
      <section>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/> 
      
      </section>
      
      {renderPage()}
      <Footer />
    </div>
  );
}