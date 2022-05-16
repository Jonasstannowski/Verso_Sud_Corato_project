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
    this._addApidirektions() // add Api diections
    //this._addDirectionsToMap() // add direktions api
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
  }



  _addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      const popup = new mapboxgl.Popup({ className: 'Mediapopup', Width: '393px', maxWidth: '393px;'}
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

  _addDirectionsToMap() {
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


  _addApidirektions() {
    console.log("script_working")
    //if (window.location['/locations/4'] === '/locations/4') {
      // an arbitrary start will always be the same
      // only the end or destination will change


      // this is where the code for the next step will go

      // create a function to make a directions request
      async function getRoute(end) {
        // make a directions request using cycling profile
        // an arbitrary start will always be the same
        // only the end or destination will change
        const query = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/walking/16.41073736771048%2C41.15338854592645%3B16.411264502947745%2C41.15342422292807%3B16.4111638141938%2C41.15329935333713%3B16.411193428533153%2C41.15317894314964%3B16.411637643620935%2C41.15323691845285%3B16.411844943995163%2C41.153165564226356%3B16.412597148210097%2C41.15299163797437%3B16.412431307911106%2C41.153170023868284%3B16.41249645945723%2C41.15335732853384%3B16.411756100977186%2C41.152924743138726%3B16.411840811679838%2C41.15201866844117%3B16.411438266451057%2C41.151771308078025%3B16.41134572731852%2C41.152119702687514%3B16.41052360937846%2C41.15230859350157%3B16.40946442000819%2C41.152811692656854%3B16.409831142316392%2C41.15293913538591%3B16.410733843382815%2C41.15336394269522?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1Ijoiam9uYXNzdGFubm93c2tpIiwiYSI6ImNrdmtzcWNjazB6YmoydnRrMXlsZzdpOXYifQ.S2bhSymUkMvsXOl6xsfQXA`,
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
      console.log("here")
      $("#map").on('load', () => {
        // make an initial directions request that
        // starts and ends at the same location
        getRoute(start);

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
   // }
  }
}
