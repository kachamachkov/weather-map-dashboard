import { Suspense, useState } from "react"

import Map from "./components/Map"
import CurrentWeather from "./components/cards/CurrentWeather"
import HourlyForecast from "./components/cards/HourlyForecast"
import DailyForecast from "./components/cards/DailyForecast"
import AdditionalInfo from "./components/cards/AdditionalInfo"

import type { Coords } from "./types"
import LocationDropdown from "./components/dropdowns/LocationDropdown"
import { useQuery } from "@tanstack/react-query"
import { getGeocode } from "./api"
import MapTypeDropdown from "./components/dropdowns/MapTypeDropdown.tsx"
import MapLegend from "./components/MapLegend.tsx"
import CurrentSkeleton from "./components/skeletons/CurrentSkeleton.tsx"
import DailySkeleton from "./components/skeletons/DailySkeleton.tsx"
import HourlySkeleton from "./components/skeletons/HourlySkeleton.tsx"
import AdditionalInfoSkeleton from "./components/skeletons/AdditionalInfoSkeleton.tsx"

function App() {
  const [coordinates, setCoords] = useState<Coords>({ lat: 42, lon: 23 });
  const [location, setLocation] = useState('Sofia');
  const [mapType, setMapType] = useState('clouds_new');

  const { data: geocodeData } = useQuery({
    queryKey: ['geocode', location],
    queryFn: () => getGeocode(location),
    enabled: location !== 'custom'
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
    setLocation('custom');
  }

  const coords = location === 'custom'
    ? coordinates
    : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex gap-4">
          <h3 className="text-2xl font-semibold">Location:</h3>
          <LocationDropdown location={location} setLocation={setLocation} />
        </div>
        <div className="flex gap-4">
          <h3 className="text-2xl font-semibold">Map Type:</h3>
          <MapTypeDropdown mapType={mapType} setMapType={setMapType} />
        </div>
      </div>
      <div className="relative">
        <Map coords={coords} onMapClick={onMapClick} mapType={mapType} />
        <MapLegend mapType={mapType} />
      </div>
      <Suspense fallback={<CurrentSkeleton />}>
        <CurrentWeather coords={coords} />
      </Suspense>
      <Suspense fallback={<HourlySkeleton />}>
        <HourlyForecast coords={coords} />
      </Suspense>
      <Suspense fallback={<DailySkeleton />}>
        <DailyForecast coords={coords} />
      </Suspense>
      <Suspense fallback={<AdditionalInfoSkeleton />}>
        <AdditionalInfo coords={coords} />
      </Suspense>
    </div>
  )
}

export default App
