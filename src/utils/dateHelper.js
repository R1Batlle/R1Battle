const changeDateTimeToNight = (date) => {
  const newDate = new Date(date);
  newDate.setUTCHours(0, 0, 0, 0);
  return newDate;
};

const changeDateTimeToNightAfter = (date) => {
  const newDate = new Date(date);
  newDate.setUTCHours(23, 59, 59, 999);
  return newDate;
};

module.exports = { changeDateTimeToNight, changeDateTimeToNightAfter };
