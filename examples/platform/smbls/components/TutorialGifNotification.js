export const TutorialGifNotification = {
  if: (el, s) => {
    const preventByCookie = el.call('getCookie', 'tutorialMarked_' + s.key) === 'true'
    return el.props.useCookie ? !preventByCookie : true
  },
  state: {
    title: 'Move around and zoom canvas',
    descr: 'Dive into your interactive canvas. Pan, zoom, and explore freely as you build.',
    src: 'intro.gif',
  },
  Img: {
    minWidth: '3.2em',
    src: '{{ src }}',
    fontSize: 'C2',
  },
  Hgroup: {
    flex: 1,
    margin: 'auto',
    padding: 'Z B A',
    gap: 'Y1',
    lineHeight: 1.4,
    width: '100%',
    H: {
      tag: 'strong',
      text: '{{ title }}',
    },
    P: {
      text: '{{ descr }}',
    },
  },
  TutorialNotificationButtons: {},
  extend: 'Navbar',
  props: {
    theme: 'canvas-card-glass',
    padding: '0',
    overflow: 'hidden',
    align: 'stretch',
    transition: 'all, defaultBezier, B2',
    round: 'Z2',
    gap: 'A',
    flow: 'y',
    width: '100%',
    borderColor: 'line-highlight',
    maxWidth: 'H2',
    rootSlide: true,
    useCookie: true,
  },
};