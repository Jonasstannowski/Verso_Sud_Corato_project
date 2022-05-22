import { Controller } from "@hotwired/stimulus";
import mapboxgl from "!mapbox-gl";

const addMarkersToMap = (map, markersC) => {
  markersC.forEach((marker) => {
    const popup = new mapboxgl.Popup({ className: 'Mediapopup', Width: '393px', maxWidth: '393px;' }
    ).setHTML(marker.info_window)
    new mapboxgl.Marker({
      color: "#827027"
    })
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map)
  });
}

export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array,
    waypoints: Array
  }
}

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXNzdGFubm93c2tpIiwiYSI6ImNsMjY5dGl0dTAwcHIzaXBiZGtmY3Q3enkifQ.lzyFf4FZmbK30d8p3H6dpQ';
  const map = new mapboxgl.Map({
   container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [16.4132922, 41.1541349], // starting position
    zoom: 12
  });
  // create a function to make a directions request
  async function getRoute(ways) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/walking/${ways}?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1Ijoiam9uYXNzdGFubm93c2tpIiwiYSI6ImNrdmtzcWNjazB6YmoydnRrMXlsZzdpOXYifQ.S2bhSymUkMvsXOl6xsfQXA`,
      { method: 'GET' }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    const geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };
    // if the route already exists on the map, we'll reset it using setData
    if (map.getSource('route')) {
      map.getSource('route').setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    }
    // add turn instructions here at the end
  }



  map.on('load', () => {
    const mapElement = document.getElementById('map');
    const markersC = JSON.parse(mapElement.dataset.mapboxMarkers);
    const ways = mapElement.dataset.mapboxWay
    console.log(ways)
    addMarkersToMap(map, markersC);

  // make an initial directions request that
  // starts and ends at the same location
  getRoute(ways)
    const start = [16.4132922, 41.1541349]

  // Add starting point to the map
  map.addLayer({
    id: 'point',
    type: 'circle',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
        ]
      }
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#3887be'
    }
  });
  // this is where the code from the next step will go
});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
  })
);
