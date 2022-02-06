declare global {
  interface Window {
    TOUCH: boolean;
    WE: any;
    getLocation: (force?: boolean) => void;
    google: any;
    googleAutoComplete: any;
    Slip: any;
    deferredPrompt: BeforeInstallPromptEvent;
  }
}

export interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns an array of DOMString items containing the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to chose between a web version or
   * an Android version.
   */
  readonly platforms: Array<string>;

  /**
   * Returns a Promise that resolves to a DOMString containing either "accepted" or "dismissed".
   */
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;

  /**
   * Allows a developer to show the install prompt at a time of their own choosing.
   * This method returns a Promise.
   */
  prompt(): Promise<void>;
}

export type TemperatureObj = {
  min?: number;
  max?: number;
  day?: number;
  night?: number;
};

export type Weather = {
  moon_phase: number;
  moonset: number;
  moonrise: number;
  pop: number;
  feels_like: number;
  uvi: number;
  dt: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: TemperatureObj | number;
  weather: [
    {
      main: string;
      icon: string;
      description: string;
    }
  ];
  wind_deg: number;
  wind_speed: number;
};
export type CityWeather = {
  timezone: string;
  timezone_offset: number;
  lat: number;
  lon: number;
  current: Weather;
  hourly: Weather[];
  daily: Weather[];
};
export type Coords = {
  latitude: number;
  longitude: number;
};

// eslint-disable-next-line
export enum LOCATION {
  LOCATION_NO,
  LOCATION_OK,
  LOCATION_ERROR,
}
export type City = {
  id: number;
  name: string;
  location: LOCATION;
  coords: Coords;
  isCurrentCity?: boolean;
  updateTime: string;
  weather: CityWeather;
};
