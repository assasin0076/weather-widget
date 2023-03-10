export type TLocation = {
  id?: string;
  name: string;
  localNames?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state: string;
};
