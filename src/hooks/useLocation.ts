import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getGeocode } from "@/api.ts";

import type { Coords } from "@/types.ts";

export function useLocation(initialLocation = 'Sofia', initialCoords: Coords = { lat: 42, lon: 23 }) {
  const [coordinates, setCoordinates] = useState<Coords>(initialCoords);
  const [location, setLocation] = useState(initialLocation);

  const { data: geocodeData } = useQuery({
    queryKey: ['geocode', location],
    queryFn: () => getGeocode(location),
    enabled: location !== 'custom'
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoordinates({ lat, lon });
    setLocation('custom');
  }

  const coords = location === 'custom'
    ? coordinates
    : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 }

  return {
    coords,
    location,
    setLocation,
    onMapClick
  }
}