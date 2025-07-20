import * as THREE from 'three';
import 'webxr-polyfill';

function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  const material = new THREE.MeshNormalMaterial();
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  camera.position.z = 1;

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

window.addEventListener('DOMContentLoaded', init);
