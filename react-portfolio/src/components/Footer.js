import  "../css/footer.css";

function Footer(){
    return (
      <div className="" style={styles.footer}>
      <Button style={styles.link} target="_blank" href='https://github.com/Cygnet717' variant="outline-dark">Git Hub</Button>
      <Button style={styles.link} target="_blank" href='https://www.linkedin.com/in/kathy-bradt-1796a9191/' variant="outline-dark">Linked In</Button>
      <Button style={styles.link} target="_blank" href='https://stackoverflow.com/users/13035422/kathyb' variant="outline-dark">Stack Overflow</Button>
      <Button style={styles.link} target="_blank" href={resume} variant="outline-dark">Resume</Button>
    </div>
    );
}

export default Footer;