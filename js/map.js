import { activatePage, deactivatePage } from './form.js';

deactivatePage();

const DEFAULT_COORDINATE = {
  lat: 35.6895000,
  lng: 139.6917100,
};

const mapCoorToText = (coor) => `${coor.lat.toFixed(5)}, ${coor.lng.toFixed(5)}`;

const addressField = document.querySelector('#address');
addressField.value = mapCoorToText(DEFAULT_COORDINATE);

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView(DEFAULT_COORDINATE, 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const mainIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainMarker = L.marker(DEFAULT_COORDINATE, {
  draggable: true,
  icon: mainIcon,
});

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const address = evt.target.getLatLng();
  addressField.value = mapCoorToText(address);
});

