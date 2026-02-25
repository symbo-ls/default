export const browserExtension = {
  extend: 'Flex',
  props: {
    flow: 'y',
    gap: 'X2',
    width: '100%',
    height: '100%',
    padding: 'X'
  },
  state: {
    recents: [
    ],
    extensionInstalled: 'Boolean(window.chrome && window.chrome.runtime)'
  },
  ExtensionCanvasNavbar: {},
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
      width: '100%'
    },
    Message: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      hide: (el, s) => s.extensionInstalled && s.url,
      P: {
        color: 'disabled',
        text: 'Type URL to start inspecting'
      }
    },
    InstallExt: {
      hide: (el, s) => !s.extensionInstalled
    },
    Chosen: {
      hide: (el, s) => !s.parent.inspectedItem,
      position: 'absolute',
      inset: '0',
      onStateUpdate: (ch, el, s, ctx, opts) => {
        // overwrite default state
      }
    }
  }
}
