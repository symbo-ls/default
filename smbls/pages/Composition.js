'use strict'

const card = (label, children) => ({
  extends: 'Flex',
  theme: 'dialog',
  round: 'A',
  padding: 'A',
  flow: 'column',
  gap: 'Z',
  overflow: 'hidden',

  Label: {
    extends: 'Caption',
    text: label,
    opacity: '0.5',
    fontFamily: 'monospace',
    letterSpacing: '0.05em'
  },

  Preview: {
    extends: 'Flex',
    align: 'center center',
    padding: 'A',
    minHeight: 'C',
    ...children
  }
})

export default {
  extends: 'Flex',
  theme: 'document',
  flow: 'column',
  minHeight: '100dvh',
  padding: 'A B2 C2',
  boxSizing: 'border-box',
  gap: 'A',

  PageHeader: {
    extends: 'Flex',
    align: 'center flex-start',
    gap: 'A',
    marginBottom: 'A',
    BackLink: {
      extends: 'Link',
      href: '/',
      textDecoration: 'none',
      align: 'center center',
      gap: 'Z',
      BackIcon: { extends: 'Icon', name: 'arrowLeft', fontSize: 'A2' },
      BackLabel: { extends: 'Caption', text: 'Library' }
    },
    Info: {
      extends: 'Flex',
      flow: 'column',
      gap: 'W2',
      Title: { extends: 'H2', text: 'Composition', margin: '0' },
      Sub: { extends: 'Caption', text: '12 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    ButtonHeadingCard: card('ButtonHeading', {
      ButtonHeading: {
        H: { tag: 'h5', text: 'Team members' },
        Button: { text: 'Invite', theme: 'primary' }
      }
    }),

    ButtonHgroupCard: card('ButtonHgroup', {
      ButtonHgroup: {
        Hgroup: {
          H: { tag: 'h6', text: 'Upgrade plan' },
          P: { text: 'Get all features' }
        },
        Button: { text: 'Upgrade' }
      }
    }),

    ButtonParagraphCard: card('ButtonParagraph', {
      ButtonParagraph: {
        P: { text: "Didn't receive the code?" },
        Button: { text: 'Resend' }
      }
    }),

    IconHeadingCard: card('IconHeading', {
      IconHeading: {
        Icon: { name: 'star', fontSize: 'C' },
        H: { tag: 'h5', text: 'Featured' }
      }
    }),

    IconButtonHeadingCard: card('IconButtonHeading', {
      IconButtonHeading: {
        H: { tag: 'h5', text: 'Settings' },
        IconButton: { Icon: { name: 'moreHorizontal' } }
      }
    }),

    IconButtonHgroupCard: card('IconButtonHgroup', {
      IconButtonHgroup: {
        Hgroup: {
          H: { text: 'Notifications' },
          P: { text: 'Manage preferences' }
        },
        IconButton: { Icon: { name: 'moreHorizontal' } }
      }
    }),

    IconHgroupCard: card('IconHgroup', {
      IconHgroup: {
        Icon: { name: 'logo', display: 'block' },
        Hgroup: {
          H: { text: 'Symbols' },
          P: { text: 'Design system toolkit' }
        }
      }
    }),

    ImgHeadingCard: card('ImgHeading', {
      ImgHeading: {
        Img: { src: 'https://via.placeholder.com/64', maxWidth: 'C' },
        H: { tag: 'h5', text: 'Product' }
      }
    }),

    ImgHgroupCard: card('ImgHgroup', {
      ImgHgroup: {
        Img: { src: 'https://via.placeholder.com/48', boxSize: 'C' },
        Hgroup: {
          H: { text: 'Product name' },
          P: { text: 'A short tagline' }
        }
      }
    }),

    ValueHeadingCard: card('ValueHeading', {
      ValueHeading: {
        H: { tag: 'h6', text: 'Revenue' },
        UnitValue: {
          Unit: { text: '$' },
          Value: { text: '1,200' }
        }
      }
    }),

    IcontextLinkCard: card('IcontextLink', {
      IcontextLink: {
        Icon: { name: 'logo', fontSize: 'B' },
        text: 'Follow Symbols'
      }
    }),

    IconTextSetCard: card('IconTextSet', {
      IconTextSet: {
        childExtends: 'Flex',
        ...[
          { Icon: { name: 'smile' }, text: '+1 (555) 123-4567' },
          { Icon: { name: 'send' }, text: 'hello@example.com' }
        ]
      }
    })
  }
}
