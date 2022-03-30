export const format = (dateString) => {
  const getDate = new Date(dateString).toDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = new Date(dateString);
  let hour = time.getHours();
  let minutes = time.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${getDate} • ${hour}:${minutes}`;
};
