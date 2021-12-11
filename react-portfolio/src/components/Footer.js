import  "../css/Footer.css";

function Footer(){

  const style = {
    nav: {
      background: "#3f87a6",
      width: "100%",
      height: "10%",
      display: "flex",
      justifyContent: "center",
      // padding: '1%',
      alignContent: "center",
      listStyleType: "none",
      marginTop: "0px",
    },
    a: {
      color: "white",
      fontSize: "30px",
      marginLeft: "30px",
      marginRight: "30px",
    },
  };

    return (
      <div className="" style={styles.Footer}>
      <Button style={styles.link} target="_blank" href='https://github.com/Malletmania' variant="outline-dark">GitHub</Button>
      <Button style={styles.link} target="_blank" href='https://www.linkedin.com/in/benny-camarillo-024a1118a/' variant="outline-dark">Linked In</Button>
      <Button style={styles.link} target="_blank" href={resume} variant="outline-dark">Resume</Button>
    </div>
    );
}

export default Footer;