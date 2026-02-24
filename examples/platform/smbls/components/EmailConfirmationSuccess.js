export const EmailConfirmationSuccess = {
  flow: 'y',
  align: 'center',
  gap: 'B',
  Icon: {
    name: 'checkmark circle',
    color: 'green',
    size: 'A',
  },
  H3: {
    text: 'Email Confirmed!',
    margin: '0',
  },
  P: {
    text: 'Your email has been successfully confirmed. You can now sign in to your account.',
    textAlign: 'center',
    color: 'paragraph',
    maxWidth: 'G',
  },
  SigninButton: {
    extends: [
      'Button',
      'ClickableItem',
    ],
    text: 'Go to Sign In',
    margin: 'B 0 0',
    width: '100%',
    onClick: (_, el) => {
      el.router('/signin', el.getRoot())
    },
  },
};