export const ThemesInNavbar = {
  Dark: {
    title: 'Dark mode',
    isActive: (el) => el.getRootState('sceneTheme') === 'dark',
    theme: 'sepia',
    icon: (el, s) => el.getRootState('sceneTheme') === 'dark' ? 'moon' : 'moon outline',
    onClick: (ev, el, s) => {
      const key = 'dark'
      el.getRootState().update({
        globalTheme: key,
        sceneTheme: key
      })
      el.getRoot().call('router', window.location.pathname)
      el.getRoot().call('setCookie', 'sceneTheme', key)
      el.getRoot().call('setCookie', 'globalTheme', key)
    },
  },
  Light: {
    title: 'Light mode',
    isActive: (el) => el.getRootState('sceneTheme') === 'light',
    theme: 'sepia',
    icon: (el, s) => el.getRootState('sceneTheme') === 'light' ? 'sun' : 'sun outline',
    onClick: (ev, el, s) => {
      const key = 'light'
      el.getRootState().update({
        globalTheme: key,
        sceneTheme: key
      })
      el.getRoot().call('router', window.location.pathname)
      el.getRoot().call('setCookie', 'sceneTheme', key)
      el.getRoot().call('setCookie', 'globalTheme', key)
    },
  },
  extend: 'NavbarButtonSet',
  props: {
    gap: 'W2',
  },
};