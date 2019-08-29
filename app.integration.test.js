const isEqual = require('lodash/isEqual');
const request = require('supertest');

const app = require('./app');
const services = require('./services');

describe('app integration', () => {
  const events = [
    { title: 'cool event', date: Date.now().toString() },
    { title: 'late night event', date: Date.now().toString() },
  ];
  const lateNightHourRange = { minHour: 0, maxHour: 6 };
  const lateNightEvents = [
    { title: 'late night event', date: Date.now().toString() },
  ];

  beforeEach(() => {
    services.getEvents = jest.fn(options =>
      isEqual(options, lateNightHourRange) ? lateNightEvents : events
    );
  });

  it('GETs /events without parameters', () => {
    expect.assertions(1);
    return request(app)
      .get('/events')
      .expect(200)
      .then(res => {
        expect(res.body.events).toEqual(events);
      });
  });

  it('GETs /events with time of day parameter', () => {
    expect.assertions(1);
    return request(app)
      .get('/events?time-of-day=late-night')
      .expect(200)
      .then(res => {
        expect(res.body.events).toEqual(lateNightEvents);
      });
  });
});
