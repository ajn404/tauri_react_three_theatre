import {useGLTF} from "@react-three/drei";
function Model(props) {
  const gltf = useGLTF('LittlestTokyo.glb');
  return <primitive object={gltf.scene} {...props}/>
} 
export {Model}
