export const resetPassword = {
  flow: 'y',
  align: 'center',
  height: '100%',
  margin: 'auto',
  LoginWindow: {
    animation: 'modalIn',
    animationDuration: 'E',
    onInit: (el, s) => {
      const url = new URL(window.location.href)
      s.token = url.searchParams.get('token')
      s.email = url.searchParams.get('email') || ''
    },
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      s.update({
        loading: true
      })

      if (s.token) {
        if (s.password !== s.repeatPassword) {
          s.update({
            repeatPasswordTouched: true,
            loading: false
          })
          return el.call('openNotification', {
            title: 'Failed to change password',
            message: 'Passwords do not match',
            type: 'error'
          })
        }
        try {
          await el.sdk.confirmPasswordReset(s.token, s.password)
          el.call('openNotification', {
            title: 'Success',
            message: 'Password has been successfully changed',
            type: 'success'
          })
          // await signin.LoginWindow.onSubmit(ev, el, s) why is login called in reset password?
          setTimeout(() => {
            el.router('/signin', el.getRoot(), {})
          }, 200)
        } catch (e) {
          s.update({
            loading: false
          })
          el.call('openNotification', {
            title: 'Error message',
            message: `${e}`,
            type: 'error'
          })
        }
        return
      }
      if (!s.email) {
        s.update({
          touched: true,
          loading: false
        })
        return
      }
      try {
        await el.sdk.requestPasswordReset(s.email)
        s.update({
          sent: true
        })
      } catch (e) {
        s.update({
          loading: false
        })
        el.call('openNotification', {
          title: 'Error message',
          message: `${e}`,
          type: 'error'
        })
      }
    },
    '@tabletS': {
      boxSize: 'auto I'
    },
    '@mobileL': {
      boxSize: 'auto H',
      padding: '- C'
    },
    '@mobileS': {
      boxSize: 'auto G2',
      padding: '- B1'
    },
    '@mobileXS': {
      boxSize: 'auto G1'
    },
    ConfirmEmail: {
      transition: 'B defaultBezier',
      transitionProperty: 'opacity, visibility',
      zIndex: 999,
      '.sent': {
        opacity: 1,
        visibility: 'visible'
      },
      '!sent': {
        opacity: 0,
        visibility: 'hidden'
      },
      H: {
        text: 'Please check the email: {{ email }}'
      },
      P: {
        text: 'And follow the activation link.'
      }
    },
    ModalHeader: {
      title: 'Recover password',
      p: 'Use your email used during signup to recover password'
    },
    Flex: {
      padding: 'C1 B C1 C',
      ResetEmailForm: {},
      ResetPasswordsForm: {
        if: (el, s) => s.token
      }
    }
  },
  Footer: {}
}
