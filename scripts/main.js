import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteractions } from './interaction.js';
import { animateCamera } from './cameraAnimation.js';
import { createUI } from './ui.js';
import * as THREE from 'https://esm.sh/three';
import * as TWEEN from 'https://unpkg.com/@tweenjs/tween.js/dist/tween.esm.js';

let scene, camera, renderer, controls, productParts;
let autoRotate = true;
let rotationSpeed = 1.0;

function createToggleButton() {
    const button = document.createElement('button');
    button.textContent = 'Auto-Rotate: ON';
    button.style.position = 'absolute';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.background = '#4CAF50';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
    
    button.addEventListener('click', () => {
        autoRotate = !autoRotate;
        button.textContent = `Auto-Rotate: ${autoRotate ? 'ON' : 'OFF'}`;
        button.style.background = autoRotate ? '#4CAF50' : '#f44336';
    });
    
    document.body.appendChild(button);
}

function updateRotationSpeed(speed) {
    rotationSpeed = speed;
}

function main() {
    const { scene: s, camera: cam, renderer: rend, controls: ctrl } = initScene();
    scene = s;
    camera = cam;
    renderer = rend;
    controls = ctrl;

    productParts = createProduct(scene);
    addLighting(scene);
    setupInteractions(scene, camera, renderer, productParts);
    createToggleButton();
    
    // Create UI with controls
    const ui = createUI(scene, productParts, updateRotationSpeed);

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Update camera animation only if auto-rotate is enabled
    if (autoRotate) {
        animateCamera(camera, rotationSpeed);
    }

    // Required for OrbitControls damping
    controls.update();
    TWEEN.update();

    renderer.render(scene, camera);
}

main(); 