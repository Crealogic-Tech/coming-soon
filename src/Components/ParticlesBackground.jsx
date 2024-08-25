// // ParticlesBackground.js
// import React from 'react';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';

// const ParticlesBackground = () => {
//     const particlesInit = async (main) => {
//         // Load the tsParticles package
//         await loadFull(main);
//     };

//     const particlesOptions = {
//         particles: {
//             number: {
//                 value: 80,
//                 density: {
//                     enable: true,
//                     value_area: 800
//                 }
//             },
//             color: {
//                 value: "#ffffff"
//             },
//             shape: {
//                 type: "circle"
//             },
//             opacity: {
//                 value: 0.5,
//                 random: true,
//                 anim: {
//                     enable: true,
//                     speed: 1,
//                     opacity_min: 0.1,
//                     sync: false
//                 }
//             },
//             size: {
//                 value: 3,
//                 random: true,
//                 anim: {
//                     enable: true,
//                     speed: 4,
//                     size_min: 0.1,
//                     sync: false
//                 }
//             },
//             line_linked: {
//                 enable: true,
//                 distance: 150,
//                 color: "#ffffff",
//                 opacity: 0.4,
//                 width: 1
//             },
//             move: {
//                 enable: true,
//                 speed: 2,
//                 direction: "none",
//                 random: false,
//                 straight: false,
//                 out_mode: "out",
//                 bounce: false,
//                 attract: {
//                     enable: false,
//                     rotateX: 600,
//                     rotateY: 1200
//                 }
//             }
//         },
//         interactivity: {
//             detect_on: "canvas",
//             events: {
//                 onhover: {
//                     enable: true,
//                     mode: "repulse"
//                 },
//                 onclick: {
//                     enable: true,
//                     mode: "push"
//                 },
//                 resize: true
//             }
//         },
//         retina_detect: true
//     };

//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             options={particlesOptions}
//             style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 zIndex: -1
//             }}
//         />
//     );
// };

// export default ParticlesBackground;
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const App = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
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
                        value: "#0d47a1",
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
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
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
    );
};
