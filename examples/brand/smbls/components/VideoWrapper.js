export const VideoWrapper = {
  overflow: 'hidden',
  position: 'relative',
  paddingBlockStart: '56.25%',
  width: '100%',
  round: 'A',
  childProps: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%'
  },
  onClick: (e, el) => {
    el.Picture.setProps({
      hide: true
    })
    el.Iframe.setProps({
      hide: false,
      show: true
    })
  },
  Picture: {
    overflow: 'hidden',
    round: 'A',
    objectFit: 'cover',
    cursor: 'pointer',
    src: 'https://img.youtube.com/vi/{{code}}/maxresdefault.jpg',
    opacity: '0.65',
    transition: 'opacity defaultBezier A',
    ':hover': {
      opacity: 1
    },
    Button: {
      text: 'Watch the Video',
      theme: 'document',
      pointerEvents: 'none',
      gap: 'Y',
      fontWeight: '500',
      color: 'title',
      transition: 'letter-spacing B defaultBezier',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: '.65',
      zIndex: 1,
      padding: 'Y2 Z2',
      Icon: {
        name: 'playOutline',
        fontSize: 'B'
      }
    }
  },
  Iframe: {
    minWidth: 'none',
    minHeight: 'none',
    border: 'none',
    round: 'A',
    hide: true,
    src: 'https://www.youtube.com/embed/{{code}}?autoplay=1',
    allowfullscreen: true
  }
}
