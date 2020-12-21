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
                Innovative and adaptable Software Developer with extensive experience contributing to various software projects using in demand professional software. Highly-developed analytical skills and proven ability to identify problems and implement effective solutions while remaining efficient. Driven to communicate well and establish strong rapport in the field of software. Empathetic and intuitive in executive interactions and adept at building high end web applications. Experience with Javascript, Python, React.js, SQL dialects, and Java. 
                </p>
            </div>
        </div>
    )
}