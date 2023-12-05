function pad2(n: number): string {
  return n < 10 ? "0" + n : n.toString();
}

function getDateParts(date: Date): {
  date: Date;
  day: string;
  month: string;
  year: string;
  hours: string;
  minutes: string;
  seconds: string;
} {
  const localDate = new Date(date);
  const day = pad2(localDate.getUTCDate());
  const month = pad2(localDate.getMonth() + 1);
  const year = localDate.getFullYear().toString();
  const hours = pad2(localDate.getHours());
  const minutes = pad2(localDate.getMinutes());
  const seconds = pad2(localDate.getSeconds());

  return {
    date: localDate,
    day,
    month,
    year,
    hours,
    minutes,
    seconds,
  };
}

function dateToISOString(date: Date | null): string | null {
  return date ? date.toISOString() : null;
}

function formatTimestampToStringCustom(date: Date): string {
  const { day, month, year, hours, minutes } = getDateParts(date);
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export { dateToISOString, formatTimestampToStringCustom };
