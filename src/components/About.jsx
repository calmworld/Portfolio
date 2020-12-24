import React from 'react';

export default function About(props) {
    let aboutStyle={
        backgroundImage: 'url(' + '../img/Sarah.JPG' + ')'
    }
    return (
        <div className="section about">
            <div style={aboutStyle} className="about-image">
            </div>
            <div className="about-text">
                <h1 className="fancy">About</h1>
                <p>
                Innovative and adaptable <strong><em>Software Engineer</em></strong> with extensive experience contributing to various software projects using React, Node, Bootstrap, CSS3, SQL, NoSQL, Python and cloud/AWS deployment. Highly-developed analytical skills and proven ability to identify problems and implement effective solutions while remaining efficient. Passionate and intuitive in executive interactions and adept at building high end web applications. Strong communication skills and ability to work closely with a small team, as well as with clients. Proficient in computer science fundamentals, including data structures, algorithms, operating systems, and distributed systems. 
                </p>
            </div>
        </div>
    )
}