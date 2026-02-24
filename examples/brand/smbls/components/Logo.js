export const Logo = {
  extends: [
    'SquareButton',
  ],
  icon: 'logov2',
  boxSize: '1.25em',
  aspectRatio: '1 / 1',
  transition: 'B defaultBezier',
  transitionProperty: 'background, color',
  background: 'transparent 0',
  margin: 'U',
  padding: 'X',
  round: '100%',
  color: 'title',
  zIndex: 9999999,
  position: 'fixed',
  top: 'X2',
  left: 'Y',
  ':focus-within': {
    zIndex: 9990100,
  },
  '@dark': {
    color: 'white',
  },
  '@light': {
    color: 'black',
  },
  ':hover': {
    '@dark': {
      color: 'gray15',
      background: 'gray3',
    },
    '@light': {
      color: 'black',
      background: 'white',
    },
  },
  '.isActive': {
    '@dark': {
      color: 'gray15',
      background: 'gray3',
    },
    '@light': {
      color: 'black',
      background: 'white',
    },
  },
  onClick: (ev, el) => {
    ev.preventDefault()

    if (el.isEmbed()) {
      return
    }

    if (el.isDocs()) {
      document.activeElement?.blur()
      return el.router('/developers', el.getRoot())
    }

    if (!el.isDashboard()) {
      document.activeElement?.blur()
      return el.router('/', el.getRoot())
    }
  },
  Link: {
    if: el => el.isEmbed(),
    position: 'absolute',
    inset: '0',
    zIndex: 9,
    href: `'https://symbols.app' + window.location.pathname.split('/embed')[1]`,
    target: '_blank',
  },
  Icon: {
    fontSize: '1.26em',
  },
  Span: {
    animation: 'slideInOut',
    animationDelay: 'B',
    animationDuration: 'K',
    animationTimingFunction: 'defaultBezier',
    position: 'absolute',
    top: '50%',
    left: '95%',
    color: 'orange',
    fontWeight: '500',
    fontSize: 'X',
    text: 'BETA',
    transform: 'translate3d(0, 50%, 0)',
    opacity: '0',
  },
};