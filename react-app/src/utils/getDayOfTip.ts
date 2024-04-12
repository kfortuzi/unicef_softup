import tips from 'src/assets/jsons/tips-of-the-day.json';

import { LocalStorageKey, getItem, saveItem } from "./storage";

export default function getDayOfTip (): string {
  const tip = getItem<string>(LocalStorageKey.DAY_OF_TIP);
  const dayOfMilliSeconds = 86400000;

  if (!tip) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    saveItem<string>(LocalStorageKey.DAY_OF_TIP, randomTip, dayOfMilliSeconds);

    return randomTip;
  }

  return tip;
}