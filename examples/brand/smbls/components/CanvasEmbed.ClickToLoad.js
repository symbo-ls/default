const Canvasembedclicktoload = {
  position: 'relative',
  border: '1px, solid, line',
  round: 'Z2',
  overflow: 'hidden',
  onClick: (e, el) => {
    el.LoaderRatio.setProps({
      animation: 'scaleInOut',
      animationDelay: 'F',
      pointerEvents: 'none'
    })
    el.CanvasEmbed.setProps({
      hide: false,
      show: true
    })
  },
  minHeight: 'G',
  LoaderRatio: {
    flexAlign: 'center center',
    position: 'absolute',
    pointerEvents: 'auto',
    Button: {
      position: 'relative',
      zIndex: 3,
      gap: 'X2',
      transform: 'none',
      icon: 'play',
      theme: 'quaternary',
      text: 'Click to preview'
    }
  },
  CanvasEmbed: {
    minWidth: 'auto',
    minHeight: 'auto',
    border: 'none',
    width: '100%',
    height: '100%',
    inset: '0',
    project: '/nikoloza/default',
    src: el => 'https://symbols.app/embed' + (el.parent.props.project || el.props.project),
    round: 'Z2'
  }
}

export { Canvasembedclicktoload as 'CanvasEmbed.ClickToLoad' }
