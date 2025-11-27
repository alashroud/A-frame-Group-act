// Post-processing setup
document.querySelector('#scene').addEventListener('loaded', function() {
    setTimeout(() => {
        this.setAttribute('post-processing', 
            'effect: bloom; bloomParams: threshold: 0.5, strength: 0.5, radius: 1, exposure: 0.5');
    }, 500);
});

document.querySelector('#scene').addEventListener('loaded', function() {
    const moonEntity = document.querySelector('[gltf-model="#moon-model"]');
    
    moonEntity.addEventListener('model-loaded', function() {
        const mesh = this.getObject3D('mesh');
        mesh.traverse(function(node) {
            if (node.isMesh) {
                node.material.emissive = new THREE.Color(0xFFFFAA); 
                node.material.emissiveIntensity = 0.8;
                node.material.fog = false; 
                node.material.needsUpdate = true;
            }
        });
    });
});

document.querySelector('#scene').addEventListener('loaded', function() {
    setTimeout(() => {
        // Get all three animated cars
        const cars = document.querySelectorAll('[gltf-model][animation__1]');
        
        // Emit 'start' event to begin their animation sequences
        cars.forEach(car => {
            car.emit('start');
        });
    }, 500);
});