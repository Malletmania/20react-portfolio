import React from 'react';

export default function Portfolio() {

  const styles={
    img: {
      width: '100%',
      height: '50%',
    },
    card: {
      width: '25rem',
      boxShadow: '10px 10px 5px grey',
      margin: '2rem'
    },
    header: {
      margin: 'auto',
      color: '#3f87a6',
    }
  }

  return (
    <>
      <div className="d-flex">
        <h2 style={styles.header} >Examples of My Work</h2>
      </div> 
      <div className="d-flex flex-wrap justify-content-center justify-space-between p-2 m-2">
        <div className="card" style={styles.card}>
          <img src={Bookstore} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Bookstore App Group Project</h5>
            <p className="card-text"> Tech Used: <br/>
            Node<br/>
             Express <br/>
             Express-Handlebars <br/>
             Sequelize <br/>
             MySQl2</p>
          </div>
          <div className="card-body">
            <a href="https://github.com/Malletmania/book-store" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
            <a href="https://kesjoberg-bookstore.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="card-link">Deployed Code</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={Bookstore} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Northern Cocktail Viewer App</h5>
            <p className="card-text"> Tech Used: <br/>
            Node<br/>
             HTML <br/>
             CSS <br/>
             JavaScript <br/>
             </p>
          </div>
          <div className="card-body">
            <a href="https://github.com/Malletmania/northern_cocktail_viewer" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={Employee} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Employee Management System</h5>
            <p className="card-text"> Tech Used:<br/>
             Node<br/>
             Express <br/>
             Inquirer <br/>
             Console.Table <br/>
             MySQl2</p>
          </div>
          <div className="card-body">
            <a href="https://github.com/Malletmania/12-Employee_tracker" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
            <a href="https://drive.google.com/file/d/1tyEx0A_OlzfFYYchogMCA4c3ZMhBxhew/view" target="_blank" rel="noreferrer noopener" className="card-link">Video Demo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={Team} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Team Builder App</h5>
            <p className="card-text"> Tech Used: <br/>
            Node<br/>
            Inquirer <br/>
             Jest <br/>
             Bootstrap</p>
          </div>
          <div className="card-body">
            <a href="https://github.com/Malletmania/10-Profile-generator" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={Bookstore} className="card-img-top" alt="screenshot of deployed code"/>
          <div className="card-body">
            <h5 className="card-title">Video Game Storage Shelf App Group Project</h5>
            <p className="card-text"> Tech Used: <br/>
            apollo-server-express<br/>
             Express <br/>
             Bootstrap <br/>
             cors <br/>
             react-bootstrap <br/>
             react-router-dom <br/>
             Mongoose <br/>
             Bcrypt</p>
          </div>
          <div className="card-body">
            <a href="https://github.com/Malletmania/group-project-3" target="_blank" rel="noreferrer noopener" className="card-link">Github Repo</a>
          </div>
        </div>
      </div>
    </>

  );
}