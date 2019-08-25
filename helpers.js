const getHourRange = timeOfDay => {
  if (timeOfDay === 'late-night') {
    return { minHour: 0, maxHour: 6 };
  }
  if (timeOfDay === 'morning') {
    return { minHour: 7, maxHour: 12 };
  }
  if (timeOfDay === 'afternoon') {
    return { minHour: 13, maxHour: 19 };
  }
  if (timeOfDay === 'evening') {
    return { minHour: 19, maxHour: 23 };
  } else {
    throw new Error(`Invalid time of day: ${timeOfDay}`);
  }
};

module.exports = { getHourRange };
