export const TutorialNotification = {
  extend: 'Navbar',
  props: {
    theme: 'canvas-card-glass',
    padding: 'A C+X Z2 Z2',
    overflow: 'hidden',
    align: 'stretch',
    transition: 'all, defaultBezier, B2',
    round: 'Z2'
  },
  state: {
    title: 'Enjoy the canvas',
    descr: 'You are about to experience the canvas experience. Pan and zoom around as you build.',
    icon: 'resize.json'
  },
  Lottie: {
    minWidth: '3.2em',
    src: '{{ icon }}',
    fontSize: 'C2',
    margin: '-A -Y2 - -Z1'
  },
  Hgroup: {
    flex: 1,
    margin: 'auto',
    padding: '- A - -',
    gap: 'Y1',
    lineHeight: 1.4,
    H: {
      tag: 'strong',
      text: '{{ title }}'
    },
    P: {
      text: '{{ descr }}'
    }
  },
  Buttons: {
    extends: 'Flex',
    align: 'center center',
    flow: 'y',
    borderStyle: 'solid',
    borderColor: 'line',
    borderWidth: '0 0 0 1px',
    height: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    childExtends: [
      'CanvasButton',
      'IconButton'
    ],
    childProps: {
      round: '0',
      padding: 'A',
      flex: 1,
      ':first-child': {
        borderStyle: 'solid',
        borderColor: 'line',
        borderWidth: '0 0 1px 0'
      }
    },
    children: [
      {
        icon: 'checkmark'
      },
      {
        icon: 'question mark'
      }
    ]
  }
}
