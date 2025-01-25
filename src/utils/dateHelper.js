const changeDateTimeToNight = (date) => {
  let newDate = new Date(date);
  newDate.setUTCHours(0);
  newDate.setUTCMinutes(0);
  newDate.setUTCSeconds(0);
  newDate.setUTCMilliseconds(0);
  return newDate;
};

const changeDateTimeToNightAfter = (date) => {
  let newDate = new Date(date);
  newDate.setUTCHours(23);
  newDate.setUTCMinutes(59);
  newDate.setUTCSeconds(59);
  newDate.setUTCMilliseconds(999);
  return newDate;
};

export { changeDateTimeToNight, changeDateTimeToNightAfter };
