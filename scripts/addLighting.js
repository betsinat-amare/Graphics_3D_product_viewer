import * as THREE from 'https://esm.sh/three';

export function addLighting(scene) {
  // Ambient Light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
  scene.add(ambientLight);

  // Directional Light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7); // Position the light
  directionalLight.castShadow = true; // Enable shadows
  scene.add(directionalLight);

  // Optional: Helper to visualize the directional light
  // const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
  // scene.add(helper);

  // Set up shadow properties for the directional light
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50; // default is 500
  directionalLight.shadow.camera.left = -10;
  directionalLight.shadow.camera.right = 10;
  directionalLight.shadow.camera.top = 10;
  directionalLight.shadow.camera.bottom = -10;
}
