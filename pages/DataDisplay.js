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
      Title: { extends: 'H2', text: 'Data Display', margin: '0' },
      Sub: { extends: 'Caption', text: '9 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    UnitValueCard: card('UnitValue', {
      Dollar: {
        extends: 'UnitValue',
        Unit: { text: '$' },
        Value: { text: '99.00' }
      },
      Percent: {
        extends: 'UnitValue',
        Unit: { text: '%' },
        Value: { text: '73' }
      }
    }),

    BulletCaptionCard: card('BulletCaption', {
      BulletCaption: { text: 'Orders history' }
    }),

    HrCard: card('Hr', {
      Hr: { minWidth: 'F' }
    }),

    HrLegendCard: card('HrLegend', {
      HrLegend: { text: 'Or' }
    }),

    StarsCard: card('Stars', {
      Stars: {}
    }),

    LoadingGifCard: card('LoadingGif', {
      LoadingGif: { opacity: '0.5' }
    }),

    UserNavbarCard: card('UserNavbar', {
      UserNavbar: {}
    }),

    LayerSimpleCard: card('LayerSimple', {
      LayerSimple: {
        Title: { text: 'Today' },
        Flex: {
          childExtends: 'Flex',
          ...[
            { Icon: { name: 'check' }, Span: { text: 'Morning standup' } },
            { Icon: { name: 'check' }, Span: { text: 'Design review' } }
          ]
        }
      }
    }),

    SectionHeaderCard: card('SectionHeader', {
      SectionHeader: {
        Hgroup: {
          H: { text: 'Recent activity' }
        },
        IconButtonSet: {
          childExtends: 'IconButton',
          ...[
            { Icon: { name: 'moreHorizontal' } }
          ]
        }
      }
    })
  }
}
