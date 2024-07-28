import React,{useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls , Grid } from '@react-three/drei';


function App() {
  const [size , setSize]  = useState([1,1,1]);
  function handleSize(e,index){
      if(e.target.value>=0){
        let newSize = [...size];
        newSize[index]=parseFloat(e.target.value)||0;
        setSize(newSize);
        e.target.value='';
        console.log(e.target.value)
      }
  }
  return (
    <div style={{ width: '100%', height: '100%' }}>
      width : <input type="number" value={size[0]} onChange={(e)=>handleSize(e,0)}/><br/>
      height : <input type="number" value={size[1]}  onChange={(e)=>handleSize(e,1)}  /><br/>
      depth : <input type="number" value={size[2]} onChange={(e)=>handleSize(e,2)} /><br/>
       <Canvas  camera={{ position: [0, 5, 10], fov: 60 }} style={{ width: '100%', height: '100%' }}>
        <OrbitControls autoRotate={true}/>
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[-1,0,1]} intensity={0.5} />
          <boxGeometry args={size} />
          <meshStandardMaterial attach="material" color={0xFF0000}/>
        </mesh>
          <Grid args={[10, 10]} position={[0, -0.5, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
