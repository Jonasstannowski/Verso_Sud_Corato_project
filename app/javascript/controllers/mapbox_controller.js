import { Controller } from "@hotwired/stimulus";
import mapboxgl from "!mapbox-gl";


export default class extends Controller {
  static values = {
    apiKey: String,
    markers: Array
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
    // this.//_addDirectionsToMap() // add direktions api
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {

          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,

      }),
      
    );
  }

  _addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      const popup = new mapboxgl.Popup({ className: 'Mediapopup', Width: '393px !imortant', maxWidth: '393px;'}
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
  //for tracking distance between User and Location

  //////_distanceUserAndMarker() {
   // if (UserLocation.latitued && UserLocation.longitued - Location.latitued && Location.longitued < 3)
   // $(".mapboxgl-popup").show()
  //}
}
