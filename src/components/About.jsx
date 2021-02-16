import React from 'react';

export default function About(props) {
    // let aboutStyle={
    //     backgroundImage: 'url(' + '../img/Sarah.JPG' + ')'
    // }
    return (
        <div className="section about">
            {/* <div style={aboutStyle} className="about-image">
            </div> */}
            <div className="about-text">
                <h1 className="fancy">About</h1>
                <p>
                Innovative and adaptable <strong><em>Software Engineer</em></strong> with healthcare and customer service background. Strong grasp of JavaScript & Python fundamentals, React, API, AWS, SQL and NoSQL database designs. Curious with highly-developed analytical skills and real passion for solving problems and implementing effective solutions, in a dynamic, highly technical environment. Proactive collaborator with outstanding verbal and written communication skills. Proficient in computer science fundamentals, including data structures, algorithms, operating systems, shell commands, and distributed systems
                </p>
            </div>
        </div>
    )
}