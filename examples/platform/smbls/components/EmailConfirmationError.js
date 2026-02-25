export const EmailConfirmationError = {
  flow: 'y',
  align: 'center',
  gap: 'B',
  Icon: {
    name: 'exclMark',
    size: 'A',
    color: 'red'
  },
  H3: {
    text: 'Confirmation Failed',
    margin: '0'
  },
  P: {
    text: (el, s) => s.error || 'Unable to confirm your email. Please try again or contact support.',
    textAlign: 'center',
    color: 'paragraph',
    maxWidth: 'G'
  },
  TryAgainButton: {
    extends: [
      'Button',
      'ClickableItem'
    ],
    text: 'Try Again',
    margin: 'B 0 0',
    width: '100%',
    onClick: async (_, el, s) => {
      s.update({
        loading: true
      })
      await el.call('confirmEmail')
    }
  }
}
