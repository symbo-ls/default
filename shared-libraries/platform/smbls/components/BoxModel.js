export const BoxModel = {
  extend: 'Grid',
  props: {
    color: 'gray6',
    fontSize: 'Z',
    border: 'solid, yellow .25',
    borderWidth: '.5px',
    position: 'relative',
    round: 'A2',
    overflow: 'hidden',
    columns: '4.375em auto 4.375em',
    rows: '4.375em auto 4.375em',
    templateAreas: `"x1 t x2"
      "l content r"
      "x3 b x4"`,
    alignItems: 'center',
    textAlign: 'center',
    childProps: {
      cursor: 'pointer',
      position: 'relative',
    },
    childrenAs: 'props',
    children: [
      {
        boxSize: '100%',
      },
      {
        boxSize: '100%',
      },
      {
        boxSize: '100%',
      },
      {
        boxSize: '100%',
      },
      {
        extends: 'BoxModelAside',
        gridArea: 't',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
          },
          NumberValue: {},
        },
      },
      {
        extends: 'BoxModelAside',
        gridArea: 'r',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
          },
          NumberValue: {},
        },
      },
      {
        extends: 'BoxModelSubGrid',
        gridArea: 'content',
      },
      {
        extends: 'BoxModelAside',
        gridArea: 'b',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
          },
          NumberValue: {},
        },
      },
      {
        extends: 'BoxModelAside',
        gridArea: 'l',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
          },
          NumberValue: {},
        },
      },
    ],
  },
};