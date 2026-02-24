export const BorderRadius = {
  extend: 'Grid',
  props: {
    border: 'solid, gray6, .25',
    borderWidth: '.5px',
    columns: '4.375em auto 4.375em',
    rows: '5em auto 5em',
    templateAreas: `"bss content bse"
      ". content ."
      "bes content bee"`,
    textAlign: 'center',
    childrenAs: 'props',
    childProps: {
      cursor: 'pointer',
      position: 'relative',
    },
    children: [
      {
        gridArea: 'bss',
        alignContent: 'flex-start',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
            attr: {},
          },
          NumberValue: {
            attr: {},
          },
        },
      },
      {
        BorderRadiusBox: {},
        gridArea: 'content',
        gridRow: '1 3',
      },
      {
        gridArea: 'bse',
        alignContent: 'flex-start',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
            attr: {},
          },
          NumberValue: {
            attr: {},
          },
        },
      },
      {
        gridArea: 'bes',
        alignContent: 'flex-end',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
            attr: {},
          },
          NumberValue: {
            attr: {},
          },
        },
      },
      {
        gridArea: 'bee',
        alignContent: 'flex-end',
        SizeUnits: {
          LetterValue: {
            color: '#85684B',
            attr: {},
          },
          NumberValue: {
            attr: {},
          },
        },
      },
    ],
  },
};