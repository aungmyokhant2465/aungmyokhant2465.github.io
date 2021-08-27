var L;

  window.onload = function() {
    L.mapquest.key = 'iaARG4Op1jh6fEGpvLuw1CSnZgf1DBEF';

    // 'map' refers to a <div> element with the ID map
    var map = L.mapquest.map('map', {
      center: [16.889614522252593, 97.38607206136938],
      layers: L.mapquest.tileLayer('hybrid'),
      zoom: 12
    });
map.addControl(L.mapquest.control({ position: 'bottomright' }));
L.marker([16.889614522252593, 97.38607206136938], {
  icon: L.mapquest.icons.marker({
    primaryColor: '#22407F',
    secondaryColor: '#3B5998',
    shadow: true,
    size: 'md',
    symbol: 'Z'
  })
})
.bindPopup('This is Where we are!')
.addTo(map);
  }