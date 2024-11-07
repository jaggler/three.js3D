import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera, Ring} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {
    // const schemaOrFolderName = 'HackerRoom';
    const isSmall = useMediaQuery({ maxWidth:440 });
    const isMobile = useMediaQuery({ maxWidth:787});
    const isTablet = useMediaQuery( { minWidth:787, maxWidth:1024});

    const  sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex-col relative ">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl
                font-medium text-white text-center
                 font-generalsans">Hi, I am Peace Kimathi
                    <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Data Scientist</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva  />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0,0,20]} />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position = {sizes.deskPosition}
                                rotation = {[0,-Math.PI,0]}
                                scale={ sizes.deskScale}/>

                        </HeroCamera>
                    <group>
                        <Target position = {sizes.targetPosition}/>
                        <ReactLogo position = {sizes.reactLogoPosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>

                        <ambientLight intensity ={1} />
                        <directionalLight position = {[10,10,10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    < Button name ="Lets work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>

            </div>
        </section>
    )
}
export default Hero
