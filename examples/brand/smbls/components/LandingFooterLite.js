export const LandingFooterLite = {
  width: '100%',
  padding: 'A B2',
  gap: 'A',
  align: 'center space-between',
  '@mobileL': {
    flow: 'column'
  },
  Flex_nav: {
    gap: 'B',
    childProps: {
      color: 'gray8',
      fontWeight: 'normal',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    Link_access: {
      href: '/signin',
      text: 'Access'
    },
    Link_privacy: {
      href: '/privacy',
      text: 'Privacy'
    },
    Link: {
      href: 'mailto:hello@symbo.ls',
      text: 'Contact'
    }
  },
  Span_copyright: {
    flex: 1,
    textAlign: 'center',
    color: 'gray6',
    text: '2020-2025 © Symbols.app',
    '@mobileL': {
      order: 3
    }
  },
  Flex_icons: {
    gap: 'Z2',
    childProps: {
      color: 'gray8',
      theme: null,
      background: 'transparent',
      target: '_blank',
      fontSize: 'A2',
      ':hover': {
        color: 'gray8'
      }
    },
    childExtends: [
      'Link',
      'IconButton'
    ],
    children: [
      {
        icon: 'medium',
        href: 'https://symbols.blog/'
      },
      {
        icon: 'discord',
        href: 'https://discord.com/invite/crdFSkapFY'
      },
      {
        icon: 'github',
        href: 'https://github.com/symbo-ls/'
      }
    ],
    childrenAs: 'props'
  }
}
