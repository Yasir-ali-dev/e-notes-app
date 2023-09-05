import React from 'react';

const AboutUs = () => {
  return (
    <div className='about-page'>
      <div className="about-img">
        <img src={require("../assets/integrated-cloud-data-system-flow-isometric-illustration_55887-74.avif")} alt="about-main-page" />
        <h1>About E-Notes App</h1>
      </div>
      <div className="about-page-info">
        <section>
            <h2>About Us</h2>
            <p>At E-notes, we believe that capturing thoughts, ideas, and inspiration should be effortless and empowering. Our note-taking website is designed with your productivity and creativity in minds.
            </p>
        </section>
        <section>
            <h2>Our Mission and Vision</h2>
            <p>Our mission is simple yet profound: to enhance the way you take notes, learn, and collaborate. We envision a world where everyone has access to a platform that helps them capture and nurture their ideas</p>
        </section>
        <section>
            <h2>Our Journey</h2>
            <p>Founded in 2020, E-Notes has grown from a small startup to a recognized leader in the note-taking industry. Our journey has been marked by continuous innovation, dedication</p>
        </section>
        <section>
            
        </section>
      </div>
    </div>
  )
}

export default AboutUs;