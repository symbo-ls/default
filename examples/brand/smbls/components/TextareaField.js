export const TextareaField = {
  position: 'relative',
  maxWidth: 'G3',
  maxHeight: 'E3',
  boxSize: '100%',
  boxSizing: 'border-box',
  ':after, &:before': {
    content: '""',
    position: 'absolute',
    zIndex: '10',
    boxSize: '30px 100%',
    pointerEvents: 'none',
  },
  ':before': {
    bottom: '-10px',
    left: '50%',
    transform: 'translate3d(-50%, -20%, 0)',
    background: `linear-gradient(
        to top,
        var(--quaternary-dark-background) 0%,
        var(--quaternary-dark-background) 100%
      )`,
  },
  ':after': {
    top: '0',
    left: '0',
    background: `linear-gradient(
        to bottom,
        var(--quaternary-dark-background) 0%,
        var(--quaternary-dark-background) 100%
      )`,
  },
  Textarea: {
    variant: 'simple',
    width: '100%',
    height: '100%',
    theme: 'field',
    padding: 'A B A A1',
    fontFamily: 'smbls',
    round: 'A',
    position: 'relative',
    overflow: 'hidden auto',
    resize: 'none',
    scrollBehavior: 'smooth',
    '@mobileXS': {
      fontSize: 'Z2',
    },
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '.simple': {
      theme: 'field',
    },
  },
};