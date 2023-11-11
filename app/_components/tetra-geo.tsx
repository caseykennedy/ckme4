import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  detail?: number;
  radius?: number;
  speed: number;
  flatShading: boolean;
  wireframe: boolean;
  [x: string]: unknown;
};

const TetraGeo = ({
  detail,
  flatShading,
  wireframe,
  radius,
  speed,
  ...props
}: Props) => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef<THREE.Mesh>(null);

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useFrame(() => {
    if (mesh.current !== null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, no-multi-assign
      mesh.current.rotation.x = mesh.current.rotation.y += speed;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <tetrahedronGeometry attach="geometry" args={[radius, detail]} />
      <meshStandardMaterial
        attach="material"
        color="#bbaf7c"
        flatShading={flatShading}
        wireframe={wireframe}
      />
    </mesh>
  );
};

export default TetraGeo;

const defaultProps = {
  detail: 0,
  radius: 1,
  speed: 0.006,
  flatShading: true,
  wireframe: false,
};

TetraGeo.defaultProps = defaultProps;
