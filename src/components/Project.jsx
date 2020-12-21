import React from 'react';

export default function Project(props) {
    let projStyle = {
        backgroundImage: 'url(' + props.project.img + ')'
    }
    let gifStyle = {
        backgroundImage: 'url(' + props.project.gif + ')',
        backgroundPosition: 'left'
    }

    let mobileImages = !props.project.imgs ? "":
        props.project.imgs.map(image => {
            return <img src={image} />
        })

    let projectImage = props.project.img ? 
        <div style={projStyle} className="proj-img">
            <div style={gifStyle} className="proj-img">
            </div> 
        </div>: 
        <div className="mobile-images proj-img">
            {mobileImages}
        </div>

    let projectLink = !props.project.link? "":
        (<>
            <a href={props.project.link} target="_blank" rel="noopener noreferrer">View {props.project.name} live</a>
            <span className="divider">|</span>
        </>);

    return (
        <div className="section">
            {projectImage}
            <div className="proj-text">
                <h2 className="fancy">{props.project.name}</h2>
                <p>{props.project.description}</p>
                {props.project.quote?<blockquote>{props.project.quote}</blockquote>:""}
                <p><strong>Tech: </strong><span className="tech">{props.project.tech}</span></p>
                <div className="proj-links">
                    {projectLink}
                    <a href={props.project.github} target="_blank" rel="noopener noreferrer">Project GitHub</a>
                </div>
            </div>
        </div>
    )
}