export const LoginForm = {
  flow: 'y',
  height: '100%',
  gap: 'C1',
  '@mobileL': {
    height: 'unset',
    justifyContent: 'flex-start',
    width: '100%'
  },
  Flex: {
    gap: 'A',
    flow: 'column',
    childProps: {
      width: '100%',
      '@mobileL': {
        maxWidth: '100%',
        alignItems: 'stretch',
        width: '100%'
      }
    },
    Title: null,
    Input: null,
    Identifier: {
      Title: {
        text: 'Email or username',
        padding: '- - Y'
      },
      Input: {
        height: 'B2',
        width: '100%',
        autocomplete: 'username',
        value: '{{ identifier }}',
        required: true,
        placeholder: 'e.g. hello@symbo.ls or username',
        borderRadius: 'Z',
        '@mobileL': {
          width: '100%',
          height: 'unset'
        },
        onInput: (ev, el, s) => {
          s.update({
            identifier: el.node.value
          })
        }
      }
    },
    Password: {
      Title: {
        text: 'Password',
        padding: '- - X'
      },
      Input: {
        height: 'B2',
        width: '100%',
        autocomplete: 'current-password',
        value: '{{ password }}',
        placeholder: '••••••••',
        required: true,
        type: 'password',
        borderRadius: 'Z',
        '@mobileL': {
          width: '100%',
          height: 'unset'
        },
        onInput: (ev, el, s) => {
          s.password = el.node.value
          s.update({
            password: el.node.value
          })
        }
      }
    }
  },
  ModalFooter: {
    display: 'flex',
    flow: 'row',
    width: '100%',
    maxWidth: 'unset',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'Z',
    '@mobileL': {
      flow: 'column',
      gap: 'A2',
      childProps: {
        width: '100%'
      }
    },
    CheckButton: {
      theme: 'primary',
      text: 'Sign in',
      type: 'submit',
      Icon: null,
      width: 'fit-content',
      height: 'B2',
      padding: 'Z1 B1',
      '@mobileL': {
        width: '100%',
        maxWidth: '100%',
        height: 'unset'
      }
    },
    Title: null,
    Input: null,
    DocsLink: {
      margin: '- - - auto',
      fontSize: 'Z2',
      fontWeight: '400',
      href: '/reset-password',
      text: 'Forgot your password?',
      display: 'flex',
      justifyContent: 'center',
      '@mobileL': {
        margin: '0 auto'
      }
    }
  }
}
