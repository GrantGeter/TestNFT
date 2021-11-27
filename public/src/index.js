import * as THREE from 'three'
import { SpotLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const params = {
    color: '#ffffff'
};

const scene = new THREE.Scene()
scene.background = new THREE.Color(params.color);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

renderer.gammaOutput = true

const controls = new OrbitControls(camera, renderer.domElement)

let model;

const loader = new GLTFLoader();
loader.load(
    '../18th-century-oilan/source/gold coin blank.glb',
    function (gltf) {
        model = gltf.scene
        scene.add(model);
    }, undefined,
    function (error) {
        console.error(error);
    });

const spotLight1 = new THREE.SpotLight(0x404040, 10, 0, 0.785398);
const spotLight2 = new THREE.SpotLight(0x404040, 10, 0, -0.785398);
const spotLight3 = new THREE.SpotLight(0x404040, 10, 0, -0.785398);
const spotLight4 = new THREE.SpotLight(0x404040, 10, 0, 0.785398);

spotLight1.position.set(100, -100, 100);
spotLight2.position.set(-100, -100, -100);
spotLight3.position.set(100, 100, -100);
spotLight4.position.set(-100, 100, 100);
scene.add(spotLight1, spotLight2, spotLight3, spotLight4);


const spotLightHelper1 = new THREE.SpotLightHelper(spotLight1, 0x606060);
const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2, 0x101010);
const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3, 0x707070);
const spotLightHelper4 = new THREE.SpotLightHelper(spotLight4, 0x804080);
// scene.add(spotLightHelper1, spotLightHelper2, spotLightHelper3, spotLightHelper4);


const ambLight = new THREE.AmbientLight(0x404040, 50); // soft white light
// scene.add(ambLight);



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

const gui = new GUI();
gui.addColor(params, 'color').onChange(function (value) {

    scene.background.set(value);

});

function animate() {
    requestAnimationFrame(animate)
    if (model) {
        // model.rotation.x += 0.01
        model.rotation.y += 0.01
    }
    controls.update()
    render()
}

function render() {
    renderer.render(scene, camera)
}


animate();