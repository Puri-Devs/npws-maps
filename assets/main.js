var mymap = L.map('mapid').setView([51.505, -0.09], 13)

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  { subdomains: ['a', 'b', 'c'] })
  .addTo(mymap)