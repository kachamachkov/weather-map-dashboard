import { useState } from "react"

import Map from "./components/Map"
import CurrentWeather from "./components/cards/CurrentWeather"
import HourlyForecast from "./components/cards/HourlyForecast"
import DailyForecast from "./components/cards/DailyForecast"
import AdditionalInfo from "./components/cards/AdditionalInfo"

import type { Coords } from "./types"

function App() {
  const [coords, setCoords] = useState<Coords>({ lat: 10, lon: 25 });

  return (
    <div className="flex flex-col gap-8">
      <Map />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  )
}

export default App
