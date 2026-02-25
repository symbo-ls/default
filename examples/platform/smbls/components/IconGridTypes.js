export const IconGridTypes = {
  extends: 'Group',
  Title: {
    text: 'Icon type'
  },
  Flex: {
    flow: 'y',
    gap: 'Y2',
    margin: '- -X2',
    round: 'Y',
    childProps: {
      flexAlign: 'center space-between',
      padding: 'X1',
      round: 'X',
      cursor: 'pointer',
      color: 'paragraph',
      transition: 'B1 defaultBezier',
      transitionProperty: 'color, background',
      ':hover': {
        color: 'title',
        background: `linear-gradient(0deg,
          rgba(255,255,255,0.06) 0%,
          rgba(255,255,255,0.07) 100%
        )`
      },
      ':hover svg': {
        color: 'title'
      },
      IconText: {
        icon: 'info',
        text: '{{ text }}',
        fontSize: 'Z',
        flexAlign: 'center space-between',
        gap: 'Y2',
        Icon: {
          transition: 'B1 defaultBezier color',
          color: 'dim',
          icon: '{{ icon }}',
          padding: 'W2',
          borderRadius: '6px',
          fontSize: 'D',
          background: `linear-gradient(0deg,
            rgba(255,255,255,0.06) 0%,
            rgba(255,255,255,0.07) 100%
          )`
        }
      },
      Icon: {
        name: 'checkmark',
        fontSize: 'Z',
        opacity: '0'
      }
    },
    childrenAs: 'state',
    children: () => [{
      icon: 'icons',
      text: 'Filled'
    }, {
      icon: 'iconsOutline',
      text: 'Outline'
    }, {
      icon: 'iconsColored',
      text: 'Multicolor'
    }]
  }
}
