import * as THREE from 'https://esm.sh/three';
import * as TWEEN from 'https://unpkg.com/@tweenjs/tween.js/dist/tween.esm.js';

export function setupInteractions(scene, camera, renderer, productParts) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let intersectedObject = null;
    let originalColor = null;

    // Create info panel for part names
    const infoPanel = document.createElement('div');
    infoPanel.style.position = 'absolute';
    infoPanel.style.top = '10px';
    infoPanel.style.left = '10px';
    infoPanel.style.background = 'rgba(0, 0, 0, 0.7)';
    infoPanel.style.color = 'white';
    infoPanel.style.padding = '5px 10px';
    infoPanel.style.borderRadius = '5px';
    infoPanel.style.display = 'none'; // Hidden by default
    document.body.appendChild(infoPanel);

    function onMouseMove(event) {
        // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update the raycaster with the camera and mouse position
        raycaster.setFromCamera(mouse, camera);

        // Calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(productParts, true);

        if (intersects.length > 0) {
            if (intersectedObject != intersects[0].object) {
                // Restore previous object's color if any
                if (intersectedObject && originalColor) {
                    intersectedObject.material.color.set(originalColor);
                }
                // Store the new intersected object and its original color
                intersectedObject = intersects[0].object;
                originalColor = intersectedObject.material.color.getHex();
                intersectedObject.material.color.set(0xff00ff); // Highlight color

                // Show info panel
                infoPanel.style.display = 'block';
                infoPanel.textContent = intersectedObject.name || 'Product Part';
            }
        } else {
            // No intersection
            if (intersectedObject && originalColor) {
                intersectedObject.material.color.set(originalColor);
            }
            intersectedObject = null;
            originalColor = null;

            // Hide info panel
            infoPanel.style.display = 'none';
        }
    }

    function onClick(event) {
        // This part can be used for click specific actions
        // For now, hover effect handles the primary feedback.
        // If distinct click feedback is needed, implement it here.
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(productParts, true);

        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            const initialScale = clickedObject.scale.clone();
            const targetScale = new THREE.Vector3(1.1, 1.1, 1.1);

            // Animate scale briefly
            new TWEEN.Tween(clickedObject.scale)
                .to(targetScale, 100) // Scale up in 100ms
                .easing(TWEEN.Easing.Quadratic.Out)
                .onComplete(() => {
                    new TWEEN.Tween(clickedObject.scale)
                        .to(initialScale, 100) // Scale back down in 100ms
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .start();
                })
                .start();

            infoPanel.style.display = 'block';
            infoPanel.textContent = clickedObject.name || 'Product Part Clicked!';

            // Optional: Hide after a delay if it's a click-only panel
            setTimeout(() => {
                infoPanel.style.display = 'none';
            }, 1000);
        }
    }

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);
}
