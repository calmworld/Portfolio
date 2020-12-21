import React from 'react';

// import SkillPic from './SkillPic';

export default function Skills(props) {
    let skillLists = Object.keys(props.skills.skills).map(key => {
        let skillList = props.skills.skills[key].map(skill => {
            return (<li>{skill}</li>)
        })
        return (
            <div>
                <h4 className="skill-title">{key}</h4>
                <ul>
                    {skillList}
                </ul>
            </div>
        )
    });
    let skillPics = props.skills.pics.map(pic => {
        return <img src={pic} className="skill-pic" />
    });
    
    return (
        <div className="section skills">
            <div>
                <h1 className="fancy proj-title">Skills</h1>
                <div className="skill-text">
                    <div className="skill-list">{skillLists}</div>
                    <div className="skill-pics">{skillPics}</div>
                </div>
            </div>
        </div>
    )
}




