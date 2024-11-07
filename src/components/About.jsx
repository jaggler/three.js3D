import React, { useState } from 'react';
import Globe from "react-globe.gl";
import Button from "./Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("peacekimathi104@gmail.com");
        setHasCopied(true);

        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                {/* First Grid Item */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid1.png"
                            alt="grid-1"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Hi, I'm Peace.</p>
                            <p className="grid-subtext">
                                With 1 year of experience, I have honed my skills
                                in Data Science, with a focus on Machine Learning,
                                Deep Learning, and (LLM) ChatBot Development.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Grid Item */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src="/assets/grid2.png"
                            alt="grid-2"
                            className="w-full sm:h-[276px] h-fit object-contain"
                        />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in Python with a focus on Machine Learning and Deep Learning ecosystems.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third Grid Item */}
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: -1.286389, lng: 36.817223,
                                        text: "I am here!",
                                        color: 'white',
                                        size: 20,
                                    }
                                ]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work Remotely across most time-zones</p>
                            <p className="grid-subtext">I am based in Kenya, with remote work available.</p>
                            <Button name="Contact Me " isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                {/* Fourth Grid Item */}
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My Passion for Coding</p>
                            <p className="grid-subtext">I love building things through code. Coding isn't just my profession; it's my passion.</p>
                        </div>
                    </div>
                </div>

                {/* Fifth Grid Item */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me!</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">peacekimathi104@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
