export const MoreInsertMenuCopy = {
  CaptionTitle: {
    Text: {
      text: 'Insert from',
    },
  },
  ListInDropdown: {
    margin: '- -Z2',
    gap: '0',
    childProps: {
      padding: 'Z Z2',
      fontSize: 'A',
      round: 'Z',
      fontWeight: '400',
      color: 'title',
      Text: null,
      Icon: {
        color: 'currentColor',
        opacity: '1',
        margin: '- Y1 - -',
        fontWeight: '100',
      },
      ':hover': {
        style: {
          svg: {
            opacity: 1,
          },
        },
      },
    },
    childrenAs: 'props',
    children: el => [{
        text: 'Components library',
        Icon: {
          name: 'sf components'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:library')
        }
      }, {
        text: 'Live website',
        Icon: {
          name: 'globe'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:library-pages')
        }
      }, {
        text: 'Local files',
        Icon: {
          name: 'terminal'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:figma')
        }
      }, {
        text: 'Figma',
        Icon: {
          name: 'figma'
        },
        Sup: {
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:figma')
        }
      }, {
        text: 'Icons',
        Icon: {
          name: 'icons'
        },
        Sup: {
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:icons')
        }
      }, {
        text: 'Fonts',
        Icon: {
          name: 'fontFace'
        },
        Sup: {
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:fonts')
        }
      }, {
        text: 'Integrations',
        Icon: {
          name: 'fuse'
        },
        Sup: {
          margin: '-Z - - X2',
          fontSize: 'Y',
          text: '(soon)'
        },
        onClick: (ev, el) => {
          el.setWindow('explorer', 'insert:integrations')
        }
      }],
  },
  extend: 'Dropdown',
  props: {
    padding: 'Z1 A',
    gap: 'A',
    flexFlow: 'y',
  },
};