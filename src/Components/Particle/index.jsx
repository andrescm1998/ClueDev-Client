import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function Particle() {

    const particlesInit = useCallback(async engine => {

        console.log(engine);
        await loadFull(engine);

    }, []);

    const particlesLoaded = useCallback(async container => {

        await console.log(container);

    }, []);

  return (
    <Particles 
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}

    options={{ 
            background: {
                color: {
                    value: "#ffffff",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#A9A9A9",
                },
                links: {
                    color: "#A9A9A9",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,     
        }}
    />
  )
}
