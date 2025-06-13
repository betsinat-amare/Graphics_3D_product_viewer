import * as THREE from 'https://esm.sh/three';

export function createUI(scene, productParts, updateRotationSpeed) {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '10px';
    container.style.left = '10px';
    container.style.background = 'rgba(0, 0, 0, 0.7)';
    container.style.padding = '15px';
    container.style.borderRadius = '5px';
    container.style.color = 'white';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.zIndex = '1000';

    // Rotation Speed Control
    const speedContainer = document.createElement('div');
    speedContainer.style.marginBottom = '15px';

    const speedLabel = document.createElement('label');
    speedLabel.textContent = 'Rotation Speed: ';
    speedLabel.style.marginRight = '10px';

    const speedSlider = document.createElement('input');
    speedSlider.type = 'range';
    speedSlider.min = '0.1';
    speedSlider.max = '2';
    speedSlider.step = '0.1';
    speedSlider.value = '1';
    speedSlider.style.width = '150px';

    const speedValue = document.createElement('span');
    speedValue.textContent = '1.0x';
    speedValue.style.marginLeft = '10px';

    speedSlider.addEventListener('input', (e) => {
        const speed = parseFloat(e.target.value);
        speedValue.textContent = `${speed.toFixed(1)}x`;
        updateRotationSpeed(speed);
    });

    speedContainer.appendChild(speedLabel);
    speedContainer.appendChild(speedSlider);
    speedContainer.appendChild(speedValue);

    // Part Visibility Controls
    const partsContainer = document.createElement('div');
    partsContainer.style.marginTop = '15px';

    const partsLabel = document.createElement('div');
    partsLabel.textContent = 'Part Visibility:';
    partsLabel.style.marginBottom = '10px';
    partsLabel.style.fontWeight = 'bold';

    partsContainer.appendChild(partsLabel);

    // Create checkboxes for each part
    Object.entries(productParts).forEach(([partName, part]) => {
        const partControl = document.createElement('div');
        partControl.style.marginBottom = '5px';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `part-${partName}`;
        checkbox.checked = true;
        checkbox.style.marginRight = '5px';

        const label = document.createElement('label');
        label.htmlFor = `part-${partName}`;
        label.textContent = partName.charAt(0).toUpperCase() + partName.slice(1);

        checkbox.addEventListener('change', (e) => {
            part.visible = e.target.checked;
        });

        partControl.appendChild(checkbox);
        partControl.appendChild(label);
        partsContainer.appendChild(partControl);
    });

    container.appendChild(speedContainer);
    container.appendChild(partsContainer);
    document.body.appendChild(container);

    return container;
} 