import { camera, controls, scene, TWEEN, THREE, params } from './main.js';

let colorSelector = document.getElementsByClassName("colors")[0];
let reset = document.getElementsByClassName('reset')[0];
let canvas = document.getElementById('canvas');
let canvasContainer = document.getElementById('canvasContainer');


let settings = document.getElementById("openSettings");
let fullscreen = document.getElementById("fullscreen");

settings.onclick = () => {
    colorSelector.classList.add('open');
    reset.classList.add('open');
    fullscreen.classList.add('open');

}

window.onclick = (event) => {
    if (event.target == canvas) {
        colorSelector.classList.remove('open');
        reset.classList.remove('open');
        fullscreen.classList.remove('open');
    }
}

window.ontouchend = (event) => {
    if (event.target == canvas) {
        colorSelector.classList.remove('open');
        reset.classList.remove('open');
        fullscreen.classList.remove('open');
    }
}


const buttons = document.querySelectorAll('.color')

const setBackgroundColor = (color) => {
    params.color = color
    // scene.background = new THREE.Color(color);
}

setBackgroundColor('#f0f0f0');
buttons.forEach(button => button.addEventListener('click', () => setBackgroundColor(button.id.replace('c', '#'))))


const resetCamera = () => {
    const camPosTween = new TWEEN.Tween({ x: camera.position.x, y: camera.position.y, z: camera.position.z })
    const camRotTween = new TWEEN.Tween({ x: camera.rotation.x, y: camera.rotation.y, z: camera.rotation.z })
    const camTarTween = new TWEEN.Tween(controls.target)

    camPosTween.easing(TWEEN.Easing.Exponential.InOut)
    camRotTween.easing(TWEEN.Easing.Exponential.InOut)
    camTarTween.easing(TWEEN.Easing.Exponential.InOut)


    camPosTween.to({ x: 0, y: 0, z: 5 }, 1500)
    camRotTween.to({ x: 0, y: 0, z: 0 }, 1500)
    camTarTween.to({ x: 0, y: 0, z: 0 }, 1500)

    camPosTween.start();
    camRotTween.start();
    camTarTween.start();

    camPosTween.onUpdate((object) => {
        camera.position.set(object.x, object.y, object.z);
    })

    camRotTween.onUpdate((object) => {
        camera.rotation.set(object.x, object.y, object.z);
    })

    camTarTween.onUpdate((object) => {
        controls.target.set(object.x, object.y, object.z);
    })
}

let isFullscreen = false;

const toggleFullscreen = () => {
    if (!isFullscreen) {
        if (canvasContainer.requestFullscreen) {
            canvasContainer.requestFullscreen();
        } else if (canvasContainer.mozRequestFullScreen) { /* Firefox */
            canvasContainer.mozRequestFullScreen();
        } else if (canvasContainer.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            canvasContainer.webkitRequestFullscreen();
        } else if (canvasContainer.msRequestFullscreen) { /* IE/Edge */
            canvasContainer.msRequestFullscreen();
        }
        fullscreen.src = "../assets/minimize.svg"
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        fullscreen.src = "../assets/expand.svg"
    }
    isFullscreen = !isFullscreen;
}

reset.addEventListener('click', resetCamera);
fullscreen.addEventListener('click', toggleFullscreen);