export const FooterFull = {
  flow: 'y',
  align: 'flex-start flex-start',
  width: '100%',
  padding: '- B2',
  gap: 'C',
  borderStyle: 'solid',
  borderColor: 'line',
  borderWidth: '1px 0 0 0',
  '@mobileL': {
    padding: '- A'
  },
  childProps: {
    minWidth: '100%',
    maxWidth: '100%'
  },
  Flex: {
    align: 'flex-start flex-start',
    padding: 'B1 A - Y',
    '@tabletS': {
      flow: 'y',
      gap: 'B2'
    },
    LinkSet: {
      extends: 'Flex',
      flow: 'y',
      gap: 'C',
      align: 'flex-start flex-start',
      flex: '1',
      '@tabletS': {
        flow: 'x',
        align: 'center space-between',
        minWidth: '100%',
        maxWidth: '100%'
      },
      '@mobileL': {
        gap: 'B',
        flexWrap: 'wrap'
      },
      '@mobileM': {
        align: 'center flex-start'
      },
      childExtends: [
        'DocsLink',
        'IconText'
      ],
      childProps: {
        gap: 'X2',
        color: 'title',
        Icon: {
          name: 'arrowUpRight'
        }
      },
      children: [
        {
          text: 'Get started',
          href: '/signup'
        },
        {
          text: 'Go to dashboard',
          href: '/signin'
        },
        {
          text: 'Schedule a demo',
          href: 'https://cal.com/symbols-josh/early-access',
          target: '_blank'
        }
      ]
    },
    Product: {
      extends: 'Flex',
      flow: 'y',
      align: 'flex-start flex-start',
      gap: 'A1',
      flex: '1',
      '@tabletS': {
        gap: 'Z',
        padding: 'A1 - - -'
      },
      Caption: {
        text: 'Product',
        fontWeight: '700',
        lineHeight: '1em',
        color: 'title'
      },
      Flex: {
        flow: 'y',
        align: 'flex-start flex-start',
        gap: 'A1',
        '@tabletS': {
          flow: 'x',
          flexWrap: 'wrap'
        },
        childProps: {
          cursor: 'pointer',
          fontWeight: '300',
          color: 'caption'
        },
        childExtends: 'DocsLink',
        children: [
          {
            text: 'Explore (TBA)',
            href: '/explore'
          },
          {
            text: 'Library (TBA)',
            href: '/library'
          },
          {
            text: 'Experts (TBA)',
            href: '/experts'
          },
          {
            text: 'Pricing',
            href: '/pricing'
          }
        ]
      }
    },
    Developers: {
      extends: 'Flex',
      flex: '1',
      flow: 'y',
      align: 'flex-start flex-start',
      gap: 'A1',
      '@tabletS': {
        gap: 'Z',
        padding: '- - A1 -'
      },
      Caption: {
        text: 'Developers',
        fontWeight: '700',
        lineHeight: '1em',
        color: 'title'
      },
      Flex: {
        flow: 'y',
        align: 'flex-start flex-start',
        gap: 'A1',
        '@tabletS': {
          flow: 'x',
          flexWrap: 'wrap'
        },
        '@mobileM': {
          gap: '0'
        },
        childProps: {
          cursor: 'pointer',
          fontWeight: '300',
          color: 'caption',
          '@mobileM': {
            padding: '- A1 X2 -'
          }
        },
        childExtends: 'DocsLink',
        children: [
          {
            text: 'Onboarding',
            href: '/docs/intro'
          },
          {
            text: 'Building in Symbols',
            href: '/docs/building-in-symbols'
          },
          {
            text: 'Framework',
            href: '/docs/framework'
          },
          {
            text: 'SDK',
            href: '/docs/sdk'
          },
          {
            text: 'CLI',
            href: '/docs/cli'
          }
        ]
      }
    },
    Resources: {
      extends: 'Flex',
      flow: 'y',
      align: 'flex-start flex-start',
      gap: 'A1',
      flex: '1',
      '@tabletS': {
        gap: 'Z',
        padding: 'A1 - - -'
      },
      Caption: {
        text: 'Resources',
        fontWeight: '700',
        lineHeight: '1em',
        color: 'title'
      },
      Flex: {
        flow: 'y',
        align: 'flex-start flex-start',
        gap: 'A1',
        '@tabletS': {
          flow: 'x',
          flexWrap: 'wrap'
        },
        childProps: {
          cursor: 'pointer',
          fontWeight: '300',
          color: 'caption'
        },
        childExtends: 'DocsLink',
        children: [
          {
            text: 'Investors',
            target: '_blank',
            href: 'https://invest.symbo.ls'
          },
          {
            text: 'Blog',
            target: '_blank',
            href: 'https://medium.com/symbolsapp'
          },
          {
            text: 'Contact',
            target: '_blank',
            href: 'https://cal.com/symbols-josh/early-access'
          }
        ]
      }
    },
    Companies: {
      extends: 'Flex',
      flex: '1',
      align: 'center flex-end',
      gap: 'A',
      '@mobileS': {
        minWidth: '100%',
        maxWidth: '100%',
        align: 'center space-between'
      },
      childProps: {
        target: '_blank'
      },
      childExtends: [
        'Link',
        'IconButton'
      ],
      children: [
        {
          icon: 'twitter',
          href: 'https://x.com/symbo_ls'
        },
        {
          icon: 'medium',
          href: 'https://medium.com/symbolsapp'
        },
        {
          icon: 'github',
          href: 'https://github.com/symbo-ls/'
        },
        {
          icon: 'discord',
          href: 'https://discord.com/invite/crdFSkapFY'
        },
        {
          icon: 'npm',
          href: 'https://www.npmjs.com/package/smbls'
        }
      ]
    }
  },
  Flex_2: {
    align: 'center flex-start',
    padding: '- Y',
    '@mobileM': {
      display: 'grid',
      style: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      rowGap: 'A'
    },
    childProps: {
      fontWeight: '300',
      color: 'caption'
    },
    DocsLink: {
      text: 'Terms and conditions',
      margin: '- D - -',
      cursor: 'pointer',
      href: '/terms',
      '@mobileM': {
        margin: '- 0 - -',
        whiteSpace: 'nowrap'
      }
    },
    DocsLink_2: {
      text: 'Privacy terms',
      cursor: 'pointer',
      href: '/privacy',
      '@mobileM': {
        whiteSpace: 'nowrap',
        textAlign: 'right'
      }
    },
    P: {
      text: 'Symbols © 2020-2025',
      margin: '- - - auto',
      '@mobileM': {
        gridColumn: 'span 2',
        textAlign: 'left',
        margin: '- - - 0'
      }
    }
  }
}
