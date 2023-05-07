import React from 'react'

// Map
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export const Map = ({ lat, lon }: { lat: number; lon: number }) => {
  const mapRef = React.useRef(null)

  React.useEffect(() => {
    const mapContainer = mapRef.current
    let map: any = null

    if (mapContainer && !map) {
      map = L.map(mapContainer).setView([lat, lon], 12)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map)

      L.marker([lat, lon]).addTo(map)
    } else if (map) {
      map.remove()

      if (!mapContainer) return

      map = L.map(mapContainer).setView([lat, lon], 12)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map)

      L.marker([lat, lon]).addTo(map)
    }

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [lat, lon])

  return <div ref={mapRef} style={{ height: '350px' }}></div>
}
