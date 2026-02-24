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
      Title: { extends: 'H2', text: 'Selection', margin: '0' },
      Sub: { extends: 'Caption', text: '17 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    CheckCaptionCard: card('CheckCaption', {
      CheckCaption: { Caption: { text: 'Accept terms' } }
    }),

    CheckCaptionListCard: card('CheckCaptionList', {
      CheckCaptionList: {
        childExtends: 'CheckCaption',
        ...[
          { Caption: { text: 'Option A' } },
          { Caption: { text: 'Option B' } }
        ]
      }
    }),

    CheckHgroupCard: card('CheckHgroup', {
      CheckHgroup: {
        Hgroup: {
          H: { tag: 'h6', text: 'Weekly digest' },
          P: { text: 'Every Monday' }
        }
      }
    }),

    CheckHgroupListCard: card('CheckHgroupList', {
      CheckHgroupList: {
        childExtends: 'CheckHgroup',
        ...[
          { Hgroup: { H: { tag: 'h6', text: 'Email alerts' } } },
          { Hgroup: { H: { tag: 'h6', text: 'Push alerts' } } }
        ]
      }
    }),

    CheckStepCard: card('CheckStep', {
      CheckStep: {
        H6: { text: 'Verify email' },
        Progress: { value: 1 }
      }
    }),

    CheckStepSetCard: card('CheckStepSet', {
      CheckStepSet: {
        childExtends: 'CheckStep',
        ...[
          { H6: { text: 'Account info' }, Progress: { value: 1 } },
          { H6: { text: 'Payment' }, Progress: { value: 0 } }
        ]
      }
    }),

    RadioMarkCard: card('RadioMark', {
      R1: { extends: 'RadioMark', theme: 'field' },
      R2: { extends: 'RadioMark', theme: 'primary' }
    }),

    RadioCaptionCard: card('RadioCaption', {
      RadioCaption: { Caption: { text: 'Option A' } }
    }),

    RadioCaptionListCard: card('RadioCaptionList', {
      RadioCaptionList: {
        childExtends: 'RadioCaption',
        ...[
          { Caption: { text: 'Option A' } },
          { Caption: { text: 'Option B' } }
        ]
      }
    }),

    RadioHgroupCard: card('RadioHgroup', {
      RadioHgroup: {
        Hgroup: {
          H: { tag: 'h6', text: 'Standard' },
          P: { text: 'Free delivery' }
        }
      }
    }),

    RadioHgroupListCard: card('RadioHgroupList', {
      RadioHgroupList: {
        childExtends: 'RadioHgroup',
        ...[
          { Hgroup: { H: { tag: 'h6', text: 'Standard' } } },
          { Hgroup: { H: { tag: 'h6', text: 'Express' } } }
        ]
      }
    }),

    RadioStepCard: card('RadioStep', {
      RadioStep: {
        H6: { text: 'Account info' },
        Progress: { value: 0 }
      }
    }),

    RadioStepsCard: card('RadioSteps', {
      RadioSteps: {
        childExtends: 'RadioStep',
        ...[
          { H6: { text: 'Account' } },
          { H6: { text: 'Payment' } }
        ]
      }
    }),

    ToggleCaptionCard: card('ToggleCaption', {
      ToggleCaption: { Caption: { text: 'Notifications' } }
    }),

    ToggleCaptionListCard: card('ToggleCaptionList', {
      ToggleCaptionList: {
        childExtends: 'ToggleCaption',
        ...[
          { Caption: { text: 'Email' } },
          { Caption: { text: 'SMS' } }
        ]
      }
    }),

    ToggleHgroupCard: card('ToggleHgroup', {
      ToggleHgroup: {
        Hgroup: {
          H: { tag: 'h6', text: 'Dark mode' },
          P: { text: 'Switch theme' }
        }
      }
    }),

    ToggleHgroupListCard: card('ToggleHgroupList', {
      ToggleHgroupList: {
        childExtends: 'ToggleHgroup',
        ...[
          { Hgroup: { H: { tag: 'h6', text: 'Dark mode' } } },
          { Hgroup: { H: { tag: 'h6', text: 'Auto-save' } } }
        ]
      }
    })
  }
}
