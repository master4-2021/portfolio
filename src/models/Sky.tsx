import { useGLTF } from "@react-three/drei";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

type SkyProps = {
  isRotating: boolean;
};
const Sky = ({ isRotating }: SkyProps) => {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current!.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
