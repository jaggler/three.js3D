import React, { Suspense, useState } from 'react';
import { workExperiences } from "../constants/index.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader.jsx";
import Developer from "./Developer.jsx";

const Experience = () => {
    const [animationName, setAnimationName] = useState('victory'); // Default animation

    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>
                <div className="work-container flex flex-col md:flex-row">

                    {/* Canvas Section */}
                    <div className="work-canvas ">
                        <Canvas>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    {/* Work Content Section */}
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, name, pos, icon, duration, title, animation }) => (
                                <div
                                    key={id}
                                    className="work-content_container group flex items-start gap-4 mb-5"
                                    onClick={() => setAnimationName(animation)}
                                    onPointerOver={() => setAnimationName(animation)}
                                    onPointerOut={() => setAnimationName('victory')} // Default back to victory when not hovering
                                >

                                    {/* Logo Section */}
                                    <div className="work-content_logo w-12 h-12 flex-shrink-0">
                                        <img src={icon} alt={`${name} logo`} className="w-full h-full object-contain" />
                                    </div>

                                    {/* Experience Details */}
                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white">{name}</p>
                                        <p className="text-sm mb-2">{pos} -- {duration}</p>
                                        <p className="group-hover:text-white transition ease-in-out duration-500 text-gray-400">{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
