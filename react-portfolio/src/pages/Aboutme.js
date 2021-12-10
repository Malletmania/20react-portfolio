import React from 'react';

export default function AboutMe() {

  const styles = {
    heading: {
      paddingLeft: "2%",
    },
    aboutme: {
      display: "flex",
      flexWrap: "wrap",
      paddingLeft: "2%",
      paddingRight: "2%",
      width: "100%",
      height: "70%",
    },
    img: {
      display: "block",
      maxWidth: "162px",
      maxHeight: "378px",
      height: "auto",
      width: "auto",
    },
  };

  return (
    <div className="p-2">
      <h1 style={styles.heading}>About Page</h1>
      <div className="row">
        <div className="col-12 col-md-3">
          <img style={styles.img} src={Photo} alt="Benjamin Camarillo"></img>
          {/* img tage of yourself here */}
        </div>
        <div className="col-12 col-md-9">
          <p>
            My name is Benjamin Camarillo and I have worked in customer service
            and admin work for 8 years. I have 6+ years of leadership and
            training expierence in past roles such as Shift Lead and Percussion
            director. In both roles I was responsable for training and
            comprehension of new hires. As a percussion director I was
            responsable for learning music programs and content creation of
            music material for students.
          </p>
          <p>
            I have been interested in web development since my introduction to
            basic game coding in high school. My expierence and interest
            continued into undergrad when I took a Videogame Design course. That
            continued fasination with problem solving and design has carried me
            to where I am now at the completeion of a trilogy full stack
            developer program.
          </p>
        </div>
      </div>
    </div>
  );
}
