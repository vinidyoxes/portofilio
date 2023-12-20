'use client'

import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/3d/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Three.js Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="globe flex align-center" >
        <Canvas shadows dpr={[1, 2]} camera={{position: [1, 10, 10], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </div>

    </div>
  )
}
