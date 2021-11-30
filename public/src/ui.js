import { scene } from './index.js';
import * as THREE from 'three'

let colorSelector = document.getElementsByClassName("colors")[0];
let canvas = document.getElementById('canvas');

let btn = document.getElementById("openSettings");

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    // colorSelector.style.display = "grid";
    colorSelector.classList.add('open');
}

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == canvas) {
        // colorSelector.style.display = "none";
        colorSelector.classList.remove('open');

    }
}


const buttons = document.querySelectorAll('.color')

buttons.forEach(button => button.addEventListener('click', () => setBackgroundColor(button.id.replace('c', '#'))))

const setBackgroundColor = (color) => {
    scene.background = new THREE.Color(color);
}