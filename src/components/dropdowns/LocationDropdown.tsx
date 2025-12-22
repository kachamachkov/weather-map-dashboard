import type { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type Props = {
  location: string,
  setLocation: Dispatch<SetStateAction<string>>
}

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {locations.map((city) => (
          <SelectItem key={city} value={city} >
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const locations = [
  "Sofia",
  "Plovdiv",
  "Burgas",
  "Varna",
  "Paris",
  "Madrid",
  "London"
];