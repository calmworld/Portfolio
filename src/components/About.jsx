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
                Innovative and adaptable bilingual <strong><em>Software Engineer</em></strong> with a healthcare background. Curious with highly-developed analytical skills and real passion for solving problems and implementing effective solutions, in a dynamic, highly technical environment. Proactive collaborator with outstanding verbal and written communication skills.
                </p>
            </div>
        </div>
    )
}