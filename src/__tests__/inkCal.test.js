// const inkGrapher = require('../utils/inkCal')
import inkGrapher from '../../utils/inkCal'

describe('Ink Calculation', () => {

  test('Should return a number', () => {
    let actual = inkGrapher(.15, .18, .76);
    expect(typeof actual).toBe('number')
  })

  test('Should return a number with 2 decimal places', () => {
    let num = inkGrapher(.15, .18, .76);
    let decimalLength = num.toString().split('.').pop().length;
    expect(decimalLength).toBe(2)
  })

  test('Should return .73', () => {
    let actual = inkGrapher(.15, .18, .76);
    let expected = .73;
    expect(actual).toEqual(expected);
  })

  test('Should return .51', () => {
    let actual = inkGrapher(.5, .18, .76);
    let expected = .51;
    expect(actual).toEqual(expected);
  })

  test('Should return 3.97', () => {
    let actual = inkGrapher(.28, .31, 4.1);
    let expected = 3.97;
    expect(actual).toEqual(expected);
  })
});