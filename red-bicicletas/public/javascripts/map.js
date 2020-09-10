var map = L.map('main_map').setView([-34.603501,-58.3838837], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.5618496,-58.4629983]).addTo(map)
L.marker([-34.5659291,-58.4688702]).addTo(map)