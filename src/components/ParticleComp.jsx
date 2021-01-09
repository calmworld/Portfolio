import React from 'react'
import Particles from 'react-tsparticles'

function ParticleComp() {
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }}>
            <Particles
                id="tsparticles"
                options={{
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
                            resize: true,
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
                        // color: {
                        //     value: ["#0000FF", "#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
                        //     animation: {
                        //         enable: true,
                        //         speed: 20,
                        //         sync: true
                        //     }
                        // },
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
                    background: {
                        color: "#000000",
                        image: "",
                        position: "50% 50%",
                        repeat: "no-repeat",
                        size: "cover"
                    }
                }}
            />
        </div>
    )
}

export default ParticleComp
