export const DomainItem = {
  extend: [
    'Flex'
  ],
  props: {
    gap: 'Z',
    padding: 'Z Z2 Y',
    round: 'Z2'
  },
  Icon: {
    margin: 'V2 - -',
    name: 'network',
    fontSize: 'A1'
  },
  Hgroup: {
    flexFlow: 'y',
    margin: '- B - -',
    gap: 'X',
    H: {
      color: 'title',
      tag: 'span',
      text: 'Custom domain'
    },
    P: {
      margin: '0',
      fontSize: 'Y2',
      fontWeight: '400',
      color: 'paragraph',
      overflow: 'hidden',
      overflowWrap: 'anywhere',
      whiteSpace: 'wrap',
      textOverflow: 'anywhere',
      lineBreak: 'anywhere',
      text: el => 'Connect any domain to your app'
    }
  },
  Buttons: {
    hide: (el) => el.getRootState('tier') === 'starter',
    margin: '-X -X - auto',
    childExtends: 'IconButton',
    childProps: {
      theme: 'transparent',
      padding: 'Y'
    },
    EnvOpen: {
      icon: 'arrow up right',
      color: 'title'
    }
  },
  Upgrade: {
    extends: 'Link',
    color: 'blue',
    text: 'Upgrade',
    margin: '- - - auto',
    alignSelf: 'start',
    whiteSpace: 'nowrap',
    fontSize: 'Z2',
    lineHeight: 1,
    ':hover': {
      textDecoration: 'underline'
    },
    onClick: (f, el, st) => {
      el.call('openModal', '/settings', {
        key: '/pricing'
      })
    },
    hide: (el) => el.getRootState('tier') !== 'starter'
  }
}
