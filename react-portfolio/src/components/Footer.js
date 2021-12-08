import  "../css/footer.css";

function Footer(){
    return (
      <div className="" style={styles.footer}>
      <Button style={styles.link} target="_blank" href='https://github.com/Malletmania' variant="outline-dark">Git Hub</Button>
      <Button style={styles.link} target="_blank" href='https://www.linkedin.com/in/benny-camarillo-024a1118a/' variant="outline-dark">Linked In</Button>
      <Button style={styles.link} target="_blank" href={resume} variant="outline-dark">Resume</Button>
    </div>
    );
}

export default Footer;