import * as THREE from 'https://esm.sh/three';

export function createProduct(scene) {
    const productParts = [];

    // Materials
    const material = new THREE.MeshStandardMaterial({
        color: 0x8844aa,
        roughness: 0.5,
        metalness: 0.1
    });

    // Chair Seat
    const seatGeometry = new THREE.BoxGeometry(2, 0.2, 2);
    const seat = new THREE.Mesh(seatGeometry, material);
    seat.position.set(0, 1.5, 0);
    seat.name = "Chair Seat";
    seat.castShadow = true;
    seat.receiveShadow = true;
    productParts.push(seat);

    // Chair Backrest
    const backrestGeometry = new THREE.BoxGeometry(2, 2, 0.2);
    const backrest = new THREE.Mesh(backrestGeometry, material);
    backrest.position.set(0, 2.5, -0.9);
    backrest.name = "Chair Backrest";
    backrest.castShadow = true;
    backrest.receiveShadow = true;
    productParts.push(backrest);

    // Chair Legs
    const legGeometry = new THREE.BoxGeometry(0.2, 1.5, 0.2);
    const leg1 = new THREE.Mesh(legGeometry, material);
    leg1.position.set(0.9, 0.75, 0.9);
    leg1.name = "Front Right Leg";
    leg1.castShadow = true;
    leg1.receiveShadow = true;
    productParts.push(leg1);

    const leg2 = new THREE.Mesh(legGeometry, material);
    leg2.position.set(-0.9, 0.75, 0.9);
    leg2.name = "Front Left Leg";
    leg2.castShadow = true;
    leg2.receiveShadow = true;
    productParts.push(leg2);

    const leg3 = new THREE.Mesh(legGeometry, material);
    leg3.position.set(0.9, 0.75, -0.9);
    leg3.name = "Back Right Leg";
    leg3.castShadow = true;
    leg3.receiveShadow = true;
    productParts.push(leg3);

    const leg4 = new THREE.Mesh(legGeometry, material);
    leg4.position.set(-0.9, 0.75, -0.9);
    leg4.name = "Back Left Leg";
    leg4.castShadow = true;
    leg4.receiveShadow = true;
    productParts.push(leg4);

    // Add all parts to a group to easily center and rotate
    const productGroup = new THREE.Group();
    productParts.forEach(part => productGroup.add(part));
    scene.add(productGroup);

    // Ensure product is centered at (0,0,0) - adjust group position if needed
    // The current positions are relative to the group, so if the parts are built around 0,0,0, the group itself is centered.

    return productParts;
}
