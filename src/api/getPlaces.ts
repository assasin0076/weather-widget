import axios from "axios";
import type { TPlace } from "@/types/TPlace";

export default async (namePrefix: string) => {
  const params = {
    namePrefix,
    hateoasMode: false,
    limit: 5,
    offset: 0,
    sort: "-population",
  };
  const {
    data: { data },
  } = await axios.get(
    "http://geodb-free-service.wirefreethought.com/v1/geo/cities",
    {
      params,
    }
  );
  return data.map((place: TPlace) => ({
    label: place.name + " " + place.countryCode,
    ...place,
  }));
};
