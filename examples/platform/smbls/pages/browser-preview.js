export const browserPreview = {
  extend: 'Flex',
  state: {
    searchTerm: '',
    recents: [
    ],
  },
  scope: {
    getInitialValues: (el, s) => {
      const selected = s.key || el.getSelectedKey?.()
      if (!selected) return

      const type = s.type || el.getSelected().state.type
      const route = (type === 'pages') ? `${selected}` : `/component?key=${selected}&hideUi=true`
      const isPage = type?.startsWith('/')
      const prefix = (isPage ? '&' : '?') + 'env='
      const env = s.env || 'Current'


      s.envUrl = {
        Current: prefix + 'dev',
        Development: '',
        Staging: prefix + 'staging',
        Production: prefix + 'production'
      } [env]

      const path = el.getCanvasPathname()
      const domain = 'preview.symbo.ls'
      const origin = `https://${domain}${path}`
      const urlWithEnv = `${origin}${route}`

      const appkey = el.getAppKey()
      const url = `https://${appkey}${route}`

      s.selected = selected
      s.path = path
      s.url = url
      s.urlWithEnv = urlWithEnv
    },
  },
  props: {
    flow: 'y',
    gap: 'X2',
    width: '100%',
    height: '100%',
    padding: 'X',
    onInit: (el, s) => {
      el.scope.getInitialValues(el, s)
    },
    onBeforeUpdate: (_, el, s) => {
      el.scope.getInitialValues(el, s)
    },
  },
  PreviewCanvasNavbar: {},
  Window: {
    flex: 1,
    width: '100%',
    theme: 'modal',
    round: 'A',
    overflow: 'hidden',
    position: 'relative',
    Iframe: {
      background: 'white',
      src: '{{ url }}',
      border: 0,
      hide: (el, s) => !s.url,
      height: '100%',
      width: '100%',
    },
    Message: {
      hide: (el, s) => s.url,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      P: {
        color: 'disabled',
        text: 'Select the component or page to preview',
      },
    },
  },
};