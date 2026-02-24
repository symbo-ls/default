export const DesignComponentHeader = {
  tag: 'header',
  extends: [
    'DesignElement',
  ],
  props: ({
    state
  }) => ({
    minWidth: '100%',
    padding: 'Z1 Z2 Z1',
    flow: 'row',
    round: '0',
    alignItems: 'flex-start',
    pointerEvents: 'none',
    '@dark': {
      background: 'gray3 .5'
    },
    '@light': {
      borderBottom: 'gray14, 1px, solid'
    },

    WiderButton: {
      padding: 'Y2',
      icon: state.icon,
      theme: state.iconTheme
    },
    Hgroup: {
      H: {
        text: state.title,
        fontWeight: '400',
        textTransform: 'capitalize'
      },
      P: {
        text: state.paragraph,
        fontSize: 'Z1',
        maxWidth: 'F1'
      }
    }
  }),
};