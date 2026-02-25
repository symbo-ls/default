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
      Title: { extends: 'H2', text: 'Badges & Notifications', margin: '0' },
      Sub: { extends: 'Caption', text: '5 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    BadgeCard: card('Badge', {
      BadgeWarning: { extends: 'Badge', text: 'Warning', theme: 'warning' },
      BadgePrimary: { extends: 'Badge', text: 'New', theme: 'primary' },
      BadgeSuccess: { extends: 'Badge', text: 'Done', theme: 'success' }
    }),

    BadgeCaptionCard: card('BadgeCaption', {
      BadgeCaption: {
        Caption: { text: 'Status' },
        Badge: { text: 'Active', theme: 'success' }
      }
    }),

    BadgeParagraphCard: card('BadgeParagraph', {
      BadgeParagraph: {
        P: { text: 'Hey team, finished the review.' },
        Badge: { text: 'Unread', theme: 'primary' }
      }
    }),

    NotificationCounterCard: card('NotificationCounter', {
      N1: { extends: 'NotificationCounter', text: '3', theme: 'primary' },
      N2: { extends: 'NotificationCounter', text: '12', theme: 'warning' },
      N3: { extends: 'NotificationCounter', text: '99', theme: 'success' }
    }),

    NotCounterParagraphCard: card('NotCounterParagraph', {
      NotCounterParagraph: {
        P: { text: 'New messages arrived' },
        NotificationCounter: { text: '7' }
      }
    })
  }
}
