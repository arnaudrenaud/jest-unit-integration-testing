const { getHourRange } = require('./helpers');
const services = require('./services');

const getEvents = (req, res) => {
  const timeOfDay = req.query['time-of-day'];
  if (timeOfDay) {
    return res.send({ events: services.getEvents(getHourRange(timeOfDay)) });
  }
  return res.send({ events: services.getEvents() });
};

module.exports = { getEvents };
