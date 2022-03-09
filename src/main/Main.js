import React from "react";
import './Main.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatarImage from '../assets/image/photo.jpg'
import Particles from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from "react-tilt/dist/tilt";

export const Main = () => {
    const avatar = {
        backgroundImage: `url(${avatarImage})`
    }
    return (
        <div id = 'main' className={'mainBlock'}>
            <Particles
                className={'particles'}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            // onClick: {
                            //     enable: true,
                            //     mode: "push",
                            // },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 500,
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
                            },
                        },
                    },
                    className: 'fff',
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
                        collisions: {
                            enable: true,
                        },
                        style: {
                            display: 'none'
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
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
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Fade top>
                <div className={styleContainer.container}>

                    <div className={'text'}>
                        <span className={'description primaryText'}>HELLO! I AM</span>
                        <h1 className={'textName'}>DYATLOV IVAN</h1>
                        <ReactTypingEffect className={'description'} text='Frontend Developer.'/>
                    </div>
                    <Tilt option={{max: 25}}>
                        <div className={'photo'} style={avatar}/>
                    </Tilt>
                </div>
            </Fade>

        </div>

    )
}