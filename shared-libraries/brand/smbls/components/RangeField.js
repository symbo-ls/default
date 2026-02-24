export const RangeField = {
  extends: 'RangeWithButtons',
  flexAlign: 'center space-between',
  padding: 'X2',
  round: 'Y2',
  gap: 'Y',
  SquareButton_minus: {
    round: 'Y1',
    padding: '0.3125em',
  },
  Value: {
    tag: 'span',
    fontSize: 'Z',
  },
  Range: {
    ':hover': {
      '::-webkit-slider-thumb': {
        borderColor: 'cerulean',
      },
    },
    '::-webkit-slider-thumb': {
      borderColor: 'blue',
    },
  },
  SquareButton_plus: {
    round: 'Y1',
    padding: '0.3125em',
  },
};