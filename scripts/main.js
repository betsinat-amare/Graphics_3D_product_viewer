import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteractions } from './interaction.js';
import { animateCamera } from './cameraAnimation.js';
import * as THREE from 'https://esm.sh/three';
import * as TWEEN from 'https://unpkg.com/@tweenjs/tween.js/dist/tween.esm.js';

let scene, camera, renderer, controls, productParts;
let autoRotate = true;

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
    
    button.addEventListener('click', () => {
        autoRotate = !autoRotate;
        button.textContent = `Auto-Rotate: ${autoRotate ? 'ON' : 'OFF'}`;
        button.style.background = autoRotate ? '#4CAF50' : '#f44336';
    });
    
    document.body.appendChild(button);
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

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Update camera animation only if auto-rotate is enabled
    if (autoRotate) {
        animateCamera(camera);
    }

    // Required for OrbitControls damping
    controls.update();
    TWEEN.update();

    renderer.render(scene, camera);
}

main(); 