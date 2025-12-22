import { useState } from "react"

import Map from "./components/Map"
import CurrentWeather from "./components/cards/CurrentWeather"
import HourlyForecast from "./components/cards/HourlyForecast"
import DailyForecast from "./components/cards/DailyForecast"
import AdditionalInfo from "./components/cards/AdditionalInfo"

import type { Coords } from "./types"

function App() {
  const [coords, setCoords] = useState<Coords>({ lat: 42, lon: 23 });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({lat, lon});
  }

  console.log(coords);

  return (
    <div className="flex flex-col gap-8">
      <Map coords={coords} onMapClick={onMapClick}/>
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  )
}

export default App
