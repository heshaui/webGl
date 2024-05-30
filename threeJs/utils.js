function initStats() {
    const stats = new Stats()
    stats.setMode(0)
    stats.domElement.style.position = 'absolute'
    stats.domElement.style.left = '0px'
    stats.domElement.style.top = '0px'
    document.getElementById('mystats').appendChild(stats.domElement)
    return stats
}

function initTrackballControls(camera, renderer) {
    const trackballControls = new THREE.TrackballControls(camera, renderer.domElement)
    trackballControls.rotateSpeed = 3.0
    trackballControls.zoomSpeed = 1.0
    trackballControls.panSpeed = 3.0
    trackballControls.staticMoving = true
    return trackballControls
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}