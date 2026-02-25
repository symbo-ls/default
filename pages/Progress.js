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
      Title: { extends: 'H2', text: 'Progress & Status', margin: '0' },
      Sub: { extends: 'Caption', text: '8 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    ProgressCard: card('Progress', {
      Progress: { value: 0.65 }
    }),

    CircleProgressCard: card('CircleProgress', {
      CircleProgress: { value: 0.73 }
    }),

    ValueProgressCard: card('ValueProgress', {
      ValueProgress: {
        Progress: { value: 0.73 },
        UnitValue: {
          Value: { text: '73' },
          Unit: { text: '%' }
        }
      }
    }),

    ValueCircleProgressCard: card('ValueCircleProgress', {
      ValueCircleProgress: {
        CircleProgress: { value: 0.5 },
        UnitValue: {
          Value: { text: '50' },
          Unit: { text: '%' }
        }
      }
    }),

    ProgressStepSetCard: card('ProgressStepSet', {
      ProgressStepSet: {
        childExtends: 'Progress',
        ...[
          { value: 1 },
          { value: 0.5 },
          { value: 0 }
        ]
      }
    }),

    HgroupStepsCard: card('HgroupSteps', {
      HgroupSteps: {
        Hgroup: {
          H: { tag: 'h5', text: 'Getting started' },
          P: { text: 'Complete these steps' }
        },
        ProgressStepSet: {
          childExtends: 'Progress',
          ...[{ value: 1 }, { value: 0.4 }, { value: 0 }]
        }
      }
    }),

    StatusDotCard: card('StatusDot', {
      Online: { extends: 'StatusDot', theme: 'success' },
      Away: { extends: 'StatusDot', theme: 'warning' },
      Offline: { extends: 'StatusDot', theme: 'warning' }
    }),

    StarsCard: card('Stars', {
      Stars: {}
    })
  }
}
