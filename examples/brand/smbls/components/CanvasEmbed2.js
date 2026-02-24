export const CanvasEmbed2 = {
  Flex: {
    flexAlign: 'center center',
    position: 'absolute',
    inset: '0',
    onClick: (e, el) => {
      el.setProps({
        animation: 'scaleInOut',
        animationDuration: 'F',
        pointerEvents: 'none',
      })
      el.nextElement().setProps({
        hide: false,
        show: true
      })
    },
    LoaderRatio: {
      position: 'absolute',
      pointerEvents: 'auto',
      opacity: '0.9',
      zIndex: 2,
    },
    Button: {
      position: 'relative',
      zIndex: 3,
      gap: 'X2',
      transform: 'none',
      icon: 'play',
      theme: 'quaternary',
      text: 'Click to Preview',
    },
  },
  CanvasEmbed: {
    minWidth: 'none',
    minHeight: 'none',
    border: 'none',
    width: '100%',
    height: 'H2',
    project: '/nikoloza/default',
    src: el => 'https://symbols.app/embed' + (el.parent.props.project || el.props.project),
    round: 'Z2',
  },
  props: {
    position: 'relative',
    minWidth: 'H3',
    round: 'Z2',
    overflow: 'hidden',
  },
};