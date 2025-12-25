import type { Dispatch, SetStateAction } from "react";

import LightDarkToggle from "./LightDarkToggle";
import LocationDropdown from "./dropdowns/LocationDropdown";
import MapTypeDropdown from "./dropdowns/MapTypeDropdown";

import Hamburger from "/src/assets/hamburger.svg?react";

interface ToolbarProps {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  mapType: string;
  setMapType: Dispatch<SetStateAction<string>>;
  onMenuClick: () => void;
}

export default function Toolbar({ location, setLocation, mapType, setMapType, onMenuClick }: ToolbarProps) {
  return (
    <div className="flex flex-col gap-4 xs:flex-row xs:gap-8">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <h3 className="text-2xl font-semibold">Location:</h3>
        <LocationDropdown location={location} setLocation={setLocation} />
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <h3 className="text-2xl font-semibold whitespace-nowrap">Map Type:</h3>
        <MapTypeDropdown mapType={mapType} setMapType={setMapType} />
      </div>
      <div className="ml-auto flex gap-4 items-center">
        <div className="hidden xs:block">
          <LightDarkToggle />
        </div>
        <button onClick={onMenuClick} className="hidden xs:block">
          <Hamburger className="size-6 lg:hidden" />
        </button>
      </div>
    </div>
  );
}