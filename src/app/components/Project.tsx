import React from 'react';

interface ProjectDetailsProps {
	project: {
	  img?: string;
	  gif?: string;
	  imgs?: string[];
	  link?: string;
	  name: string;
	  description: string;
	  quote?: string;
	  tech: string;
	  github: string;
	};
}

interface ProjectDisplayProps {
	name: string;
	description: string;
	tech: string;
	link: string;
	github: string;
	img: string;
	gif?: string;
  }

export const Project: React.FC<ProjectDetailsProps> = ({ project }) => {
	let projStyle: React.CSSProperties = {
		backgroundImage: `url(${project.img})`,
	  };
	
	  let gifStyle: React.CSSProperties = {
		backgroundImage: `url(${project.gif})`,
		backgroundPosition: 'left',
	  };

	  let mobileImages = !project.imgs
	  ? ""
	  : project.imgs.map((image, index) => (
		  <img key={index} alt='mobileImage' src={image} />
		));
  
	let projectImage = project.img ? (
	  <div style={projStyle} className='proj-img'>
		<div style={gifStyle} className='proj-img'></div>
	  </div>
	) : (
	  <div className='mobile-images proj-img'>{mobileImages}</div>
	);

	let projectLink = !project.link ? (
		""
	  ) : (
		<>
		  <a href={project.link} target='_blank' rel='noopener noreferrer'>
			View {project.name} live
		  </a>
		  <span className='divider'>|</span>
		</>
	  );

	return (
		<div className='section'>
      {projectImage}
      <div className='proj-text'>
        <h2 className='fancy'>{project.name}</h2>
        <p>{project.description}</p>
        {project.quote ? <blockquote>{project.quote}</blockquote> : ""}
        <p>
          <strong>Tech: </strong>
          <span className='tech'>{project.tech}</span>
        </p>
        <div className='proj-links'>
          {projectLink}
          <a
            href={project.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            Project GitHub
          </a>
        </div>
      </div>
    </div>
	);
}
