import React from 'react';
import NavTabs from './NavTabs';
import Background from '../assets/header_backgroud.jpg';

function Header(props) {
  const style={
    header: {
      backgroundImage: `url(${Background})`,
      width: '100%',
      height: '135px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1%',
      alignContent: 'center'
    },
    heading:{
      justifyContent: 'left',
      alignContent: 'center', 
      color: 'white',
      display: 'flex'
    },
    nav: {
      paddingLeft: '200px',
      justifyContent: 'space-between',
      alignContent: 'center'
    }
    
  }

  return (
    <header style={style.header}>
     <h1 style={style.heading}>Benjamin Camarillo  </h1>
     <span>
      <NavTabs style={style.nav} currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
     </span> 
    </header>

  )
}  

export default Header;