import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import type { Coords } from "../types"
import L from 'leaflet'
import mapMarker from '../assets/map-marker.svg'

const customIcon = L.icon({
  iconUrl: mapMarker,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const API_KEY = import.meta.env.VITE_API_KEY;

type Props = {
  coords: Coords
  onMapClick: (lat: number, lon: number) => void,
  mapType: string
}

export default function Map({ coords, onMapClick, mapType }: Props) {
  const { lat, lon } = coords;

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      style={{ width: '100%', height: '100%' }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <TileLayer
        opacity={0.7}
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />

      <Marker position={[lat, lon]} icon={customIcon} />
    </MapContainer>
  )
}

function MapClick({
  onMapClick,
  coords
}: {
  onMapClick: (lat: number, lon: number) => void
  coords: Coords
}) {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);

  map.on('click', (e) => {
    const { lat, lng } = e.latlng;
    onMapClick(lat, lng);
  })

  return null;
}