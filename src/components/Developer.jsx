import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';

const Developer = ({ animationName = 'clapping', ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/animations/developer.glb');

    // Load animations and rename them
    const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
    const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
    const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');

    clappingAnimation[0].name = 'clapping';
    saluteAnimation[0].name = 'salute';
    victoryAnimation[0].name = 'victory';

    // Combine all animations into a single array
    const combinedAnimations = [
        clappingAnimation[0],
        saluteAnimation[0],
        victoryAnimation[0]
    ];

    const { actions } = useAnimations(combinedAnimations, group);

    useEffect(() => {
        if (actions[animationName]) {
            actions[animationName].reset().fadeIn(0.5).play();
        }

        // Clean up on component unmount
        return () => actions[animationName]?.fadeOut(0.5);
    }, [actions, animationName]);

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
        </group>
    );
};

useGLTF.preload('/models/animations/developer.glb');
export default Developer;
