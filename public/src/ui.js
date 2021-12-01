import { camera, scene } from './index.js';
import * as THREE from 'three'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min';


let colorSelector = document.getElementsByClassName("colors")[0];
let reset = document.getElementsByClassName('reset')[0];
let canvas = document.getElementById('canvas');

let settings = document.getElementById("openSettings");

settings.onclick = () => {
    colorSelector.classList.add('open');
    reset.classList.add('open');

}

window.onclick = (event) => {
    if (event.target == canvas) {
        colorSelector.classList.remove('open');
        reset.classList.remove('open');
    }
}

window.ontouchend = (event) => {
    if (event.target == canvas) {
        colorSelector.classList.remove('open');
        reset.classList.remove('open');
    }
}


const buttons = document.querySelectorAll('.color')

const setBackgroundColor = (color) => {
    scene.background = new THREE.Color(color);
}

buttons.forEach(button => button.addEventListener('click', () => setBackgroundColor(button.id.replace('c', '#'))))

let camtween;

const resetCamera = () => {
    camtween = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
    console.log(camtween);
    // camera.position.set(0, 0, 10);
    camtween.easing(TWEEN.Easing.Exponential.InOut)
    camtween.to({ x: 0, y: 0, z: 10 }, 1500)
    camtween.start();
    camtween.onUpdate((object) => {
        camera.position.set(object.x, object.y, object.z);
    })
}

reset.addEventListener('click', resetCamera);
