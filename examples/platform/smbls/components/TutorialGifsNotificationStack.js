export const TutorialGifsNotificationStack = {
  extend: 'Flex',
  childExtend: 'TutorialGifNotification',
  props: {
    position: 'relative',
    flow: 'y',
    gap: 'X',
    width: 'H2',
    childrenAs: 'state',
    children: [
      {
        key: 'explainCanvas',
        title: 'Move around and zoom canvas',
        descr: 'Dive into your interactive canvas. Pan, zoom, and explore freely as you build.',
        src: 'intro.gif',
        docsArticle: '/canvas-and-editor'
      },
      {
        key: 'explainRealtime',
        title: 'Realtime experience',
        descr: 'You get a free domain for instant sharing, previews, and seamless cross-device testing.',
        src: 'realtime.gif',
        docsArticle: '/publish'
      },
      {
        key: 'explainEditingAndNav',
        title: 'Edit your app',
        descr: 'Double-click to open any element. Right-click for contextual actions. Topbar for navigation.',
        icon: 'double-click.json',
        src: 'editor.gif',
        docsArticle: '/building-in-symbols',
        callback: (el, s) => {
          el.setWindow('explorer', 'onboarding')
        }
      }
    ],
    childProps: {
      ':nth-child(3)': {
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.7,
        position: 'absolute',
        transform: 'translate3d(0, -1.2em, 0) scale(0.9)'
      },
      ':nth-child(2)': {
        pointerEvents: 'none',
        zIndex: 2,
        opacity: 0.9,
        position: 'absolute',
        transform: 'translate3d(0, -0.7em, 0) scale(0.95)'
      },
      ':nth-child(1)': {
        position: 'relative',
        zIndex: 3
      }
    }
  }
}
