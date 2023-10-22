import { useEffect, useState } from "react";
import { DateTime, Settings } from "luxon";

export default function useDate() {
  const locale = "America/Los_Angeles";
  const [today, setDate] = useState(DateTime.local());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(DateTime.local());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = today.setZone(locale).toLocaleString(DateTime.TIME_SIMPLE);

  return time;
}
