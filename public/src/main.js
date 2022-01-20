import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min';

const params = {
    color: "#f0f0f0"
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
const canvasDom = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasDom, alpha: true })
const controls = new OrbitControls(camera, renderer.domElement)
const tween = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z });

const loading = document.getElementsByClassName('loading')[0];
const canvasContainer = document.getElementById('canvasContainer');

const dataDiv = document.getElementById('glbPath')

const glbPath = dataDiv.getAttribute('data-glbPath');
const lightSetting = dataDiv.getAttribute('data-light');

let model;

const init = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.gammaOutput = true;
    renderer.setPixelRatio(window.devicePixelRatio)

    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.maxDistance = 20;
    controls.minDistance = 2;

    const loader = new GLTFLoader();
    loader.load(
        glbPath,
        (gltf) => {
            model = gltf.scene
            tween.easing(TWEEN.Easing.Exponential.InOut)
            tween.to({ x: 0, y: 0, z: 5 }, 1500)
            scene.add(model);
            tween.onUpdate((object) => {
                camera.position.set(object.x, object.y, object.z);
            })
            setTimeout(() => {
                tween.start();
                loading.classList.remove('active');
                canvasContainer.classList.remove('hidden');
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
    let light1, light2, light3;

    if (lightSetting == "record") {
        light1 = new THREE.PointLight(0x404040, 2.5);
        light2 = new THREE.PointLight(0x404040, 5);
        light3 = new THREE.PointLight(0x404040, 10);
    } else {
        light1 = new THREE.PointLight(0x404040, 125);
        light2 = new THREE.PointLight(0x404040, 175);
        light3 = new THREE.PointLight(0x404040, 200);
    }

    const lightHelper1 = new THREE.PointLightHelper(light1, 1, 0xff0000);
    const lightHelper2 = new THREE.PointLightHelper(light2, 1, 0x00ff00);
    const lightHelper3 = new THREE.PointLightHelper(light3, 1, 0x0000ff);


    const ambLight = new THREE.AmbientLight(0x404040, 2);

    const axesHelper = new THREE.AxesHelper(20);


    light1.position.set(20.504, 0, 20.124);

    light2.position.set(-10.233, 0, -40.877);

    light3.position.set(-40.790, 0, 20.499);

    scene.add(light1, light2, light3, ambLight);
    // scene.add(lightHelper1, lightHelper2, lightHelper3, axesHelper);
}


window.addEventListener(
    'resize',
    () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        render();
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
    scene.background = new THREE.Color(params.color);
}

const render = () => {
    renderer.render(scene, camera)
}


window.onload = (event) => {
    init();
    animate();
};

export {
    scene,
    camera,
    controls,
    TWEEN,
    THREE,
    params
}