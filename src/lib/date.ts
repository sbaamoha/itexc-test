export function dateExtract(date: string) {
  const dateString = date;
  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  let hours: string | number = dateObj.getHours().toString().padStart(2, "0");
  const minutes = dateObj.getMinutes();
  const ampm = +hours >= 12 ? "PM" : "AM";
  hours = +hours % 12 || 12;

  return {
    year,
    month,
    day,
    hours,
    minutes,
    ampm,
  };
}
