import logo from './logo.svg';

import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

import './App.css';

function App() {

  

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
camera.position.z = 30 ;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(5 , 5, 5 , 5 , 5 , 5);

const material = new THREE.MeshBasicMaterial({color: "red" , wireframe:true});
const cube = new THREE.Mesh( geometry , material );

// const cube = new THREE.Line( geometry , material ); if you use Line you don't need wireframe


scene.add(cube);


const controls = new OrbitControls(camera , renderer.domElement);


let q = 0

animate();

function animate (){

  controls.update();

    renderer.render(scene , camera);

    requestAnimationFrame(animate);
}

  return (
    <div className="App">
    </div>
  );
}

export default App;
