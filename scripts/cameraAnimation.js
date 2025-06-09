import * as THREE from 'https://esm.sh/three';

export function animateCamera(camera) {
  const time = Date.now() * 0.0005;
  const radius = 5;

  camera.position.x = Math.sin(time) * radius;
  camera.position.z = Math.cos(time) * radius;
  camera.lookAt(0, 0, 0);
}
