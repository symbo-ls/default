export const TutorialNotificationStack = {
  extend: 'Flex',
  childExtend: 'TutorialNotification',
  props: {
    position: 'relative',
    flow: 'y',
    gap: 'X',
    width: 'H',
    childrenAs: 'state',
    useCookie: true,
    children: el => [{
      key: 'explainCanvas',
      title: 'Enjoy the canvas',
      descr: 'Dive into your interactive canvas. Pan, zoom, and explore freely as you build.',
      icon: 'resize.json',
      docsArticle: '/canvas-and-editor'
    }, {
      key: 'explainRealtime',
      title: 'Realtime experience',
      descr: 'You get a free domain for instant sharing, previews, and seamless cross-device testing.',
      icon: 'realtime-move.json',
      docsArticle: '/publish'
    }, {
      key: 'explainEditingAndNav',
      title: 'Edit your app',
      descr: 'Double-click to open any element. Right-click for contextual actions. Topbar for navigation.',
      icon: 'double-click.json',
      docsArticle: '/building-in-symbols'
    }].filter(v => {
      return el.props.useCookie ? (el.call('getCookie', 'tutorialMarked_' + v.key) !== 'true') : true
    }),
    childProps: {
      ':nth-child(1)': {
        zIndex: 3,
        position: 'relative'
      },
      ':nth-child(2)': {
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.9,
        position: 'absolute',
        transform: 'translate3d(0, -0.7em, 0) scale(0.95)'
      },
      ':nth-child(3)': {
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.7,
        position: 'absolute',
        transform: 'translate3d(0, -1.2em, 0) scale(0.9)'
      }
    }
  }
}
