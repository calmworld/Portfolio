import React from 'react'
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { 
    type ISourceOptions, 
    Engine
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";


const ParticleComp: React.FC = () => {
	const [init, setInit] = useState(false);

	const options: ISourceOptions = useMemo(() => ({
		background: {
			color: {
				value: "#000000",
			},
		},
		fpsLimit: 60,
		interactivity: {
			detectsOn: "canvas",
			events: {
				onClick: {
					enable: false,
					mode: "push",
				},
				onHover: {
					enable: true,
					mode: "repulse",
				},
			},
			modes: {
				bubble: {
					distance: 400,
					duration: 2,
					opacity: 0.8,
					size: 40,
				},
				push: {
					quantity: 1,
				},
				repulse: {
					distance: 200,
					duration: 0.4,
				}
			},
		},
		particles: {
			color: {
				value: ["#800000"],
			},
			links: {
				color: "#571717",
				distance: 150,
				enable: false,
				opacity: 0.5,
				width: 1,
			},
			collisions: {
				enable: true,
			},
			move: {
				direction: "none",
				enable: true,
				outMode: "bounce",
				random: true,
				speed: 9,
				straight: false
			},
			number: {
				density: {
					enable: true,
					value_area: 800,
				},
				value: 10,
			},
			opacity: {
				value: 0.8,
			},
			shape: {
				type: "edge",
			},
			size: {
				random: true,
				value: 9,
			},
		},
		detectRetina: true,
	}), []);

	useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (init) {
        return (
            <div className="fixed">
                <Particles
                    id="tsparticles"
                    options={options}
                />
            </div>
        );
    }

	return <></>;
};

export default ParticleComp;