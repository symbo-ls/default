export const PreviewModesMenu = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'A',
    theme: 'navbar',
    padding: 'Y1 Z2'
  },
  ListInDropdown_themes: {
    margin: '- -Z2',
    gap: '0',
    childProps: {
      ':hover': {
        style: {
          svg: {
            opacity: 1
          }
        }
      },
      padding: 'Z Z2',
      fontSize: 'A',
      fontWeight: '400',
      round: 'Z',
      Text: null,
      color: 'title',
      Icon: {
        color: 'currentColor',
        opacity: '1',
        margin: '- Y1 - -',
        fontWeight: '100'
      }
    },
    childrenAs: 'props',
    children: el => [{
      text: 'Open in new tab',
      Icon: {
        name: 'arrow up right'
      },
      onClick: 'openInNewTab'
    },
    {
      text: 'Local render',
      Icon: {
        name: 'playOvalDotted'
      },
      onClick: (ev, el, s) => {
        el.openModal('/browser-preview')
      }
    }, {
      text: 'Remote preview',
      Icon: {
        name: 'network'
      },
      onClick: (ev, el, s) => {
        el.openModal('/browser-preview')
      }
    }
    ]
  }
}
