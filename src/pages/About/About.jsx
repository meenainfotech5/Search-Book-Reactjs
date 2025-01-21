import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>BookHub is one of the largest online library catalogs that connect thousands of libraries collections into a single platform allowing you to search various libraries from a single search box. You can use WorldCat to search for a wide variety of resources including research theses, books, magazines, songs, maps, genealogical records, movies, and more.</p>
            <p className='fs-17'>The way bookhub works is simple: type in your search query in the site’s search box and browse through the list of libraries that provide access to  the material you search for.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
