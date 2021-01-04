import { RepeatWrapping, TextureLoader } from "three"
import { usePlane } from "use-cannon";
import grass from './grass.jpeg'

function Ground(props) {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0], ...props
    }))

    const texture = new TextureLoader().load(grass)
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(240, 240)

    return <mesh ref={ref}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshStandardMaterial map={texture} attach="material" color="green" />
    </mesh>
}

export default Ground