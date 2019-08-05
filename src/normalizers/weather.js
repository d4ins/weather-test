import moment from "moment";

import { kelvinToCelsius } from "@helpers";

export function normalizeWeather(data) {
  if (!data) {
    return null;
  }

  const normalizedData = data.list.map((weatherItem, i, orig) => {
    const temp = kelvinToCelsius(weatherItem.main.temp);
    const day = moment(weatherItem.dt_txt).format("DD MMM");

    if (orig[i + 1] && day === moment(orig[i + 1].dt_txt).format("DD MMM")) {
      return null;
    }

    return { temp, label: day };
  });

  const uniqueData = normalizedData.filter(Boolean);

  return {
    data: uniqueData.map(item => item.temp),
    labels: uniqueData.map(item => item.label)
  };
}
