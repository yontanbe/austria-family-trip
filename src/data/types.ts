export interface Attraction {
  name: string;
  hebrewName: string;
  address: string;
  googleMapsUrl: string;
  openHours?: string;
  price?: string;
  tip: string;
  image: string;
  website?: string;
  tag?: string;
}

export interface Restaurant {
  name: string;
  type: string;
  address: string;
  priceRange: string;
  dish: string;
  tip: string;
  googleMapsUrl?: string;
}

export interface Accommodation {
  area: string;
  recommendedType: string;
  tip: string;
  searchUrl?: string;
}

export interface GasStation {
  name: string;
  address: string;
  tip: string;
}

export interface Supermarket {
  name: string;
  address: string;
  tip: string;
}

export interface DayData {
  day: number;
  title: string;
  subtitle: string;
  region: "salzburg" | "tyrol" | "transit";
  heroImage: string;
  description: string;
  attractions: Attraction[];
  restaurants: Restaurant[];
  accommodation: Accommodation;
  gasStation?: GasStation;
  supermarket?: Supermarket;
  waterfallOfDay?: number;
  tags: string[];
}

export interface WaterfallData {
  rank: number;
  name: string;
  hebrewName: string;
  region: string;
  height: string;
  width?: string;
  description: string;
  whyVisit: string;
  difficulty: "קל" | "בינוני" | "מאתגר";
  duration: string;
  address: string;
  googleMapsUrl: string;
  parking: string;
  bestTime: string;
  tip: string;
  image: string;
  day?: number;
  mustBring: string[];
}
