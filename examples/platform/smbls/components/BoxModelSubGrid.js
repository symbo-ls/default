export const BoxModelSubGrid = {
  style: {
    border: '.5px solid rgba(139, 147, 92, .25)'
  },
  extend: 'Grid',
  props: {
    columns: '4.375em auto 4.375em',
    rows: '4.375em auto 4.375em',
    round: 'A',
    templateAreas: `"x1 t x2"
      "l content r"
      "x3 b x4"`,
    position: 'relative',
    childrenAs: 'props',
    children: [
      {
        boxSize: '100%'
      },
      {
        boxSize: '100%'
      },
      {
        boxSize: '100%'
      },
      {
        boxSize: '100%'
      },
      {
        extends: 'Icon',
        position: 'absolute',
        top: 'Y1',
        left: 'Y1',
        icon: 'paddingColored',
        fontSize: 'A',
        color: '#8B935C'
      },
      {
        extends: 'Icon',
        icon: 'marginColored',
        position: 'absolute',
        top: '-Z1',
        left: '-Z1',
        fontSize: 'A',
        color: 'yellow'
      },
      {
        extends: 'BoxModelAside',
        gridArea: 't',
        SizeUnits: {
          LetterValue: {
            color: '#8F9959'
          },
          NumberValue: {}
        }
      },
      {
        extends: 'BoxModelAside',
        gridArea: 'r',
        SizeUnits: {
          LetterValue: {
            color: '#8F9959'
          },
          NumberValue: {}
        }
      },
      {
        extends: 'BoxModelMiddle',
        gridArea: 'content'
      },
      {
        extends: 'BoxModelAside',
        gridArea: 'b',
        SizeUnits: {
          LetterValue: {
            color: '#8F9959'
          },
          NumberValue: {}
        }
      },
      {
        extends: 'BoxModelAside',
        gridArea: 'l',
        SizeUnits: {
          LetterValue: {
            color: '#8F9959'
          },
          NumberValue: {}
        }
      }
    ]
  }
}
