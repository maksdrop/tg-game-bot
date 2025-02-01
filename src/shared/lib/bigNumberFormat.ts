import numbro from 'numbro'

export const bigNumberFormat = (value?: number | null, replacerForEmpty?: string): string => {
  if (!value) {
    return replacerForEmpty || '0'
  }
  return numbro(value).format({
    thousandSeparated: true,
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
      trillion: 'T',
    },
    average: value >= 1e3,
    mantissa: value >= 1e3 ? 1 : 0,
    optionalMantissa: true,
  })
}
