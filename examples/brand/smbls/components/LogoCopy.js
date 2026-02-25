export const LogoCopy = {
  extends: [
    'Link',
    'SquareButton'
  ],
  icon: 'logo',
  isActive: () => window.location.pathname === '/dashboard',
  fontSize: 'C',
  text: null,
  href: '/',
  position: 'relative',
  color: 'gray13',
  transition: 'B defaultBezier',
  transitionProperty: 'background, color',
  background: 'transparent 0',
  margin: 'W',
  padding: 'Y',
  round: '100%',
  '@dark': {
    color: 'white'
  },
  '@light': {
    color: 'black'
  },
  ':hover': {
    '@dark': {
      color: 'gray15',
      background: 'gray3'
    },
    '@light': {
      color: 'black',
      background: 'white'
    }
  },
  '.isActive': {
    '@dark': {
      color: 'gray15',
      background: 'gray3'
    },
    '@light': {
      color: 'black',
      background: 'white'
    }
  },
  Span: {
    animation: 'slideInOut',
    animationDelay: 'B',
    animationDuration: 'K',
    animationTimingFunction: 'defaultBezier',
    position: 'absolute',
    top: '50%',
    left: '85%',
    color: 'orange',
    fontSize: '.45em',
    fontWeight: '500',
    text: 'BETA',
    transform: 'translate3d(0, 50%, 0)',
    opacity: '0'
  }
}
