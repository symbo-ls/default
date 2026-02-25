export const RequestAccessButtons = {
  flow: 'y',
  align: 'start start',
  borderColor: 'line',
  borderStyle: 'solid',
  borderWidth: '0 0 0 1px',
  margin: '0',
  '@mobileL': {
    borderColor: 'transparent',
    borderStyle: 'unset',
    borderWidth: '0',
    padding: 'C1 0 0',
    justifyContent: 'flex-start'
  },
  childProps: {
    width: '100%'
  },
  Hgroup: {
    H: {
      tag: 'strong',
      text: 'Get early access'
    },
    P: {
      text: 'We\'re kicking off invite-only. Get early signup to make it to the top.'
    }
  },
  Flex: {
    flow: 'y',
    gap: 'A2',
    '@mobileL': {
      gap: 'A'
    },
    Link: {
      extends: [
        'Link',
        'Button'
      ],
      icon: 'email',
      margin: '0 0 0 -X',
      theme: 'quaternary',
      fontWeight: '500',
      text: 'Continue with email',
      href: '/signin',
      gap: 'Z',
      '@tabletS': {
        padding: '- - - C'
      },
      '@mobileL': {
        align: 'center center',
        maxWidth: '100%',
        textAlign: 'center',
        border: 'none'
      }
    }
  }
}
