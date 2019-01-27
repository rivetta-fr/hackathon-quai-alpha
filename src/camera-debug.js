AFRAME.registerComponent('camera-debug', {
  init: function () {
    const camera = this.el;
    camera.addEventListener('componentchanged', function (event) {
      console.log(event);
    });
    navigator.geolocation.watchPosition((position) => {
      console.log('position: ', position);
    }, (error) => {
      console.log(error);
    }, {
      maximumAge: 6000,
      timeout: 27000
    });
  }
});
