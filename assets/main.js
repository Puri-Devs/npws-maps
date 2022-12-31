var npwsmaps = L.map('mapid').setView([0, 0], 13)

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  { subdomains: ['a', 'b', 'c'] })
  .addTo(npwsmaps)