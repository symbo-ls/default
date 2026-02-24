'use strict'

const PageHeader = (title, count) => ({
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
    Title: { extends: 'H2', text: title, margin: '0' },
    Sub: { extends: 'Caption', text: count, opacity: '0.5' }
  }
})

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

  PageHeader: PageHeader('Buttons', '13 components'),

  ComponentGrid: {
    extends: 'Grid',
    columns: 'repeat(3, 1fr)',
    gap: 'A',
    '@tabletSm': { columns: 'repeat(2, 1fr)' },
    '@mobileL': { columns: '1fr' },

    IconButtonCard: card('IconButton', { IconButton: {} }),
    CounterButtonCard: card('CounterButton', { CounterButton: {} }),
    CounterIconButtonCard: card('CounterIconButton', { CounterIconButton: {} }),
    IconCounterButtonCard: card('IconCounterButton', { IconCounterButton: {} }),
    UploadButtonCard: card('UploadButton', { UploadButton: {} }),
    UploadIconButtonCard: card('UploadIconButton', { UploadIconButton: {} }),
    SubmitButtonCard: card('SubmitButton', { SubmitButton: {} }),
    ButtonSetCard: card('ButtonSet', { ButtonSet: {} }),
    ConfirmationButtonsCard: card('ConfirmationButtons', { ConfirmationButtons: {} }),
    ImgButtonCard: card('ImgButton', { ImgButton: {} }),
    ImgHeadingButtonCard: card('ImgHeadingButton', { ImgHeadingButton: {} }),
    InputButtonCard: card('InputButton', {
      InputButton: {
        flow: 'row',
        gap: 'Z',
        Input: { placeholder: 'your@email.com' },
        Button: { text: 'Sign up' }
      }
    }),
    IconButtonSetCard: card('IconButtonSet', { IconButtonSet: {} })
  }
}
