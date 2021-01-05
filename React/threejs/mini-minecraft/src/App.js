import { Canvas } from 'react-three-fiber';
import { Sky } from 'drei';
import { Vector3 } from 'three';
import { Physics } from 'use-cannon';
import Ground from './components/Ground';
import Camera from './components/Camera';
import Player from './components/Player';
import { Cube, useCubeStore } from './components/Cube';


function App() {
  const cubes = useCubeStore(state => state.cubes)
  
  return (
    <Canvas shadowMap sRGB gl={{ alpha: false }}>
      <Camera />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics>
        <Ground />
        <Player />
        <Cube position={[0, 0.5, -10]} />
        {
          cubes.map(cube => cube)
        }
      </Physics>
    </Canvas>
  );
}

export default App;
