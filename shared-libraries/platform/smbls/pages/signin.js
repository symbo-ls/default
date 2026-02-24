export const signin = {
  flow: 'y',
  align: 'center',
  height: '100%',
  margin: 'auto',
  onRender: () => {},
  LoginWindow: {
    animation: 'modalIn',
    animationDuration: 'E',
    onSubmit: async (ev, el, s) => {
      ev.preventDefault()

      s.update({
        loading: true
      })

      const {
        identifier,
        password
      } = s

      try {
        const pluginSession = el.call('getPluginSessionFromUrl')
        const loginResult = pluginSession ?
          await el.sdk.login(identifier, password, {
            session: pluginSession
          }) :
          await el.sdk.login(identifier, password)

        s.update({
          loading: true
        })
        el.call('applyLoader', {
          value: true,
          force: true,
          timeout: 1
        })

        await el.call('initializeUserSession', {
          loginData: loginResult,
        })

        el.router('/dashboard', el.getRoot())
      } catch (error) {
        console.error('Failed to sign in:', error)
        el.call('openNotification', {
          title: 'Failed to sign in',
          message: error.message,
          type: 'error'
        })
        s.update({
          loading: false
        })
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
      title: 'Sign in to Symbols',
      p: null,
    },
    Flex: {
      LoginForm: {},
      RequestAccessButtons: {
        Flex: {
          Link: {
            icon: 'email',
            gap: 'Z',
            text: 'Continue with email',
            href: '/signup',
            '@mobileL': {
              minWidth: '100%',
              padding: 'Z1 -',
            },
          },
          childProps: {
            '@tabletS': {
              padding: '- - - C',
            },
            '@mobileL': {
              align: 'center center',
              maxWidth: '100%',
              textAlign: 'center',
              border: 'none',
            },
          },
        },
      },
    },
  },
  LandingFooterLite: {},
};