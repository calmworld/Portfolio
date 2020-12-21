import React from 'react';
import Slide from '@material-ui/core/Slide';

export default function Header(props) {
    let headStyle={
        backgroundImage: 'url(' + '../img/pancea.png' + ')'
    }

    return (
        <div className="header">
            {/* <Slide direction="right" in="÷true" timeout={{enter:1000}}> */}
                <div className="header-img" style={headStyle}>
                </div>
            {/* </Slide> */}
            <Slide direction="left" in="true" timeout={{enter:1000}}>
                <div className="header-text">
                    <h1 className="fancy">Sarah Alhuriz</h1>
                    <h2>Full Stack Web Developer</h2>
                </div>
            </Slide>
        </div>
    )
}