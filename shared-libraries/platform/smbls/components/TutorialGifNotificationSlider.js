export const TutorialGifNotificationSlider = {
  if: (el, s) => {
    const preventByCookie = el.call('getCookie', 'tutorialMarked_' + s.key) === 'true'
    return el.props.useCookie ? !preventByCookie : true
  },
  state: {
    slides: [
      {
        title: 'Enjoy the canvas',
        descr: 'Dive into your interactive canvas. Pan, zoom, and explore freely as you build.',
        src: 'intro.gif',
        docsArticle: '/canvas-and-editor',
      },
      {
        title: 'Realtime experience',
        descr: 'You get a free domain for instant sharing, previews, and seamless cross-device testing.',
        src: 'realtime.gif',
        docsArticle: '/publish',
      },
      {
        title: 'Edit your app',
        descr: 'Double-click to open any element. Right-click for contextual actions. Topbar for navigation.',
        src: 'editor.gif',
        docsArticle: '/building-in-symbols',
      },
    ],
    activeIndex: 0,
    key: 'codeTour',
  },
  Flex: {
    childExtends: 'TutorialPillsNotification',
    childrenAs: 'state',
    children: (el, s) => s.slides,
    childProps: {
      widthRange: '100%',
    },
    transition: 'C1 defaultBezier transform',
    onBeforeUpdate: (_, el, s) => {
      el.props.transform = `translate3d(-${s.activeIndex * 100}%, 0, 1px)`
    },
  },
  NavigationDots: {},
  TutorialNotificationButtons: {
    children: () => [{
        hide: (el, s) => s.activeIndex === 0,
        icon: 'arrow left',
        text: 'Previous',
        onClick: (ev, el, s) => {
          s.apply(_ => s.activeIndex--)
        }
      },
      {
        icon: 'sf question oval',
        text: 'Learn more',
        onClick: (ev, el, s) => {
          const activeItem = s.slides[s.activeIndex]
          el.setWindow('docs', activeItem.docsArticle)
        }
      },
      {
        flow: 'row-reverse',
        isLast: (el, s) => el.key == s.activeIndex,
        icon: el => el.props.isLast ? 'checkmark' : 'arrow right',
        text: el => el.props.isLast ? 'Okay' : 'Next',
        onClick: (ev, el, s) => {
          const activeItem = s.slides[s.activeIndex]
          if (activeItem.callback) el.call('exec', activeItem.callback)
          const isLast = el.props.isLast
          if (!isLast) {
            s.apply(_ => s.activeIndex++)
            return
          }
          el.lookup(el => el.props.rootSlider).remove()
          el.call('setCookie', 'tutorialMarked_' + s.key, true)
        }
      },
    ],
  },
  extend: 'Flex',
  props: {
    position: 'relative',
    overflow: 'hidden',
    flow: 'y',
    gap: 'X',
    width: 'H2',
    theme: 'canvas-card-glass',
    rootSlider: true,
  },
};