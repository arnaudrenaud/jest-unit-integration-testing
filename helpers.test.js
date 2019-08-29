const { getHourRange } = require('./helpers');

describe('getHourRange', () => {
  it('returns late-night hours range', () => {
    expect(getHourRange('late-night')).toMatchInlineSnapshot(`
      Object {
        "maxHour": 6,
        "minHour": 0,
      }
    `);
  });
  it('returns morning hours range', () => {
    expect(getHourRange('morning')).toMatchInlineSnapshot(`
      Object {
        "maxHour": 12,
        "minHour": 7,
      }
    `);
  });
  it('returns afternoon hours range', () => {
    expect(getHourRange('afternoon')).toMatchInlineSnapshot(`
      Object {
        "maxHour": 19,
        "minHour": 13,
      }
    `);
  });
  it('returns evening hours range', () => {
    expect(getHourRange('evening')).toMatchInlineSnapshot(`
      Object {
        "maxHour": 23,
        "minHour": 19,
      }
    `);
  });
  it('throws an error for invalid time range', () => {
    expect(() =>
      getHourRange('early-morning')
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid time of day: early-morning"`
    );
  });
});
