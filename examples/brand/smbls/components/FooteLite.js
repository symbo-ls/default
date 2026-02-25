export const FooteLite = {
  tag: 'footer',
  align: 'center space-between',
  padding: 'B 0 0',
  width: '100%',
  margin: '- auto',
  gap: 'B',
  '@tabletL': {
    flow: 'column',
    gap: 'C1'
  },
  childProps: {
    '@tabletL': {
      width: '100%',
      padding: '0'
    }
  },
  Copy: {
    display: 'flex',
    gap: 'X2',
    lineHeight: '1',
    '@dark': {
      color: 'gray8'
    },
    '@light': {
      color: 'gray5'
    },
    DocsLink: {
      target: '_blank',
      href: 'https://symbols.app',
      text: 'Symbols'
    },
    Year: {
      text: ' © 2025'
    },
    DocsLink_version: {
      text: (el, s, ctx) => (!ctx.version ? '' : `TODO: smbls@^${ctx.version}`),
      href: 'https://www.npmjs.com/smbls',
      target: '_blank',
      margin: '- - - A2',
      '@dark': {
        color: 'gray9'
      },
      '@light': {
        color: 'gray6'
      }
    }
  },
  DocsSocialLinks: {
    textAlign: 'end',
    H6: null,
    P: null,
    onRender: () => {}
  }
}
