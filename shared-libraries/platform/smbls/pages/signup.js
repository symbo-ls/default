export const signup = {
  flow: 'y',
  align: 'center',
  height: '100%',
  margin: 'auto',
  onInit: (el, s) => {
    const searchParams = new URLSearchParams(window.location.search)
    const hasToken = searchParams.has('token')
    if (hasToken) {
      const token = searchParams.get('token')
      const splittedToken = token.split('.')
      if (splittedToken.length > 1) {
        try {
          const decodedToken = JSON.parse(atob(splittedToken[1]))
          s.quietUpdate({
            email: decodedToken.email,
            hasToken
          })
        } catch (e) {
          console.error('Problem with Signup Token', e)
        }
      }
    }
  },
  LoginWindow: {
    boxSize: 'auto',
    animation: 'modalIn',
    animationDuration: 'E',
    boxSizing: 'border-box',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()
      s.update({
        loading: true
      })

      const {
        email,
        password,
        name
      } = s.parse()
      const currentUrl = new URL(window.location.href)
      const token = currentUrl.searchParams.get('token')

      try {
        const pluginSession = el.call('getPluginSessionFromUrl')
        const payload = {
          email,
          password,
          name,
          callbackUrl: `${window.location.origin}/signup-confirmation`,
          inviteToken: token
        }
        if (pluginSession) {
          await el.sdk.register(payload, {
            session: pluginSession
          })
        } else {
          await el.sdk.register(payload)
        }
      } catch (ex) {
        el.call('openNotification', {
          title: 'Error message',
          message: `${ex}`,
          type: 'error'
        })
        s.update({
          loading: false
        })
        el.call('applyLoader', {
          value: false,
          force: true,
          timeout: 1
        })
        return
      }

      s.update({
        loading: false,
        confirm: true
      })

      if (el.isAuthorised()) {
        await el.call('fetchUser')
      }

      el.call('applyLoader', {
        value: false,
        force: true,
        timeout: 1
      })

      if (window.plausible) {
        window.plausible('Signup')
      }

      if (s.error) {
        el.call('openNotification', {
          title: 'Error message',
          message: s.error?.split('] ')[1],
          type: 'error'
        })
        s.update({
          confirm: false,
          loading: false,
        })
      } else {
        el.call('openNotification', {
          title: 'Success',
          message: 'You will receive an email confimation link on the email address you signed up with. Please go to your email and confirm the registration.',
          type: 'success'
        })
        return setTimeout(() => el.router('/dashboard', el.getRoot()), 350)
      }

      el.call('applyLoader', {
        value: false,
        force: true,
        timeout: 1
      })
    },
    '@tabletS': {
      boxSize: 'auto I',
    },
    '@mobileL': {
      boxSize: 'auto H',
      padding: '- C',
    },
    '@mobileS': {
      boxSize: 'auto G2',
      padding: '- B1',
    },
    '@mobileXS': {
      boxSize: 'auto G1',
    },
    ModalHeader: {
      '@mobileL': {
        gap: '0',
      },
      title: 'Sign up to Symbols',
      p: `You're joining the Symbols. Creating the account will greatly help you increase productivity.`,
      heading: {
        p: {
          '@tabletS': {
            maxWidth: 'H',
          },
          '@mobileL': {
            minWidth: '100%',
          },
        },
      },
    },
    Flex: {
      '@mobileL': {
        flow: 'column',
        padding: '0',
        fontSize: 'A',
      },
      SignupForm: {},
      RequestAccessButtons: {
        Flex: {
          Link: {
            icon: 'email',
            gap: 'Z',
            text: 'Continue with existing email',
          },
        },
      },
    },
  },
  ConfirmEmail: {
    transition: 'B defaultBezier',
    transitionProperty: 'opacity, visibility',
    '.confirm': {
      opacity: 1,
      visibility: 'visible',
    },
    '!confirm': {
      opacity: 0,
      visibility: 'hidden',
    },
  },
  LandingFooterLite: {},
};