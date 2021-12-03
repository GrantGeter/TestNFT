import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min';


const params = {
    color: '#f0f0f0'
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
const canvasDom = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasDom })
const controls = new OrbitControls(camera, renderer.domElement)
const tween = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z });

const loading = document.getElementsByClassName('loading')[0];

let model;
// window.onload = (event) => {
// setTimeout(() => {
//     if (model) {
//         loading.classList.remove('active');
//         tween.start();
//     }
// }, 5000)
// };

// document.addEventListener("DOMContentLoaded", (event) => {

// })



const init = () => {

    scene.background = new THREE.Color(params.color);

    camera.position.z = 2

    renderer.setSize(window.innerWidth, window.innerHeight)

    renderer.gammaOutput = true

    controls.maxDistance = 20;
    controls.minDistance = 2;

    const loader = new GLTFLoader();
    loader.load(
        '../assets/kekeframewithtexturesnewSSlogover2.glb',
        (gltf) => {
            model = gltf.scene
            tween.easing(TWEEN.Easing.Exponential.InOut)
            tween.to({ x: 0, y: 0, z: 10 }, 1500)
            scene.add(model);
            tween.onUpdate((object) => {
                camera.position.set(object.x, object.y, object.z);
            })
            setTimeout(() => {
                loading.classList.remove('active');
                tween.start();
            }, 5000)
        }, () => {
            loading.classList.add('active');
        },
        (error) => {
            console.error(error);
        });

    addLights();
}


const addLights = () => {
    const light1 = new THREE.PointLight(0x404040, 5);
    const light2 = new THREE.PointLight(0x404040, 5);
    const light3 = new THREE.PointLight(0x404040, 5);

    const ambLight = new THREE.AmbientLight(0x404040, 2);


    light1.position.set(2.504, 5.546, 2.124);
    // light1.rotation.set(108.30, 50.45, -117.18);

    light2.position.set(-1.233, 3.281, -4.877);
    // light2.rotation.set(108.10, 50.45, -117.18);

    light3.position.set(-4.790, 6.858, 2.499);
    // light3.rotation.set(108.10, 50.45, -117.18);

    scene.add(light1, light2, light3, ambLight);
}


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



const animate = () => {
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

init();
animate();

export {
    scene,
    camera,
    controls
}