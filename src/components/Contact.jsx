import React from 'react';
import {InboxIcon, MailIcon, PersonIcon, MarkGithubIcon} from '@primer/octicons-react'

export default function Contact(props) {
    return (
        <nav>
            <ul>
                <li alt="email">
                    <MailIcon /><div className="spacer"></div>
                    sarah.alhuriz@hotmail.com
                </li>
                <li>
                    <PersonIcon /><div className="spacer"></div>
                    <a href="https://www.linkedin.com/in/sarah-alhuriz/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </li>
                <li alt="github">
                    <MarkGithubIcon /><div className="spacer"></div>
                    GitHub: <div className="spacer"></div>
                    <a href="https://github.com/calmworld" target="_blank" rel="noopener noreferrer">calmworld</a>
                </li>
                <li>
                    <InboxIcon /><div className="spacer"></div>
                    <a href="https://drive.google.com/file/d/1qAusZDpgplZ60tr2ZPsCttignUqoT6n8/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
            </ul>
        </nav>
    )
}
