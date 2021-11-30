import * as THREE from 'three'
import { SpotLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'




const params = {
    color: '#f0f0f0'
};

const scene = new THREE.Scene()
scene.background = new THREE.Color(params.color);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
// camera.position.set(10, 10, 10);
camera.position.z = 2

const tween = new TWEEN.Tween({ x: 0, y: 0, z: 0 })
tween.easing(TWEEN.Easing.Quadratic.InOut)
tween.to({ x: 10, y: 0, z: 10 }, 1000)

const canvasDom = document.getElementById('canvas');

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasDom })
renderer.setSize(window.innerWidth, window.innerHeight)
// document.getElementById("canvasContainer").appendChild(renderer.domElement)

renderer.gammaOutput = true


const controls = new OrbitControls(camera, renderer.domElement)
controls.maxDistance = 20;
controls.minDistance = 2;

let model;

const loader = new GLTFLoader();
loader.load(
    '../assets/kekeframe20.glb',
    function (gltf) {
        model = gltf.scene
        scene.add(model);
        tween.start();
    }, undefined,
    function (error) {
        console.error(error);
    });

const spotLight1 = new THREE.SpotLight(0x404040, 5, 0);
const spotLight3 = new THREE.SpotLight(0x404040, 5, 0);
const spotLight2 = new THREE.SpotLight(0x404040, 5, 0);

spotLight1.position.set(2.504, 5.546, 2.124);
spotLight1.rotation.set(108.30, 50.45, -117.18);

spotLight2.position.set(-1.233, 3.281, -4.877);
spotLight2.rotation.set(108.10, 50.45, -117.18);

spotLight3.position.set(-4.790, 6.858, 2.499);
spotLight3.rotation.set(108.10, 50.45, -117.18);






scene.add(spotLight1, spotLight2, spotLight3);

const ambLight = new THREE.AmbientLight(0x404040, 50); // soft white light
// scene.add(ambLight);

tween.onUpdate(function (object) {
    camera.position.set(object.x, object.y, object.z);
})

window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    },
    false
)

// const gui = new GUI();
// gui.addColor(params, 'color').onChange(function (value) {

//     scene.background.set(value);

// });

function animate() {
    requestAnimationFrame(animate)
    if (model) {
        // model.rotation.x += 0.01
        // model.rotation.y += 0.001
    }
    TWEEN.update()
    controls.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}


animate();

export {
    scene
}