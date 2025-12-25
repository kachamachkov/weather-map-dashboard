import { useState } from "react";

import { useLocation } from "./hooks/useLocation";

import MobileHeader from "./components/MobileHeader";
import Toolbar from "./components/Toolbar";
import Map from "./components/Map";
import MapLegend from "./components/MapLegend";
import WeatherCards from "./components/WeatherCards";
import SidePanel from "./components/SidePanel";

function App() {
  const [mapType, setMapType] = useState('clouds_new');
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const { coords, location, setLocation, onMapClick } = useLocation();

  return (
    <>
      <MobileHeader setIsSidePanelOpen={setIsSidePanelOpen} />
      <div className="flex flex-col gap-8 pt-4 p-8 xs:pt-8 w-full lg:w-[calc(100dvw-var(--sidebar-width))] 2xl:h-screen 2xl:min-h-280">
        <Toolbar
          location={location}
          setLocation={setLocation}
          mapType={mapType}
          setMapType={setMapType}
          onMenuClick={() => setIsSidePanelOpen(true)}
        />
        <div className="grid grid-cols-1 2xl:flex-1 2xl:min-h-0 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4 gap-4">
          <div className="relative h-120 2xl:h-auto col-span-1 md:col-span-2 2xl:col-span-4 2xl:row-span-2 order-1">
            <Map coords={coords} onMapClick={onMapClick} mapType={mapType} />
            <MapLegend mapType={mapType} />
          </div>
          <WeatherCards coords={coords} />
        </div>
      </div>
      <SidePanel
        coords={coords}
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
      />
    </>
  );
}

export default App;