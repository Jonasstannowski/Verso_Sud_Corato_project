import { Controller } from "@hotwired/stimulus";
import mapboxgl from "!mapbox-gl";


export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array,
    waypoints: Array
  }



  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/jonasstannowski/cl29166zh000k15l1rsm40m08",
      attributionControl: false
    })
    this._addMarkersToMap()
    this._fitMapToMarkers()
    //const start = [16.410691429626354, 41.15339555205503];
    //const end = [16.410691429626354, 41.15339555205503];
    // this.////_addApidirektions() // add diections API
    this._addStartMarker()
    // this._addDirectionsControlerToMap() // add direktions controler
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {

          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,

      })
      //console.log(UserLocation) for tracking distance between User and Location
    );
    $("#map").on('load', () => {
      // initial directions request that
      // starts and ends at the same location
      //getRoute(start, end);
      const route = mapElement.dataset.route
      const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };
      // Add starting point to the map
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: route
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
    });
  }

  _addStartMarker() {
    this.waypointsValue.forEach(( waypoint) => {
      const element = document.createElement('div');
      element.className = 'marker';
      element.style.backgroundSize = 'contain';
      element.style.backgroundColor = '#FFFFFF';
      element.style.borderRadius = '50 %';
      element.style.width = '40px';
      element.style.height = '40px';
      new mapboxgl.Marker(element)
        .setLngLat([waypoint.lng, waypoint.lat])
        .addTo(this.map);
        //console.log(this.map)
      console.log(element)
    });
  };


  _addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      const popup = new mapboxgl.Popup({ className: 'Mediapopup', Width: '393px', maxWidth: '393px;' }
      ).setHTML(marker.info_window)
      new mapboxgl.Marker({
        color: "#827027"
      })
        .setLngLat([marker.lng, marker.lat])
        .setPopup(popup)
        .addTo(this.map)
    });
  }

  _fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([marker.lng, marker.lat]))
    this.map.fitBounds(bounds, { padding: 100, maxZoom: 15, duration: 2000 })
  }

  _addDirectionsControlerToMap() {
    this.map.addControl(
      new MapboxDirections({
     accessToken: mapboxgl.accessToken
      }),
    'bottom-left'
    );
  }

  //for tracking distance between User and Location

  //////_distanceUserAndMarker() {
   // if (UserLocation.latitued && UserLocation.longitued - Location.latitued && Location.longitued  3)
   // $(".mapboxgl-popup").show()
  //}
}
