export const TutorialBanner = {
  extends: [
    'Link',
    'ArticleMedium',
    'Hoverable',
    {
      props: (el, s) => ({
        ':before': {
          theme: s.theme,
          backgroundImage: `url(${s.background})`
        }
      })
    }
  ],
  flow: 'column',
  round: 'A',
  height: 'E2',
  padding: 'A A2',
  href: '{{ href }}',
  gap: '0',
  overflow: 'hidden',
  position: 'relative',
  flex: 1,
  transitionProperty: 'transform, opacity, padding, color, background',
  scrollToTop: false,
  maxWidth: 'H',
  theme: 'common-card-interactive',
  style: {
    userSelect: 'none',
    'h2, p': {
      zIndex: 2
    }
  },
  ':after, &:before': {
    content: '""',
    position: 'absolute',
    zIndex: 0,
    inset: '-5px -5px -5px -5px'
  },
  ':before': {
    transition: 'B defaultBezier, A defaultBezier, A defaultBezier',
    transitionProperty: 'opacity, color, background',
    backgroundSize: 'cover',
    '@dark': {
      opacity: '0.5'
    },
    '@light': {
      opacity: '1'
    }
  },
  '.withShadow': {
    ':after': {
      transition: 'B defaultBezier, A defaultBezier, A defaultBezier',
      transitionProperty: 'opacity, color, background',
      background: 'shadow-overlay',
      '@dark': {
        opacity: '0.69'
      },
      '@light': {
        display: 'none'
      }
    }
  },
  ':hover': {
    padding: '- C1 - -',
    ':before': {
      opacity: '1'
    },
    ':after': {
      opacity: '1'
    }
  },
  Icon: {
    opacity: '0.5',
    fontSize: 'A2',
    margin: 'X - - -',
    name: 'play outline'
  },
  Title: {
    margin: 'auto 0 0',
    text: '{{ title }}'
  },
  P: {
    text: '{{ p }}'
  }
}
