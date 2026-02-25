export const LibrariesInLearn = {
  extend: 'Flex',
  state: {
    limit: 5
  },
  tag: 'form',
  props: {
    flow: 'y',
    align: 'start',
    gap: 'A',
    position: 'relative',
    onSubmit: (ev, el, s) => {
      ev.preventDefault()
      el.call('createItem', s.type, s.key)
    }
  },
  CaptionTitle: {
    Text: {
      text: 'Open source libraries'
    }
  },
  Flex: {
    flow: 'y',
    gap: 'A',
    margin: '- - - -X',
    childExtends: 'LibraryItemInLearn',
    childrenAs: 'state',
    children: (el, s) => [{
      poster: 'https://api.symbols.app/core/files/public/68b667ce424350c909ec03f9/download',
      projectPath: 'nikoloza/default',
      amount: 206,
      title: 'Default'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b667c8424350c909ec03d4/download',
      projectPath: 'nikoloza/ecommerce',
      amount: 271,
      title: 'Ecommerce'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b667ac424350c909ec034e/download',
      projectPath: 'nikoloza/forms',
      amount: 248,
      title: 'Forms'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b667c2424350c909ec03a6/download',
      projectPath: 'nikoloza/ai',
      amount: 213,
      title: 'AI'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b667d6424350c909ec0421/download',
      projectPath: 'nikoloza/web3',
      amount: 85,
      title: 'Web3'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b667db424350c909ec044f/download',
      projectPath: 'nikoloza/content-and-marketing',
      amount: 275,
      title: 'Content & Marketing'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b66c9b424350c909ec1f66/download',
      projectPath: 'nikoloza/docs',
      amount: 598,
      title: 'Docs'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b671ef424350c909ec5342/download',
      projectPath: 'nikoloza/charts',
      amount: 0,
      title: 'Charts'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b66bfb424350c909ec1eb4/download',
      projectPath: 'nikoloza/ui',
      amount: 0,
      title: 'No-code'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b672ad424350c909ec544b/download',
      projectPath: 'nikoloza/cms',
      amount: 0,
      title: 'CMS'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b66c19424350c909ec1f0c/download',
      projectPath: 'nikoloza/code',
      amount: 0,
      title: 'Code'
    },
    {
      poster: 'https://api.symbols.app/core/files/public/68b63fae424350c909ea336e/download',
      projectPath: 'nikoloza/miscellaneous',
      amount: 0,
      title: 'Miscellaneous'
    }
    ].slice(0, s.limit || 30)
  },
  InsertSectionShadow: {
    left: '-C1',
    right: '-C1',
    bottom: 'C'
  },
  Button: {
    extends: [
      'CanvasButton',
      'Button'
    ],
    zIndex: 2,
    margin: '- - - -Y2',
    icon: (el, s) => 'arrow angle ' + (s.limit === 5 ? 'down' : 'up'),
    text: (el, s) => (s.limit === 5 ? 'More' : 'Less') + ' libraries',
    gap: 'Y1',
    padding: 'Y2 Z2',
    color: 'caption',
    fontSize: 'Z2',
    Icon: {
      order: 2
    },
    onClick: (ev, el, s) => {
      s.update({
        limit: s.limit === 5 ? 30 : 5
      })
    }
  }
}
