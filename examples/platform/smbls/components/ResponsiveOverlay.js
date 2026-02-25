export const ResponsiveOverlay = {
  extends: 'Flex',
  hide: el => {
    const isAuthorised = el.isAuthorised
    const isTesting = location.host.includes('localhost')
    const isCanvas = location.pathname.includes('srcdoc')
    const isEmbed = el.isEmbed()

    return isEmbed || isCanvas || isTesting || !isAuthorised
  },
  display: 'none',
  align: 'center space-between',
  flow: 'column',
  position: 'fixed',
  inset: '0 0 0 0',
  boxSize: '100%',
  padding: 'C',
  backdropFilter: 'blur(3px)',
  zIndex: '999999',
  gap: 'A',
  '@tabletL': {
    display: 'flex'
  },
  '@dark': {
    background: 'black .9'
  },
  '@light': {
    background: 'gray15 .95'
  },
  Link: {
    extends: 'SquareButton',
    theme: 'quaternary',
    color: 'title',
    icon: 'logo',
    href: 'https://symbols.app'
  },
  IconText: {
    icon: 'deviceTabletLandscapeHalf fill',
    lineHeight: '1.4',
    gap: 'Z',
    text: 'Small view is temporarily disabled, please check from larger screens',
    '@mobileM': {
      flow: 'column',
      textAlign: 'center'
    }
  },
  Button: {
    theme: 'quaternary',
    round: 'B',
    padding: 'Z2 A2',
    text: 'Open anyway',
    onClick: (ev, el) => el.parent.remove()
  }
}
