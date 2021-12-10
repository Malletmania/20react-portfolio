import React from 'react';
import ksResume from '../assets/karna_sjoberg_resume_web_dev.pdf'


export default function Resume() {
  const styles={
    heading: {
      paddingLeft: '2%',
    },
    aboutme: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '2%',
      width: '100%',
      height: '50%',
    },
    col3:{ 
      display: 'flex',
      width: '33%',
    },
    col9:{ 
      width: '66%',
      marginLeft: '35%',
    },
  }
  return (
    <div className="p-2">
      <h2 style={styles.heading}>Learned Technologies</h2>
        <div className='row'>
          <div className='col-4'>
            <h4 style={styles.heading}>Front-end</h4>
          </div> 
          <div className='col-8' >
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
          </div>
        </div>  
        <div className='row'>
          <div className='col-4'>
            <h4 style={styles.heading}>Back-end</h4>
          </div> 
          <div className='col-8' >
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL Sequelize</li>
              <li>Mongo Mongoose</li>
            </ul>
          </div>
        </div>  
        <div>
          {/* <a href={ksResume} target="_blank" rel="noreferrer noopener">Click Here to Download My Resume</a> */}
        </div>
    </div>

  );
}