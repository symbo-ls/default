export const IntegrationItem = {
  extend: [
    'Flex',
    'Link',
  ],
  props: ({
      state
    }) => ({
      position: 'relative',
      href: '/playground',
      fontWeight: 'bold',
      overflow: 'hidden',
      flexDirection: 'column',
      width: '100%',
      height: 'F2',
      padding: '0 Z 0 A2',
      borderRadius: 'Z1',
      borderStyle: 'solid',
      borderWidth: '0.5px',
      borderColor: 'line',
      style: {
        background: `url(${state.poster}) center center no-repeat`,
        backgroundSize: 'cover'
      },

      ':after, :before': {
        content: '""',
        position: 'absolute',
        inset: '0 0 0 0',
        transition: 'B defaultBezier',
        transitionProperty: 'opacity',
        background: 'shadow-overlay',
        zIndex: 1
      }
    }),
  Title: {
    color: 'gray8',
    fontWeight: 400,
    position: 'absolute',
    inset: 'auto 0 0 0',
    padding: 'Z A Z2',
    background: 'gray1 .65',
    boxShadow: '0 0 35px gray1',
    zIndex: 2,
    text: '{{ title }}',
  },
};