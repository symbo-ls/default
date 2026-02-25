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
    minHeight: 'C2',
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
      Title: { extends: 'H2', text: 'Overlays & Disclosure', margin: '0' },
      Sub: { extends: 'Caption', text: '3 components', opacity: '0.5' }
    }
  },

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    ModalCard: card('Modal', {
      Modal: {
        Hgroup: {
          H: { tag: 'h5', text: 'Confirm action' },
          P: { text: 'This cannot be undone.' }
        },
        IconButton: { Icon: { name: 'x' } }
      }
    }),

    MessageModalCard: card('MessageModal', {
      MessageModal: {
        Hgroup: {
          H: { text: 'Account updated' },
          P: { text: 'Your changes have been saved successfully.' }
        }
      }
    }),

    AccordionCard: card('Accordion', {
      Accordion: {
        ButtonParagraph: {
          P: { text: 'How does billing work?' },
          Button: { text: '' }
        },
        P: { text: 'You are billed monthly based on your plan.' }
      }
    })
  }
}
