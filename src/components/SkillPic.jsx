import React from 'react';

export default function SkillPic(props) {
    let picStyle = {
        backgroundImage: 'url(' + props.pic + ')'
    }
    return <div className="skill-pic" style={picStyle}></div>
}