import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import foxScene from "../assets/3d/fox.glb";
import { Group, Object3DEventMap } from "three";

type FoxProps = {
  currentAnimation: string;
  scale: [x: number, y: number, z: number];
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
};

const Fox = ({ currentAnimation, ...props }: FoxProps) => {
  const group = useRef<Group<Object3DEventMap> | null>(null);
  const { nodes, materials, animations } = useGLTF(foxScene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    console.log(actions);
    Object.values(actions).forEach((action) => action!.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation]!.play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
};

useGLTF.preload(foxScene);

export default Fox;
