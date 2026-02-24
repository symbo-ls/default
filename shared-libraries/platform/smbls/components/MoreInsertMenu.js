export const MoreInsertMenu = {
  CaptionTitle: {
    Text: {
      text: 'Insert from',
    },
    color: 'propValue',
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
        text: 'Live website',
        Icon: {
          name: 'globe'
        },
        onClick: (ev, el) => {
          el.openModal('/browser-extension')
        }
      }, {
        text: 'Local files',
        Icon: {
          name: 'terminal'
        },
        onClick: (ev, el) => {
          el.openModal('/settings', {
            key: '/install'
          })
        }
      }],
  },
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'Z',
  },
};