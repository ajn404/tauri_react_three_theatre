import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import studio from "@theatre/studio";
import { getProject } from "@theatre/core";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider } from "@theatre/r3f";
import { Model } from "./model.jsx";

import { message } from "@tauri-apps/api/dialog";

studio.initialize();
studio.extend(extension);
const chunkSheet = getProject("chunkSheet").sheet("Chunk Sheet");

const saveFile = async () => {

  console.log('hello world tauri');
  await message("hello world", "tauri");
};

export default function App() {
  return (
    <div className="app">
      <button onClick={saveFile}>hello tauri</button>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        style={{
          backgroundColor: "#111a21",
          width: "100vw",
          height: "100vh",
        }}
      >
        <SheetProvider sheet={chunkSheet}>
          <OrbitControls />
          <e.pointLight
            theatreKey="light 1"
            color="green"
            indensity={2}
            position={[-1, 1, 4]}
          />
          <e.pointLight
            theatreKey="light 2"
            color="white"
            indensity={1}
            position={[-1, 0, -1]}
          />
          <mesh position={[1, 1, -3]}>
            <boxGeometry args={[1, 1, 4]}></boxGeometry>
            <meshStandardMaterial color="#ffed00" />
          </mesh>

          <mesh position={[2, -2, -1]}>
            <boxGeometry args={[1, 1, 1]}></boxGeometry>

            <meshStandardMaterial color="#dd9411" />
          </mesh>

          <e.mesh theatreKey="chuk" scale={0.008} position={[-1, -0.9, 0]}>
            <Model />
          </e.mesh>
        </SheetProvider>
      </Canvas>
    </div>
  );
}
