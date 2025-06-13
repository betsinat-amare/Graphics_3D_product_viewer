import * as THREE from 'https://esm.sh/three';

export function animateCamera(camera, speed = 1.0) {
  const time = Date.now() * 0.001 * speed;
  const radius = 5;

  camera.position.x = Math.sin(time) * radius;
  camera.position.z = Math.cos(time) * radius;
  camera.lookAt(0, 0, 0);
}
