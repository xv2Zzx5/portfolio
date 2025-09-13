import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import React, { type JSX } from "react";

const Model = (props: JSX.IntrinsicElements["group"]) => {
    const obj = useGLTF("/gaming_desktop_pc.glb");
    return <primitive object={obj.scene} {...props} />;
};

export default Model;
