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
      Title: { extends: 'H2', text: 'Navigation & Links', margin: '0' },
      Sub: { extends: 'Caption', text: '10 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    LinkCard: card('Link', {
      Link: { text: 'Read the docs', href: '#' }
    }),

    LinkSetCard: card('LinkSet', {
      LinkSet: {
        tag: 'nav',
        childExtends: 'Link',
        ...[
          { text: 'Home', href: '#' },
          { text: 'Docs', href: '#' },
          { text: 'Blog', href: '#' }
        ]
      }
    }),

    LinkHgroupCard: card('LinkHgroup', {
      LinkHgroup: {
        Hgroup: {
          H: { tag: 'h6', text: 'Tbilisi' },
          P: { text: 'Georgia' }
        },
        Link: { text: 'Get directions', href: '#' }
      }
    }),

    LinkParagraphCard: card('LinkParagraph', {
      LinkParagraph: {
        P: { text: 'By continuing you agree to our' },
        Link: { text: 'Privacy Policy', href: '#', textDecoration: 'underline' }
      }
    }),

    BreadcrumbCard: card('Breadcrumb', {
      Breadcrumb: {
        tag: 'nav',
        childExtends: 'Link',
        ...[
          { text: 'Home', href: '/' },
          { text: 'Components', href: '#' }
        ]
      }
    }),

    NavigationDotsCard: card('NavigationDots', {
      NavigationDots: {
        childExtends: 'Link',
        ...[{}, { isActive: true }, {}, {}]
      }
    }),

    NavigationArrowsCard: card('NavigationArrows', {
      NavigationArrows: {
        childExtends: 'IconButton',
        ...[
          { Icon: { name: 'chevronLeft' } },
          { Icon: { name: 'chevronRight' } }
        ]
      }
    }),

    PaginationCard: card('Pagination', {
      Pagination: {}
    }),

    TabSetCard: card('TabSet', {
      TabSet: {}
    }),

    ScrollableListCard: card('ScrollableList', {
      ScrollableList: {
        Flex: {
          maxHeight: 'D',
          childExtends: 'Button',
          ...[
            { text: 'Item One' },
            { text: 'Item Two' },
            { text: 'Item Three' }
          ]
        }
      }
    })
  }
}
