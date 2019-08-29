const getHourRange = timeOfDay => {
  const validTimes = {
    'late-night': { minHour: 0, maxHour: 6 },
    morning: { minHour: 7, maxHour: 12 },
    afternoon: { minHour: 13, maxHour: 19 },
    evening: { minHour: 19, maxHour: 23 },
  };
  const range = validTimes[timeOfDay];
  if (!range) {
    throw new Error(`Invalid time of day: ${timeOfDay}`);
  }
  return range;
};

module.exports = { getHourRange };
