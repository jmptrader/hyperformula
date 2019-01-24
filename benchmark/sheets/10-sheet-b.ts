import {benchmark, ExpectedValue} from '../benchmark'

export function sheet() {
  const rows = 5000

  const sheet = []
  sheet.push(['1', '2', '3', '4', '0'])

  let prev = 1

  while (prev < rows) {
    const rowToPush = [
      `${prev+1}`,
      '2',
      '3',
      '4',
      `=SUM($A$1:A${prev})`,
    ]

    sheet.push(rowToPush)
    ++prev
  }
  return sheet
}

export function expectedValues(sheet: string[][]): ExpectedValue[] {
  return [
    {address: 'A5000', value: 5000},
    {address: 'B5000', value: 2},
    {address: 'C5000', value: 3},
    {address: 'D5000', value: 4},
    {address: 'E5000', value: 12497500},
  ]
}

