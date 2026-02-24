export const signupConfirmation = {
  flow: 'y',
  align: 'center',
  height: '100%',
  margin: 'auto',
  onInit: async (el, s) => {
    await el.call('confirmEmail')
  },
  state: {
    loading: true,
    success: false,
    error: null,
  },
  ConfirmationWindow: {
    boxSize: 'auto I1',
    animation: 'modalIn',
    animationDuration: 'E',
    boxSizing: 'border-box',
    Flex: {
      flow: 'column',
      align: 'center',
      gap: 'C1',
      padding: 'C1',
      '@mobileL': {
        padding: 'B',
      },
      LoadingState: {
        if: ({
          state
        }) => state.loading,
        flow: 'column',
        align: 'center',
        gap: 'B',
        Spinner: {
          size: 'D',
        },
        Text: {
          text: 'Confirming your email...',
          fontSize: 'B',
          color: 'paragraph',
        },
      },
      EmailConfirmationSuccess: {
        if: ({
          state
        }) => !state.loading && state.success,
      },
      EmailConfirmationError: {
        if: ({
          state
        }) => !state.loading && !state.success,
      },
    },
  },
};