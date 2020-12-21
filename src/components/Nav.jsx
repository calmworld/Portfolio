import React from 'react';
import Slide from '@material-ui/core/Slide';
import { HashLink as Link } from 'react-router-hash-link';


export default function Nav(props) {
    return (
        <Slide direction="up" in="true" timeout={{enter:2000}}>
            <nav>
                <ul class="sticky"> 
                    <Link to="/#about"><li>About</li></Link>
                    <Link to="/#projects"><li>Projects</li></Link>
                    <Link to="/#skills"><li>Skills</li></Link>
                    <Link to="/#contact"><li>Contact & Resume</li></Link>
                </ul>
            </nav>
        </Slide>
    )
}



