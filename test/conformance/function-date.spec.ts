import { HyperFormula, DetailedCellError } from '../../src';
import { CellError, ErrorType, CellType, EmptyValue } from '../../src/Cell'
import '../testConfig'
import { adr, dateNumberToString } from '../testUtils'

// Data and test scenarios were part of the working draft for OpenFormula standard
// https://www.oasis-open.org/committees/download.php/16826/openformula-spec-20060221.html#DATE

function createEngine(data: any[][]) {
  let engine = HyperFormula.buildFromArray(data);

  return {
    getCellValue(cellAddress: string) {
      return engine.getCellValue(adr(cellAddress));
    }
  }
}

describe('Acceptance tests DATE function', () => {
  it('should support simple date', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2005,1,31)'],
    ])

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('01/31/2005');
  });

  it('should support date with small case', () => {
    const engine = HyperFormula.buildFromArray([
      ['=date(8755,12,25)'],
    ])

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('12/25/8755');
  });


  it('should support MIN date 1899/12/30', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(1899,12,30)'],
    ])

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('12/30/1899');
  });

  it('should support MAX date 9999/12/31', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(9999,12,31)'],
    ])

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('12/31/9999');
  });

  it('should handle "00X" in month number', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(1990,009,10)'],
    ])

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('09/10/1990');
  });

  it('should handle white spaces in DATE', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(1990, 10, 09)'],
    ])

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('10/09/1990');
  });

  it('should support nonleap year 1900', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(1900,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('03/01/1900');
  });

  it('should support nonleap year 1995', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(1995,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('03/01/1995');
  });

  it('should support nonleap year 2001', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2001,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('03/01/2001');
  });

  it('should support nonleap year 2100', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2100,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('03/01/2100');
  });

  it('should support leap year 1996', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(1996,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/1996');

  });

  it('should support leap year 2016', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2016,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/2016');

  });

  it('should support leap year 2020', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2020,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/2020');
  });

  it('should support leap year 2024', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2024,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/2024');

  });

  it('should support leap year 2028', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2028,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/2028');
  });

  it('should support leap year 2032', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2032,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/2032');
  });

  it('should support leap year 2040', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2040,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/2040');
  });

  it('should support leap year 2400', () => {
    const engine = HyperFormula.buildFromArray([
      ['=DATE(2400,02,29)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual('02/29/2400');
  });

  xit('should throw a error in the absence of arguments', () => { //pending for #189
    const engine = HyperFormula.buildFromArray([
      ['=DATE()'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A1')))).toEqual((new DetailedCellError(new CellError(ErrorType.NA), '#N/A!')));
  });

  xit('should throw a error #VALUE! when year is null', () => { //pending for #191
    const engine = HyperFormula.buildFromArray([
      [null],
      ['=DATE(A1, 2, 3)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A2')))).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!'));
  });

  xit('should throw a error #VALUE! when year is string', () => {
    const engine = HyperFormula.buildFromArray([
      ['string'],
      ['=DATE(A1, 2, 3)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A2')))).toEqual(new DetailedCellError(new CellError(ErrorType.VALUE), '#VALUE!'));
  });

  xit('should show nullYear instead when year is empty string', () => { //pending for #191
    const engine = HyperFormula.buildFromArray([
      [''],
      ['=DATE(A1, 2, 3)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A2')))).toEqual('03/02/1900');
  });

  xit('should show nullYear instead when year is emptyValue', () => { //pending for #191
    const engine = HyperFormula.buildFromArray([
      [EmptyValue],
      ['=DATE(A1, 2, 3)'],
    ]);

    expect(dateNumberToString(engine.getCellValue(adr('A2')))).toEqual('03/02/1900');
  });

});





