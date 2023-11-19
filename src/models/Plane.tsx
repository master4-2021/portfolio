import { useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

type PlaneProps = {
  scale: [x: number, y: number, z: number];
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
  isRotating: boolean;
};

const Plane = ({ isRotating, ...props }: PlaneProps) => {
  const planeRef = useRef<Mesh>(null);
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    console.log("isRotating", isRotating);
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
