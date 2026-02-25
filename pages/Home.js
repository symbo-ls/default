export default {
  extends: 'Flex',
  theme: 'document',
  flow: 'column',
  minHeight: '100vh',
  width: '100%',

  Header: {
    extends: 'Flex',
    flow: 'row',
    align: 'center flex-start',
    gap: 'A',
    padding: 'A B2',
    theme: 'dialog',
    width: '100%',
    borderBottom: '1px solid',
    borderColor: 'gray 0',

    Logo: {
      extends: 'Flex',
      align: 'center center',
      Icon: {
        extends: 'Icon',
        name: 'symbols',
        fontSize: 'C'
      }
    },

    Title: {
      extends: 'H4',
      text: 'Symbols Components',
      margin: '0'
    }
  },

  Hero: {
    extends: 'Flex',
    flow: 'column',
    align: 'center center',
    gap: 'A',
    padding: 'C2 B2 B2',

    Heading: {
      extends: 'H1',
      text: 'Component Library',
      textAlign: 'center',
      margin: '0'
    },

    Subtitle: {
      extends: 'P',
      text: '110 components across 12 categories',
      textAlign: 'center',
      opacity: '0.65',
      margin: '0'
    }
  },

  CategoryGrid: {
    extends: 'Grid',
    columns: 'repeat(4, 1fr)',
    gap: 'A',
    padding: 'A B2 C2',
    width: '100%',
    boxSizing: 'border-box',

    '@tablet': {
      columns: 'repeat(2, 1fr)'
    },

    '@mobile': {
      columns: '1fr'
    },

    TypographyCard: {
      extends: 'Link',
      href: '/typography',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'x',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Typography',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '14 components',
        opacity: '0.6'
      }
    },

    ButtonsCard: {
      extends: 'Link',
      href: '/buttons',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'plus',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Buttons',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '13 components',
        opacity: '0.6'
      }
    },

    AvatarCard: {
      extends: 'Link',
      href: '/avatars',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'smile',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Avatar',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '13 components',
        opacity: '0.6'
      }
    },

    BadgesCard: {
      extends: 'Link',
      href: '/badges',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'star',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Badges',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '5 components',
        opacity: '0.6'
      }
    },

    FormsCard: {
      extends: 'Link',
      href: '/forms',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'search',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Forms',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '15 components',
        opacity: '0.6'
      }
    },

    CompositionCard: {
      extends: 'Link',
      href: '/composition',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'copy',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Composition',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '12 components',
        opacity: '0.6'
      }
    },

    SelectionCard: {
      extends: 'Link',
      href: '/selection',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'check',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Selection',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '17 components',
        opacity: '0.6'
      }
    },

    ProgressCard: {
      extends: 'Link',
      href: '/progress',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'arrowUp',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Progress',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '7 components',
        opacity: '0.6'
      }
    },

    NavigationCard: {
      extends: 'Link',
      href: '/navigation',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'arrowRight',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Navigation',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '10 components',
        opacity: '0.6'
      }
    },

    OverlaysCard: {
      extends: 'Link',
      href: '/overlays',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'eye',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Overlays',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '3 components',
        opacity: '0.6'
      }
    },

    DataDisplayCard: {
      extends: 'Link',
      href: '/data',
      theme: 'dialog',
      round: 'A',
      padding: 'A',
      cursor: 'pointer',
      flow: 'column',
      gap: 'Z2',
      textDecoration: 'none',

      ':hover': {
        opacity: '0.85'
      },

      CardIcon: {
        extends: 'Icon',
        name: 'info',
        fontSize: 'B2'
      },

      CardName: {
        extends: 'H4',
        text: 'Data Display',
        margin: '0'
      },

      CardCount: {
        extends: 'Caption',
        text: '9 components',
        opacity: '0.6'
      }
    }
  }
}
